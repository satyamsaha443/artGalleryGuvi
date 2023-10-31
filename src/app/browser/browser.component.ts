import { ArtService } from '../shared/art.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ArtworkdetailComponent } from '../artworkdetail/artworkdetail.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';


declare var $: any;

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit, AfterViewInit {
  artworks: any[] =[];
  selectedArt: any;
  pagination: any ={};
  pageSize: number = 6;
  pageNumber: number = 1;

  artworkCarouselItems = [
    {
      image: 'assets/carousel2.jpg',
      alt: 'Carousel Image 1'
    },
    {
      image: 'assets/carousel1.jpg',
      alt: 'Carousel Image 2'
    },
    {
      image: 'assets/carousel4.jpg',
      alt: 'Carousel Image 3'
    }
  ];




  public pageSlice: any[] = [];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

 


  constructor(private artService: ArtService,
    public dialog: MatDialog
    ){}

    favorites: ArtService[] = [];
      addToFavorites(artwork: any): void { // modified addToFavorites method
    this.favorites.push(artwork);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

    
    ngOnInit(): void {
      this.artService.getArtworks().subscribe(data => {
        this.artworks = data.data;
        console.log(this.artworks);
        this.pageSlice = this.artworks.slice(0, this.pageSize);
      });
    
      this.artService.getPagination().subscribe(pagination => {
        this.pagination = pagination;
        console.log(this.pagination);
        this.paginator.length = this.pagination.total;
        this.pageSize = this.pagination.perPage; // Add this line to update the pageSize value
        this.paginator.pageSize = this.pageSize;
        this.paginator.pageIndex = this.pageNumber - 1;
      });
    }
    ngAfterViewInit(): void {
      this.paginator.pageSize = this.pageSize; // Update the pageSize value here as well
      this.paginator.page.subscribe((event: any) => {
        this.pageNumber = event.pageIndex + 1;
        const startIndex = event.pageIndex * event.pageSize;
        const endIndex = startIndex + event.pageSize;
        this.pageSlice = this.artworks.slice(startIndex, endIndex);
      });

      setInterval(() => {
        const activeElement = document.querySelector('.carousel-item.active');
        const activeIndex = activeElement?.getAttribute('data-bs-slide-to');
        const nextIndex = parseInt(activeIndex || "0") === this.artworkCarouselItems.length - 1 ? 0 : parseInt(activeIndex || "0") + 1;
        const nextSlide = document.querySelector(`[data-bs-slide-to='${nextIndex}']`);
        nextSlide?.dispatchEvent(new Event('click'));
      }, 2000);
    }
    onPageChange(event: PageEvent) {
      this.pageSize = event.pageSize; // Update the pageSize value
      this.pageNumber = event.pageIndex + 1;
      const startIndex = event.pageIndex * event.pageSize;
      const endIndex = startIndex + event.pageSize;
      this.pageSlice = this.artworks.slice(startIndex, endIndex);
      console.log(this.pageSlice);
    }
  openModal(art: any): void {
    this.selectedArt = art;
    $('#artDetailModal').modal('show');
  }

  openDetail(art:any): void {
    this.dialog.open(ArtworkdetailComponent,{
      width: '600px',
      data: art
    });
  }
getArtworkImageUrl(imageId: string): string {
  return `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
}



}

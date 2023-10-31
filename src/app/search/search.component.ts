import { Component, OnInit } from '@angular/core';
import { ArtService } from '../shared/art.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: string = '';
  searchResults: any[] = [];
  constructor(private artService: ArtService){}

  ngOnInit(): void{}
  
  searchArtworks(): void {
    this.artService.searchArtworks(this.searchQuery).subscribe(data => {
      this.searchResults = data.data; 
    });
  }
  getArtworkImageUrl(imageId: string): string {
    return `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
  }
  

}

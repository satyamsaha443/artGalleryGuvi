import { Component, OnInit } from '@angular/core';
import { ArtService } from '../shared/art.service';
import { ArtworkdetailComponent } from '../artworkdetail/artworkdetail.component';
import { MatDialog } from '@angular/material/dialog';





@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent {
  favorites: any[] = []; // modify favorites type to any[]
  notification: string | null = null;

  constructor( public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      this.favorites = JSON.parse(savedFavorites);
    }
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
  

// When adding
addToFavorites(artwork: any): void {
  // Check if the artwork is already in the favorites list
  const exists = this.favorites.some(fav => fav.image_id === artwork.image_id);

  if (!exists) {
    this.favorites.push(artwork);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
    this.notification = 'Artwork added to favorites!';
  } else {
    this.notification = 'This artwork is already in your favorites!';
  }
}


removeFromFavorites(artwork: any): void {
  const index = this.favorites.findIndex(fav => fav.image_id === artwork.image_id);

  if (index > -1) {
    this.favorites.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
    this.notification = 'Artwork removed from favorites!';
  }
}


// Method to dismiss the notification
dismissNotification(): void {
  this.notification = null;
}

  

}

import { Component,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-artworkdetail',
  templateUrl: './artworkdetail.component.html',
  styleUrls: ['./artworkdetail.component.css']
})
export class ArtworkdetailComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}

  
getArtworkImageUrl(imageId: string): string {
  return `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
}
}

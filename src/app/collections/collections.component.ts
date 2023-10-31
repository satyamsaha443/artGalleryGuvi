import { Component, OnInit } from '@angular/core';
import { ArtService } from '../shared/art.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent {
  collections: any[] = [];
  constructor(private artService: ArtService){  }

  ngOnInit(): void {
    this.artService.getCollections().subscribe(data => {
      this.collections = data.data;
    });
  }

}

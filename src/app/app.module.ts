import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserComponent } from './browser/browser.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CollectionsComponent } from './collections/collections.component';
import{MatDialogModule} from '@angular/material/dialog';
import { ArtworkdetailComponent } from './artworkdetail/artworkdetail.component';
// import {MatFormFieldModule } from '@angular/material/form-field';  
import { NgxPaginationModule } from 'ngx-pagination';
import {MatPaginatorModule} from '@angular/material/paginator';

import { core } from '@angular/compiler';
import { FavouritesComponent } from './favourites/favourites.component';
import {MatSnackBarModule} from '@angular/material/snack-bar'



// import {MatGridList} from '@angular/material/grid-list'


@NgModule({
  declarations: [
    AppComponent,
    BrowserComponent,
    SearchComponent,
    DetailsComponent,
    NavbarComponent,
    CollectionsComponent,
    ArtworkdetailComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    NgbModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    NgxPaginationModule,
    MatPaginatorModule,

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

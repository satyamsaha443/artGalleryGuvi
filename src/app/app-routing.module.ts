import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowserComponent } from './browser/browser.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { CollectionsComponent } from './collections/collections.component';
import { FavouritesComponent } from './favourites/favourites.component';

const routes: Routes = [
  {path: '', redirectTo: '/browse', pathMatch:'full'},
  {path: 'browse', component: BrowserComponent},
  {path: 'search', component: SearchComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'collections', component:CollectionsComponent},
  {path: 'favorites', component:FavouritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

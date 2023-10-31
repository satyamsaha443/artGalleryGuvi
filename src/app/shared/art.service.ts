import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ArtService {
  

  private baseUrl: string= 'https://api.artic.edu/api/v1/artworks';
  private searchUrl: string ='https://api.artic.edu/api/v1/artworks/search';
  private collectionsUrl : string = 'https://api.artic.edu/api/v1/collections';
  private paginationUrl: string = 'https://api.artic.edu/api/v1/artists/${artistId}/artworks?page=1&limit=100';
  id: any;

  constructor(private http: HttpClient) { }
  getArtworks(): Observable<any> {
    return this.http.get(this.baseUrl); 
  }
 

  searchArtworks(query: string): Observable<any> {
    let params = new HttpParams().set('q', query);
    console.log('API_URL:', this.searchUrl, params.toString());

    return this.http.get(this.searchUrl, { params })
      .pipe(
        catchError(error => {
          console.error('Error:', error);
          return throwError(error);
        })
      );
  }

  
  getCollections(): Observable<any>{
    return this.http.get(this.collectionsUrl);
  }

  getPagination(): Observable<any> {
    return this.http.get(this.paginationUrl);
  }
  // searchArtworks(query: string): Observable<any> {
  //   const apiUrl = `https://api.artic.edu/api/v1/artworks/search?q=${query}&limit=20`;
  //   return this.http.get(apiUrl);
  // }

}

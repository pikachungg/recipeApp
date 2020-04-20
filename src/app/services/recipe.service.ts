import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
// Typescript custom enum for search types (optional)

 
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  url = 'https://api.edamam.com/search';
  app_key = '1e6ed0982c89f06c66f4c566195ea644'; // <-- Enter your own key here!
  app_id = 'ed7806a9'
 
  /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(private http: HttpClient) { }
 
  /**
  * Get data from the OmdbApi 
  * map the result to return only the results that we need
  * 
  * @param {string} title Search Term
  * @param {SearchType} type movie, series, episode or empty
  * @returns Observable with the search results
  */
  searchData(name: string):Observable<any>{
    // return this.http.get(`${this.url}?q=${name}&app_id=${this.app_id}&app_key=${this.app_key}`).pipe(
    //   map(results => results['Search'])
    // );
    console.log(`${this.url}?q=${name}&app_id=${this.app_id}&app_key=${this.app_key}`);
    return this.http.get(`${this.url}?q=${encodeURI(name)}&app_id=${this.app_id}&app_key=${this.app_key}`).pipe(
      map(results=> {
        console.log("results");
        return results['hits'];
      })
    );
  }

  
 
  /**
  * Get the detailed information for an ID using the "i" parameter
  * 
  * @param {string} id imdbID to retrieve information
  * @returns Observable with detailed information
  */
  // getDetails(id) {
  //   return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  // }
}
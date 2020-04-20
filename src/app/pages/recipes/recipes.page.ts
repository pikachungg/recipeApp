import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  results: Observable<any>
  searchTerm: string = '';
  url = 'https://api.edamam.com/search';
  app_key = '1e6ed0982c89f06c66f4c566195ea644'; // <-- Enter your own key here!
  app_id = 'ed7806a9'

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  searchChanged() {
    // Call our service function which returns an Observable
    // this.recipeService.searchData(this.searchTerm);
    this.results = this.recipeService.searchData(this.searchTerm);
    this.results.subscribe(res=>{
      console.log(res);
    });
    // fetch(`${this.url}?q=${this.searchTerm}&app_id=${this.app_id}&app_key=${this.app_key}`)
    // .then(function(resp){return resp.json()})
    // .then(function(data){
    //   console.log(data);
    // })
    // .catch(function(){
    //   console.log("err");
    // })

  }
}

import {RecipeService} from './../../services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {

  information = null;
  ingredients = null;

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService) { 
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.recipeService.getDetails(id).subscribe(result=>{
      this.information = result;
      this.ingredients = result["extendedIngredients"];
      console.log(this.information);
      console.log(this.ingredients);
    });
  }

}

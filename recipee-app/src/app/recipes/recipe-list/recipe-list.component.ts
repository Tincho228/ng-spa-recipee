import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', "https://www.thelifejolie.com/wp-content/uploads/2018/10/Spicy-Sausage-Pasta-Recipe-The-Life-Jolie-7.jpg"),
    new Recipe('A test recipe', 'This is simply a test', "https://www.thelifejolie.com/wp-content/uploads/2018/10/Spicy-Sausage-Pasta-Recipe-The-Life-Jolie-7.jpg")
  ];
}
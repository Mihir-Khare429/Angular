import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('Recipe 1','A description on Recipe 1','https://www.google.com/imgres?imgurl=https%3A%2F%2Fi2.wp.com%2Fwww.downshiftology.com%2Fwp-content%2Fuploads%2F2018%2F12%2FShakshuka-19.jpg&imgrefurl=https%3A%2F%2Fdownshiftology.com%2Frecipes%2Fshakshuka%2F&tbnid=HjLudVhp0kF7bM&vet=12ahUKEwj0osyjg7fqAhVzkeYKHRysCPoQMygGegUIARD1AQ..i&docid=00n4H4GWEEW7hM&w=1200&h=800&q=recipe%20images&ved=2ahUKEwj0osyjg7fqAhVzkeYKHRysCPoQMygGegUIARD1AQ'),
    new Recipe('Recipe 1','A description on Recipe 1','https://www.google.com/imgres?imgurl=https%3A%2F%2Fi2.wp.com%2Fwww.downshiftology.com%2Fwp-content%2Fuploads%2F2018%2F12%2FShakshuka-19.jpg&imgrefurl=https%3A%2F%2Fdownshiftology.com%2Frecipes%2Fshakshuka%2F&tbnid=HjLudVhp0kF7bM&vet=12ahUKEwj0osyjg7fqAhVzkeYKHRysCPoQMygGegUIARD1AQ..i&docid=00n4H4GWEEW7hM&w=1200&h=800&q=recipe%20images&ved=2ahUKEwj0osyjg7fqAhVzkeYKHRysCPoQMygGegUIARD1AQ')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

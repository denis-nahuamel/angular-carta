import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }
  recipes = [];
  getRecipes(){
    return this.homeService.getAllRecipes();
  }
  ngOnInit(): void {
    this.getRecipes().subscribe(response => {
      try{

        this.recipes = response.results;
        console.log("results", this.recipes)
      }
      catch(e){
        console.log("results", e)

      }
      // this.recipes= response.results
    })
  }

}

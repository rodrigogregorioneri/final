import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';



@Component({
  selector: 'app-slide',
  templateUrl: './slide.html'  
})
export class SlideComponent  {

  constructor(public navCtrl: NavController) { 

  }




	    
	trocaPagina(){
 
      this.navCtrl.push("HomePage");
  }




}
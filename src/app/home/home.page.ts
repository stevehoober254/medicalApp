import { Component, ViewChild } from '@angular/core';
import { IonSlides, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('slides', {static: true}) slides: IonSlides;
  cardOptions = {
    slidesPerView: 1.7,
    initialSlide:0,
    autoPlay:false
  };
  currentSlides = 1;
  patients = [1,2,3,4,5];
  constructor(
    private menuCtrl: MenuController
  ) {

  }

  openMenu(){
    this.menuCtrl.open();
  }
  slideChanged(e: any) {
    this.slides.getActiveIndex().then((index: number) => {
        console.log(index);
        if(index === 0){ return this.currentSlides = 1;}
        this.currentSlides = index;
    });
}
}

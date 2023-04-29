import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() favProjects: any;
  currentCardId: number = 0;
  previousCard: any;
  currentCard: any;
  nextCard: any;

  ngOnInit(): void {
    this.previousCard = this.favProjects[this.favProjects.length - 1];
    this.currentCard = this.favProjects[0];
    this.nextCard = this.favProjects[1];
    this.currentCardId = 0;
  }

  getLeftCard() {
    if (this.currentCardId == this.favProjects.length - 1) {
      this.currentCardId = 0;

      this.previousCard = this.favProjects[this.favProjects.length - 1];
      this.currentCard = this.favProjects[this.currentCardId];
      this.nextCard = this.favProjects[this.currentCardId + 1];
    }
    else if (this.currentCardId == this.favProjects.length - 2) {
      this.currentCardId++;

      this.previousCard = this.favProjects[this.favProjects.length - 2];
      this.currentCard = this.favProjects[this.currentCardId];
      this.nextCard = this.favProjects[0];
    }
    else {
      this.currentCardId++;

      this.previousCard = this.favProjects[this.currentCardId - 1];
      this.currentCard = this.favProjects[this.currentCardId]
      this.nextCard = this.favProjects[this.currentCardId + 1];
      //console.log(this.currentCardId - 1 + ", " + this.currentCardId + ", " + (this.currentCardId + 1));
    }
  }

  getRightCard() {
    if (this.currentCardId == 0) {
      this.currentCardId = this.favProjects.length - 1;

      this.previousCard = this.favProjects[this.currentCardId - 1];
      this.currentCard = this.favProjects[this.currentCardId];
      this.nextCard = this.favProjects[0];
    }
    else if (this.currentCardId == 1) {
      this.currentCardId--;

      this.previousCard = this.favProjects[this.favProjects.length - 1];
      this.currentCard = this.favProjects[this.currentCardId];
      this.nextCard = this.favProjects[this.currentCardId + 1];
    }
    else {
      this.currentCardId--;

      this.previousCard = this.favProjects[this.currentCardId - 1];
      this.currentCard = this.favProjects[this.currentCardId]
      this.nextCard = this.favProjects[this.currentCardId + 1];
      //console.log(this.currentCardId - 1 + ", " + this.currentCardId + ", " + (this.currentCardId + 1));
    }
  }
}

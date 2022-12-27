import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-row',
  templateUrl: './card-row.component.html',
  styleUrls: ['./card-row.component.css']
})
export class CardRowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById('scrollEvent')?.addEventListener('scroll', (e) => this.cardsScroll(e), true);
  }

  cardContents(): any {
    return [
      {val: 866, text: 'Calories burn', svg: 'assets/images/fire.svg', percentage: '60%'},
      {val: 7996, text: 'Steps', svg: 'assets/images/feet.svg', percentage: '45%'},
      {val: 21, text: 'Weight loss', svg: 'assets/images/fmeter.svg', percentage: '80%'},
    ]
  }

  cardsScroll(event: any): void {
    console.log(event);
    document.getElementById('ringBall2')?.classList.toggle('ball');
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-row',
  templateUrl: './card-row.component.html',
  styleUrls: ['./card-row.component.css']
})
export class CardRowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cardContents(): any {
    return [
      {val: 866, text: 'Calories burn', svg: 'assets/images/fire.svg', percentage: '60%'},
      {val: 7996, text: 'Steps', svg: 'assets/images/feet.svg', percentage: '45%'},
      {val: 21, text: 'Weight loss', svg: 'assets/images/fmeter.svg', percentage: '80%'},
    ]
  }

}

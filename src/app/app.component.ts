import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weight-loss-app';

  ngOnInit(): void {
    let clickEvent = document.getElementById('pageClick')?.addEventListener('click', (e) => this.getClickPosition(e))
  }

  getClickPosition(e: MouseEvent): void {
    let xPosition = e.clientX;
    let yPosition = e.clientY;

    // console.log(e.target)
  }
}

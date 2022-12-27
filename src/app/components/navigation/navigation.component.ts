import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public showNav: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu(): void {
    this.showNav = true;
    document.getElementById('navcontainer')?.classList.toggle('invisible');
    document.getElementById('bgModal')?.classList.toggle('opacity-0');
    document.getElementById('bgModal')?.classList.toggle('opacity-20');
    document.getElementById('navItems')?.classList.toggle('translate-y-full');
    document.getElementById('navList')?.classList.toggle('nav-items-animation');
    document.getElementById('ringBall')?.classList.toggle('ball');
  }

  navContents(): any {
    return [
      {text: 'Add blood pressure', svg: 'assets/images/fheart.svg'},
      {text: 'Add weight measurement', svg: 'assets/images/feet.svg'},
      {text: 'Add activity', svg: 'assets/images/fcalc.svg'},
      {text: 'Track my workout', svg: 'assets/images/fmeter.svg'},
    ]
  }

}

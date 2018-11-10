import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.less']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}

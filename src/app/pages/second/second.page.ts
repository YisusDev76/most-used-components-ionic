import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
  animations:[
    trigger('fadeInOut',[
      state('void',style({opacity:0})),
      state('*', style({opacity:1})),
      transition('void => *',animate('200ms ease-in')),
      transition('* => void', animate('200ms ease-out'))
    ])
  ],
})
export class SecondPage implements OnInit {
  loading = true;
  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.loading = false;
    },2000);
  }

}

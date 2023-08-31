import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AnimationController, IonButton } from '@ionic/angular';
import type { Animation } from '@ionic/angular';


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
  @ViewChild('btnIonAcademy', { read: ElementRef }) cartBnt!: ElementRef;
  private animation: Animation | undefined;

  constructor(private animationCtrl: AnimationController) {}

  ngOnInit() {
    setTimeout(()=>{
      this.loading = false;
    },2000);
  }

  ngAfterViewInit() {
    const btnIon = this.animationCtrl
    .create()
    .addElement(this.cartBnt.nativeElement)
    .duration(2000)
    .delay(1000)
    .keyframes([
      { offset: 0, transform: 'scale(1)', opacity: '1' },
      { offset: 0.5, transform: 'scale(1.5)', opacity: '0.5' },
      { offset: 1, transform: 'scale(1)', opacity: '1' },
    ]);

    this.animation = this.animationCtrl
      .create()
      .duration(2000)
      .iterations(Infinity)
      .addAnimation([btnIon]);

    this.animation.play();

  }

}

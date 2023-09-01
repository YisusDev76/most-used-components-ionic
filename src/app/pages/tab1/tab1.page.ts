import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GestureController, GestureDetail, IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class Tab1Page implements OnInit {

  @ViewChild('square', { read: ElementRef }) square!: ElementRef<HTMLIonCardElement> ;

  constructor(private el: ElementRef, private gestureCtrl: GestureController) { }

  ngOnInit() {
  }


  ngAfterViewInit() {
    const gesture = this.gestureCtrl.create({
      el: this.square.nativeElement,
      threshold: 0,
      gestureName: 'my-gesture',
      onStart:(ev) => this.onStartHandler(ev),
      onMove:(ev) => this.onMoveHandler(ev),
      onEnd:(ev) => this.onMoveEnd(ev),
      // onStart: () => this.onStart(),
      
    });

    gesture.enable();
  }

  private onStartHandler = (detail:GestureDetail)=>{
    this.square.nativeElement.style.transition = 'none';
  }

  private onMoveHandler = (detail:GestureDetail) => {
    // console.log(detail);
    const x = detail.currentX - detail.startX;
    const y = detail.currentY - detail.startY;

    this.square.nativeElement.style.transform = `translate(${x}px, ${y}px)`
  }

  private onMoveEnd = (detail:GestureDetail) => {
    this.square.nativeElement.style.transition = '500ms ease-out';
    this.square.nativeElement.style.transform =  `translate(0px,0px)`;
  }
}

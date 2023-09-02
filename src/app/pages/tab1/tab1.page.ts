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

  // Configurando el gesto después de que la vista ha sido inicializada
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

  // Desactiva las transiciones cuando el gesto comienza
  private onStartHandler = (detail:GestureDetail)=>{
    this.square.nativeElement.style.transition = 'none';
  }

  /**
   * Ajusta la transformación del elemento basado en el movimiento del gesto:
   * Esta función es invocada cada vez que el usuario mueve su punto de contacto (por ejemplo, su dedo en una pantalla táctil).
   *  Su propósito principal es ajustar la posición del elemento basándose en el movimiento realizado por el usuario.
   */
  
  private onMoveHandler = (detail:GestureDetail) => {
    // console.log(detail);
    // Calculamos la diferencia en el eje X entre la posición actual del punto de contacto y la posición inicial cuando el gesto comenzó.
    const x = detail.currentX - detail.startX;
     // Hacemos lo mismo para el eje Y.
    const y = detail.currentY - detail.startY;

    // Usamos estas diferencias para mover nuestro elemento. 
    // Si el usuario ha movido su dedo 10px a la derecha y 5px hacia abajo, el elemento se moverá 10px a la derecha y 5px hacia abajo.
    this.square.nativeElement.style.transform = `translate(${x}px, ${y}px)`
  }

   // Restablece la posición del elemento a su posición original una vez que el gesto ha terminado
  private onMoveEnd = (detail:GestureDetail) => {
    this.square.nativeElement.style.transition = '500ms ease-out';
    this.square.nativeElement.style.transform =  `translate(0px,0px)`;
  }
}

import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AnimationController, IonButton } from '@ionic/angular';
import type { Animation } from '@ionic/angular';

/**
 * Animación fadeInOut:
 * Esta animación se utiliza para proporcionar una transición suave entre el contenido de carga y el contenido real en el HTML.
 * 
 * - Cuando el contenido cambia de un estado de carga (es decir, el "esqueleto" que simula el contenido) a mostrar el contenido real, 
 *   esta animación garantiza que el "esqueleto" desaparezca gradualmente y el contenido real aparezca gradualmente.
 * 
 * - De manera similar, si el contenido cambia del contenido real al estado de carga (aunque en el código actual no sucede), 
 *   esta animación se encargará de que el contenido real desaparezca gradualmente y el "esqueleto" aparezca gradualmente.
 * 
 * El propósito principal de esta animación es mejorar la experiencia del usuario (UX), haciendo que las transiciones entre 
 * diferentes estados del contenido sean más naturales y menos bruscas.
 */


@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
  // Definición de animaciones Angular
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
  // Referencia al botón en el template para poder acceder a él
  @ViewChild('btnIonAcademy', { read: ElementRef }) cartBnt!: ElementRef;
   // Referencia a la animación para poder controlarla
  private animation: Animation | undefined;

  constructor(private animationCtrl: AnimationController) {}

  ngOnInit() {
    // Simulación de carga: después de 2 segundos, se cambia el valor de 'loading'
    setTimeout(()=>{
      this.loading = false;
    },2000);
  }

  ngAfterViewInit() {
    // Crear animación después de que la vista ha sido inicializada
    const btnIon = this.createButtonAnimation();
    // Crea una animación principal y agrega la animación del botón
    this.animation = this.animationCtrl.create().addAnimation([btnIon]);
    // Inicia la reproducción de la animación
    this.animation.play();
  }

    // Función auxiliar para crear la animación del botón
  private createButtonAnimation() {
    return this.animationCtrl
      .create()  // Crea una nueva animación
      .addElement(this.cartBnt!.nativeElement) // Agrega el elemento del botón a la animación
      .duration(2000) // Duración de la animación
      .iterations(Infinity) // La animación se repetirá indefinidamente
      .delay(1000) // La animación comenzará después de 1 segundo
      .keyframes([ // Define los fotogramas clave de la animación
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 0.5, transform: 'scale(1.5)', opacity: '0.5' },
        { offset: 1, transform: 'scale(1)', opacity: '1' },
      ]);
  }

}

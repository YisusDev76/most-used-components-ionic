import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor() {}

  ngOnInit(){
    console.log("Home sweet home");
    
  }

  doLogin(){
    console.log("Hacer login");
  }

  sendPageRegister() {
    console.log("Enviar a pagina de crear cuenta");
    
  }
}

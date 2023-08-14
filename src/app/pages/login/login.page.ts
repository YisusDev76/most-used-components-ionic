import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class LoginPage implements OnInit {

  constructor(private router: Router,
    ) { }

  ngOnInit() {
  }


  doLogin(){
    console.log("Hacer login");
    this.router.navigateByUrl('/menu/first', { replaceUrl: true });
  }


  sendPageRegister() {
    console.log("Enviar a pagina de crear cuenta");
    
  }

}

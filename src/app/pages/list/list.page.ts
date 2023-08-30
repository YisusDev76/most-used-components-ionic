import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UsersService } from 'src/app/services/users.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ListPage implements OnInit {
  // Un array con 10 elementos 'undefined'.
  skeletonArray = new Array(10);
  users: any[] = [];
  selectedUser :any = null;
  loading = true;
  presentingElement: Element | null = null;
  activeSegment:any = 'details';
  constructor(
    private userService: UsersService,
    private alertController: AlertController,
    private toastController: ToastController,
    ) {}

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
    this.userService.getUsers().subscribe((data) => {
      this.users = data.results;
      this.loading = false;
      // console.log(this.users);
    });
  }

  setUsers(users:[]){
    this.users = users;
  }

  setSelectedUser(user :any){
    this.selectedUser = user;
    console.log("Disparamos el evento del card");
    
  }

  setOpen(isOpen: boolean) {
    this.selectedUser=null;
  }

  setActiveSegment(event: any) {
    this.activeSegment = event.detail.value;
  }
  


  async clearList() {
    const alert = await this.alertController.create({
      header: 'Confirmación!',
      message: '¿Deseas continuar con esta acción?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Borrar',
          handler: () => {
            this.setUsers([]);
            this.showToast("Todos los usuarios fuero borrados");
          }
        }
      ]
    });

    await alert.present();
  }

  doRefresh(event: any) {
    this.userService.getUsers().subscribe((data) => {
      this.setUsers(data.results);
      this.loading = false;
    });
    event.detail.complete();
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: "danger"
    });
    toast.present();
  }

  onWillDismiss(event:Event){
    this.setSelectedUser(null);
    console.log("SE debe cerrar el modal");
  }

  
}

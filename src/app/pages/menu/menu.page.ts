import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationEnd, Router, RouterEvent, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class MenuPage implements OnInit {


  pages = [
    {
      title:'First page with Tabs',
      url:'/menu/first'
    },
    {
      title:'Second page blank',
      url:'/menu/second'
    },
    {
      title:'Home',
      url:'/menu/home'
    },
  ];

  selectedPath = '';

  constructor(private router: Router) { 

    this.router.events
    .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
    .subscribe((ev: NavigationEnd) => {
      this.selectedPath = ev.urlAfterRedirects; // cambia ev.url a ev.urlAfterRedirects
      if (this.selectedPath.startsWith('/menu/')) {
        this.selectedPath = ev.url;
      }
      // console.log('selected_path:', this.selected_path);
    });

    // this.router.events.subscribe((event: any) => { // Aquí estamos utilizando 'any' en lugar de 'RouterEvent'
    //   if (event instanceof NavigationEnd) {
    //     this.selectedPath = event.url;
    //   }
    // });
  }
  
  


  ngOnInit() {
  }

}

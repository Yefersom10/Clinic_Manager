import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-recepcionista',
  templateUrl: './recepcionista.page.html',
  styleUrls: ['./recepcionista.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RecepcionistaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Fonctionnalites, Fonctionnalite } from '../core/services/fonctionnalites';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  fonctionnalites: Fonctionnalite[] = [];

  constructor(private fonctionnalitesService: Fonctionnalites) {
    this.fonctionnalites = this.fonctionnalitesService.getFonctionnalites();
  }
}

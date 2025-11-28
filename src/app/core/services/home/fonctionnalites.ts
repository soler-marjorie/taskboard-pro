import { Injectable } from '@angular/core';

export interface Fonctionnalite {
  icon: string;
  titre: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class Fonctionnalites {
  private fonctionnalitesList: Fonctionnalite[] = [
    {
      icon: '📱',
      titre: 'Interface Mobile',
      description: 'Une expérience fluide et intuitive adaptée à votre téléphone pour gérer vos livres en déplacement.',
    },
    {
      icon: '📚',
      titre: 'Catalogage Simple',
      description: 'Ajoutez vos livres facilement avec scannage de code-barres, recherche par titre ou auteur.',
    },
    {
      icon: '📊',
      titre: 'Suivi de Lecture',
      description: 'Suivez votre progression de lecture, ajoutez des notes et des évaluations pour chaque livre.',
    },
  ];

  getFonctionnalites(): Fonctionnalite[] {
    return this.fonctionnalitesList;
  }
}

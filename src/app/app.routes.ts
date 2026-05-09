import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'PulisciCasa Pro — Pulizie domestiche, uffici e sanificazioni Milano'
  },
  {
    path: 'servizi',
    loadComponent: () => import('./pages/servizi/servizi.component').then((m) => m.ServiziComponent),
    title: 'Servizi — PulisciCasa Pro'
  },
  {
    path: 'chi-siamo',
    loadComponent: () => import('./pages/chi-siamo/chi-siamo.component').then((m) => m.ChiSiamoComponent),
    title: 'Chi siamo — PulisciCasa Pro'
  },
  {
    path: 'preventivo',
    loadComponent: () => import('./pages/preventivo/preventivo.component').then((m) => m.PreventivoComponent),
    title: 'Richiedi preventivo — PulisciCasa Pro'
  },
  {
    path: 'contatti',
    loadComponent: () => import('./pages/contatti/contatti.component').then((m) => m.ContattiComponent),
    title: 'Contatti — PulisciCasa Pro'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

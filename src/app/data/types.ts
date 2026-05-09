// Tipi TypeScript per i dati mock di PulisciCasa Pro

export interface Indirizzo {
  via: string;
  citta: string;
  provincia: string;
  cap: string;
  regione: string;
  paese: string;
  lat: number;
  lng: number;
}

export interface Contatti {
  telefono: string;
  whatsapp: string;
  email: string;
  social: {
    instagram?: string;
    facebook?: string;
  };
}

export interface OrariOperativi {
  lunedi: string;
  martedi: string;
  mercoledi: string;
  giovedi: string;
  venerdi: string;
  sabato: string;
  domenica: string;
}

export interface CertificazioniInfo {
  durc: boolean;
  iso14001: boolean;
  noteProdotti: string;
}

export interface MetaSeo {
  title: string;
  description: string;
  keywords: string[];
}

export interface InfoAttivita {
  ragioneSociale: string;
  nomeCommerciale: string;
  tagline: string;
  indirizzo: Indirizzo;
  contatti: Contatti;
  orari: OrariOperativi;
  certificazioni: CertificazioniInfo;
  metaSeo: MetaSeo;
}

export interface Servizio {
  id: string;
  categoria: string;
  nome: string;
  descrizione: string;
  prezzoInfo: string;
  unita: string;
  icona: string;
  evidenza: boolean;
}

export interface CategoriaServizio {
  id: string;
  nome: string;
  ordine: number;
}

export interface ServiziData {
  categorie: CategoriaServizio[];
  servizi: Servizio[];
}

export interface Membro {
  id: number;
  nome: string;
  ruolo: string;
  bio: string;
  anniEsperienza: number;
  specialita: string[];
  caposquadra: boolean;
}

export interface Team {
  team: Membro[];
}

export interface FaqItem {
  domanda: string;
  risposta: string;
}

export interface Faq {
  faq: FaqItem[];
}

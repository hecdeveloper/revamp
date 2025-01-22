export interface Service {
  icon: string;
  title: string;
  description: string;
  question: string;
}

export interface Location {
  city: string;
  state: string;
  country: string;
  type: 'sales' | 'development';
}

export interface Technology {
  name: string;
  category: 'backend' | 'frontend' | 'mobile' | 'platforms';
}

export interface ClientExample {
  image: string;
  title: string;
  description: string;
}

export interface TechnologyCategory {
  title: string;
  items: string[];
}
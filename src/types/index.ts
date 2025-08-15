export interface BottleModel {
  id: string;
  name: string;
  image: string;
  capacity: string;
  specs: string;
  startingPrice: string;
  description: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  href: string;
}

export interface QuoteRequest {
  bottleType: string;
  quantity: number;
  company: string;
  email: string;
  message?: string;
}

export interface ValueProposition {
  icon: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}
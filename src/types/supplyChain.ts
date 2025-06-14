
export interface SupplyChainEvent {
  type: 'bar' | 'dot';
  start?: string;
  end?: string;
  time?: string;
  status?: string;
  temperature?: number;
  consignment?: string;
  description?: string;
}

export interface Dependency {
  targetCompany: string;
  time: string;
  type?: string;
}

export interface Company {
  id: string;
  name: string;
  color: string;
  events: SupplyChainEvent[];
  dependencies?: Dependency[];
}

export interface Category {
  name: string;
  companies: Company[];
}

export interface SupplyChainData {
  categories: Record<string, Category>;
}

// lib/genchef/types.ts
export interface GenChefCategory {
  id: string;
  name: string;
  description?: string;
}

export interface GenChefItem {
  id: string;
  categoryId: string;
  name: string;
  description?: string;
  price: number;
  available?: boolean;
}

export interface GenChefMenu {
  categories: GenChefCategory[];
  items: GenChefItem[];
}

// lib/genchef/mockData.ts
import { GenChefMenu } from "./types";

export const mockMenu: GenChefMenu = {
  categories: [
    { id: "1", name: "Hoofdgerechten" },
    { id: "2", name: "Desserts" },
  ],
  items: [
    { id: "a1", categoryId: "1", name: "Filet pur", price: 35 },
    { id: "a2", categoryId: "2", name: "Dame Blanche", price: 10 },
  ],
};

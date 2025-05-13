interface CatagorysCandy {
  id: string;
  img: string;
  name: string;
}
interface Products {
  name: string;
  img: string;
  price: number;
  categoryId: string;
}
export type { CatagorysCandy, Products };

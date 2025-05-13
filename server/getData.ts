import { collection, getDocs } from "firebase/firestore";
import { db } from "~/plugins/firebase/configurateFirebase";
import type { CatagorysCandy, Products } from "~/types/candy";

export const getCategorys = async (): Promise<CatagorysCandy[]> => {
  const categoryRef = await getDocs(collection(db, "Categorys"));

  return categoryRef.docs.map((doc) => doc.data() as CatagorysCandy);
};
export const getProducts = async (): Promise<Products[]> => {
  const productRef = await getDocs(collection(db, "Products"));

  return productRef.docs.map((doc) => doc.data() as Products);
};

import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../config/firebase";

export async function getItems() {
  const itemsCollectionRef = collection(db, "items");
  const q = query(itemsCollectionRef, orderBy("isNew", "desc"));
  const data = await getDocs(q);

  const filteredData = data.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return filteredData;
}

export async function getUserRole(id) {
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);
  console.log(docSnap);
  return docSnap.data().role;
}
export async function getPurchases() {
  const purchasesCollectionRef = collection(db, "purchases");
  const q = query(purchasesCollectionRef, orderBy("timestamp", "desc"));
  const data = await getDocs(q);

  const filteredData = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return filteredData;
}

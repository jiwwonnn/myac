import {collection, getDocs, limit, orderBy, query, where} from "@firebase/firestore";
import {db} from "@/pages/Firebase";
import {Account} from "@/types/account";

export const FetchPosts = async (priceType: "income" | "expenditure", limitCount?: number) => {
  try {
    const postsRef = collection(db, "posts")
    const postsQuery = limitCount
      ? query(postsRef, where("priceType", "==", priceType), orderBy("date", "desc"), limit(limitCount))
      : query(postsRef, where("priceType", "==", priceType), orderBy("date", "desc"));

    const snapshot = await getDocs(postsQuery)

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))  as Account[];
  } catch(e) {
    console.log(e)
    return []
  }
}
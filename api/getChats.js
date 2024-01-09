import { db } from "@/firebaseconfig";
import { getDocs, collection, query } from "firebase/firestore"
export async function getChats(filters = {}) {
    let q = query(collection(db, "chats"));
    const results = await getDocs(q);
    console.log('results', results)
    return results.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data(),
            // // Only plain objects can be passed to Client Components from Server Components
            // timestamp: doc.data().timestamp.toDate(),
        };
    });
}
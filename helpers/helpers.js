import { db } from "@/firebaseconfig";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

export function test() {
  return null;
}

export function getOS() {
  const { userAgent } = typeof window !== "undefined" && window.navigator;
  const { platform } = typeof window !== "undefined" && window.navigator;
  const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
  const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
  const iosPlatforms = ["iPhone", "iPad", "iPod"];
  let os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = "MacOS";
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = "iOS";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = "Windows";
  } else if (/Android/.test(userAgent)) {
    os = "Android";
  } else if (!os && /Linux/.test(platform)) {
    os = "Linux";
  }

  typeof document !== "undefined" &&
    document.documentElement.setAttribute("os", os);
  return os;
}

export const hasNotch = () => {
  const storybook =
    typeof window !== "undefined"
      ? window.location !== window.parent.location
      : "";
  const iPhone =
    typeof window !== "undefined"
      ? /iPhone/.test(navigator.userAgent) && !window?.MSStream
      : "";
  const aspect =
    typeof window !== "undefined"
      ? window.screen.width / window.screen.height
      : 0;
  const aspectFrame =
    typeof window !== "undefined" ? window.innerWidth / window.innerHeight : 0;
  return (
    (iPhone && aspect.toFixed(3) === "0.462") ||
    (storybook && aspectFrame.toFixed(3) === "0.462")
  );
};

//used for list of chats
export const getOtherEmail = (users, currentUser) => {
  return users?.filter((user) => user !== currentUser)[0];
};
export const chatExists = async (currentUser, otherUser) => {
  console.log("getting chats");
  const querySnapshot = await getDocs(collection(db, "chats"));
  let chatId = null;
  console.log("querySnapshot", querySnapshot);
  querySnapshot.forEach((doc) => {
    const users = doc.data().users;
    if (users.includes(currentUser) && users.includes(otherUser)) {
      chatId = doc.id;
    }
  });
  return chatId;

  // const querySnapshot = await getDocs(collection(db, 'chats'));
  // let chatId = null;
  // querySnapshot.forEach((doc) => {
  //   const users = doc.data().users;
  //   if (users.includes(currentUser) && users.includes(otherUser)) {
  //     chatId = doc.id;
  //   }
  // });
  // return chatId;
};

export const createNewChat = async (currentUser, otherUser) => {
  console.log("creating chat", currentUser, otherUser);
  //protection for creating a chat with yourself
  if (currentUser === otherUser) return null;
  const chatId = await chatExists(currentUser, otherUser);
  console.log("chatId", chatId);
  if (chatId) {
    await updateDoc(doc(db, "chats", chatId), {
      users: [currentUser, otherUser],
    });
    return chatId;
  } else {
    const docRef = await addDoc(collection(db, "chats"), {
      users: [currentUser, otherUser],
    });
    console.log("docRef", docRef.id);
    return docRef.id;
  }
};

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
# Chat App

## Overview
This is a chat application built for a take home assignment. The purpose of it is to provide services that an eventual ML model can take advantage of. 

![ScreenRecording2024-01-10at12 33 23AM-ezgif com-video-to-gif-converter](https://github.com/Alira-Coffman/lore-chatapp/assets/40637263/1e190705-5e73-49e1-b948-882cedb843c8)



## Key Requirements

Concurrent development of associated software services. (Fronten, backend, etc)
Capability to surface multiple proposed responses for manual review.
Consideration for future addition of more models and scalability.

## Assumptions

1. Assumption 1: The question is asking me to build the software services, not the model itself.
2. Assumption 2: the machine learning model will be able to interface with NextAPI routes. Basically, the prompt from the user will be sent through the api route to wherever the model is, and a response of three options will be returned. This is shown in '/api/example' in the get request. In this example, I am pulling a random three options from a temporary json quote file. 
3. Assumption 3: Firebase will be a cost-effective option that will allow the model and the surrounding systems to live in the same cloud service. (gcp is a good option for models)
4. Assumption 4: A user will only need one chat, but might need more later. An admin will ALWAYS have more than one chat.
... 

## Scalability, Security, and Thoughts
1. The chat system was built in a way where it does not care who is chatting with who, or how many chats a user/admin has. It is currently set up that a user can only chat with an admin. But, this is easily changed with the helper function. Instead of passing 'admin@gmail.com', we can pass a specific model to chat with.
2. An admin currently cannot START a chat, but if that functionality was ever desired, it is possible for them to do so using the helper function.
3. Firebase is a pay-as-you-go option, allowing us to start small and grow as need be. (it also has a free tier which made it a good option for this take home assignment)
4. Firebase Authentication system - it can scale with user growth and wont require a large overhall
5. Firestore allows for realtime synchronization, which makes it ideal for chat applications like this. As soon as the new messages are added, they are instantly pushed.
6. Firestore is a NoSQL database and can scale with ease. As demand increase, we aren't worried.
7. Serverless architecture will reduce overall maintenence. We dont need to worry about infistructure.
8. Firebase functions can be added to create serverless endpoints. These can be then integrated with the model through the nextjs routes. (this portion was not showcased here)
9. Firestore purpose is for document storage, which our chats can fit that nicely.
10. Firestore allows for security rules so we can limit who can read or write specific data.


## How to USE

1. clone this repo
2. yarn install
3. create a .env.local file with the following

```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=1:
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=

```

4. create a collection in firestore named chats.
5. run the next server using yarn run dev
6. login to an admin account using the provided username & password and go to /admin
7. in a seperate browser instance (incognito, or different chrome profile) log into another account and go to /members
8. chat away.

# Architecture 
[User] <---> [Next.js Frontend] <---> [Firebase Auth]
                                 |
                                 v
                             [Firestore]
                                 |
                                 v
                           [Next.js API Routes] <---> Cloud Storage/Cloud FUnctions  <---> [Machine Learning Model]

## Authentication 
The user can log in through google, or email and password. (currently email and password is intended for admins only. But restrictions would need to be added --refer to todolist) 
Auth is set up through firebase.

## Firestore collection
<img width="1115" alt="Screenshot 2024-01-10 at 12 03 06 AM" src="https://github.com/Alira-Coffman/lore-chatapp/assets/40637263/43a44b9c-60a6-4134-b045-bfe68d224668">
<img width="1219" alt="Screenshot 2024-01-10 at 12 03 44 AM" src="https://github.com/Alira-Coffman/lore-chatapp/assets/40637263/030b959b-92f3-4dde-898b-49b8a0fb7d00">

Note: A lot of the firestore is called on client side through react-firebase-hooks. In the future, I would prefer to see a hybrid approach.

### Benfits of using it on the client side
* real time updates - new messages in chat would be a great contender for using client side
*  client side rendering - this can be a benefit

### Benefits of using trhough API routes
* server side render - this can assist in SEO and initial load performance.
* Security - since these are private chats, it would be considered more secure to host a lot of it on serverside.

### Hybrid
* Since realtime updates are something that is beneficial for this project, a hybrid appproach might be worth it.

## Interaction with the ML
By taking advantace of Firebase Functions, one can create serverless functions that act as the intermediaries between the application(nextjs) and the model. 
I would need two main functions : Getting options, and sending the selected option so the model can learn. 
Alternative from my research would be using Cloud Storage, which would have less work then Cloud Functions. 
(Documents outlining the steps that google's suggested: https://codelabs.developers.google.com/codelabs/tensorflowjs-firebase-hosting-model#0) 

### Structure of Chats

```json

    {
    "id": "autopopulated",
    "users" : ["'array of emails'"],
    "messages" : ["VIEW MESSAGES STRUCTURE"]
    }
```

### Structure of Messages, this is an array

Note that: for the option that the admin chooses, it will log which admin chose it. They will be marked as the sender.

```json
{
  "id": "id here",
  "users": ["useremail@email.com", "admin-lore@gmail.com"],
  "messages": [
    {
      "text": "message",
      "timestamp": "time it was sent",
      "sender": "email of sender",
      "seenByReciever": true
    },
    {
      "text": "message",
      "timestamp": "time it was sent",
      "sender": "email of sender",
      "seenByReciever": true
    },
    {
      "text": "message",
      "timestamp": "time it was sent",
      "sender": "email of sender",
      "seenByReciever": true
    }
  ]
}
```

### Structure of Machine Learning Model Options

```json
{
  "options": [
    { "text": "message" },
    { "text": "message" },
    { "text": "message" }
  ]
}
```

## TODO/Outstanding fixes

- [ ] adjust api calls to handle talking with the model.
- [ ] mobile responsiveness on members portion
- [ ] create an authProvider that sits in rootlayout so user doesn't need to be called on every page
- [ ] move firebase calls into the api routes (if possible, more research needed)
- [ ] seenby functionality
- [ ] "who is talking" notation on the chat bubbles
- [ ] admin property on user object
- [ ] clean up the files
- [ ] move some of the firestore calls into routes


## Getting Started - NEXT INFO

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

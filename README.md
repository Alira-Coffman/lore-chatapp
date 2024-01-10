This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

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

### Structure of Chats

````json
[
    {
    "id": "autopopulated",
    "users" : ["'array of emails'"],
    "messages" : ["VIEW MESSAGES STRUCTURE"]
    }
]```

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
````

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

[] - adjust api calls to handle talking with the model.
[] - mobile responsiveness on members portion
[] - create an authProvider that sits in rootlayout so user doesn't need to be called on every page
[] - move firebase calls into the api routes (if possible, more research needed)
[] - seenby functionality
[] - "who is talking" notation on the chat bubbles
[] - admin property on user object
[] - clean up the files

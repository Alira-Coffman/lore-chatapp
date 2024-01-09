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

### Structure of Chats, this is an array
Note that: for the option that the admin chooses, it will log which admin chose it. They will be marked as the sender. 
```json
{
    "users": ["useremail@email.com", "admin-lore@gmail.com"],
   " messages": [
        {"text": "message",
        "timestamp": "time it was sent",
        "sender": "email of sender" 
        },
        {"text": "message",
        "timestamp": "time it was sent",
        "sender": "email of sender" 
        },
        {"text": "message",
        "timestamp": "time it was sent",
        "sender": "email of sender" 
        },
    ]
}

```

### Structure of Machine Learning Model Options

```json

{
    "options": [{"text": "message"},{"text": "message"},{"text": "message"}],
}

```

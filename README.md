## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Flow

Package.json
    ->pages (main routes)
        index.js represents to localhost:3000/
        user.js represents to localhost:3000/user
    -> public directory contains all static content like images and icons
    -> pages/api
       this is next.js api routes for data or db calls
    -> src
        -> components 
            it contains basic react components and layouts
        -> utils 
            it contains helper methods

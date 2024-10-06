# Demyst exercise - Show me the money

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Included in the app

- The App contains one api route `/api/balance-sheet` which just fetches from the XERO Api and passes the data to the frontend.
- The Frontend has 3 pages
  - Homepage
  - BalanceSheet with client side rendering
  - BalanceSheet with server side rendering
- There are unit tests included for api route in `src/app/api/balance-sheet` and the BalanceSheet react component in `src/components/BalanceSheet`.

## How to run

### Using git pull

- Clone the repo from this url `https://github.com/abnewstein/demyst-exercise.git`.
- Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

- Open [http://localhost:5000](http://localhost:5000) with your browser to see the result.
- Make sure the xero service is running in `localhost:3000` or modify the .env.local to reflect the correct port address.

### Using Docker image

- Clone the repo and run docker-compose

```bash
git clone https://github.com/abnewstein/demyst-exercise.git`.
cd demyst-exercise
docker-compose up
```

- Wait for the both services to be up and then open [http://localhost:5000](http://localhost:5000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

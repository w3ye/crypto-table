# Features
- Coin Table is an application the fetches the top 10 crypto currency results using the Coin Market Cap API.
- The data polls every minute to ensure the latest data.

# Screenshots
https://github.com/w3ye/crypto-table/assets/33244107/d4271fdb-c83a-45c0-a7d9-a86bd14be2ae

# Installation
- Run `cp .env.example .env` in your terminal
- Paste in your Coin Market Cap API key `VITE_COIN_MARKET_CAP_API_KEY`

## Docker - Recommended
- Run `docker compose up --build` to start the app

## Local
- Run `npm install` to install all the dependencies
- Run `npm run dev` to start the application

# Technologies used
- Vite
- Node v16.16.16
- React/TypeScript
- mantine
- axios
- await-of

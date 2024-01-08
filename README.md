# IMDB Clone

## Project Structure
The project is divided into two main parts: the client side and the server side. 

## Table of Contents
1. Client Side
2. Server Side

## Client Side

### Installation and Usage
1. Install the dependencies using `npm install`.
2. Start the development server using `npm run dev`.

### Environment Variables
The client side uses the following environment variables:
- `VITE_APP_URL`: Server Host Url
- `VITE_APP_TMDB_API_KEY`: The Movie Database (TMDb) API Key
- `VITE_APP_TMDB_API_URL`: The Movie Database (TMDb) API URL
- `VITE_APP_OMDB_API_KEY`: Open Movie Database (OMDb) API Key
- `VITE_APP_OMDB_API_URL`: Open Movie Database (OMDb) API URL

### Dependencies
The client side uses the following dependencies:
- "@reduxjs/toolkit": "^2.0.1"
- "flowbite-react": "^0.7.2"
- "react": "^18.2.0"
- "react-dom": "^18.2.0"
- "react-icons": "^4.12.0"
- "react-redux": "^9.0.4"
- "react-router-dom": "^6.21.1"
- "sweetalert2": "^11.10.2"

### Dev Dependencies
The client side uses the following dev dependencies:
- "@types/react": "^18.2.43"
- "@types/react-dom": "^18.2.17"
- "@vitejs/plugin-react": "^4.2.1"
- "autoprefixer": "^10.4.16"
- "eslint": "^8.55.0"
- "eslint-plugin-react": "^7.33.2"
- "eslint-plugin-react-hooks": "^4.6.0"
- "eslint-plugin-react-refresh": "^0.4.5"
- "postcss": "^8.4.33"
- "tailwindcss": "^3.4.0"
- "vite": "^5.0.8"

## Server Side

### Installation and Usage
1. Navigate to the server directory. `cd server`
2. Install the dependencies using `npm install`.
3. Start the server in development using`npm run dev`.
3. Start the server using `npm start`.

### Environment Variables
The server side uses the following environment variables:
- `PORT`: The port the server will run on.
- `Database_url`: The URL for the MongoDB database.

### Dependencies
The server side uses the following dependencies:
- "cors": "^2.8.5"
- "dotenv": "^16.3.1"
- "express": "^4.18.2"
- "mongoose": "^8.0.3"
- "nodemon": "^3.0.2"



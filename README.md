# Sigma Software - Test

# NodeReact Full-Stack Project

This project combines a TypeScript Express server (backend) with a React application (frontend) to create a full-stack solution for managing user profiles. The server handles CRUD operations, while the frontend provides a user interface for viewing and updating user data.

## Overview

- The **Server** (TypeScript Express): Manages data storage and retrieval using a simple JSON file as a database.
- The **Client** (TypeScript React): Allows users to interact with their profile data through a web interface.

## Getting Started

### Cloning the Repository

1. Clone the full project repository:
   ```
   git clone https://github.com/JarbesGoldoni/NodeReactProject.git
   ```
2. You will find two main directories inside:
   - `server`: Contains the Express server application.
   - `client`: Contains the React frontend application.

### Setting up the Server

1. Navigate to the server directory:
   ```bash
   cd NodeReactProject/server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
   - The server runs at `http://localhost:4000/`.

### Setting up the Client

1. Open a new terminal and navigate to the client directory:
   ```bash
   cd NodeReactProject/client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React application:
   ```bash
   npm start
   ```
   - The application runs at [http://localhost:3000](http://localhost:3000).

## Using the Full-Stack Application

- Start both the server and the client.
- Access the client application via a web browser at `http://localhost:3000`.
- Interact with the user interface to view and update user profile information.
- The server will handle requests and interact with the JSON file to store/retrieve data.

## API Endpoints

The server provides the following endpoints:

- `GET /api`: Retrieves user data.
- `POST /api/update`: Updates user data.

The client interacts with these endpoints to manage user data.

## Built With

- [Express](https://expressjs.com/) and [TypeScript](https://www.typescriptlang.org/) for the backend.
- [React](https://reactjs.org/) for the frontend.
- [Node.js](https://nodejs.org/) as the runtime environment.

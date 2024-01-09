# TypeScript Express Server

This is a simple TypeScript Express server designed to handle basic CRUD operations. It uses a text file (`data.txt`) as a database to store and retrieve user data.

## Features

- Express server with CORS enabled
- Reading and writing JSON data to and from a text file
- Basic error handling
- RESTful API with GET and POST methods

### Running the tests

To run the automated tests for this system:

```bash
npm test
```

## API Endpoints

- `GET /api` - Retrieve user data from the file.
- `POST /api/update` - Update user data in the file.

## Built With

- [Express](https://expressjs.com/) - The web framework used
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
````

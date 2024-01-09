# React User Profile Project

This project is a React application that allows users to view and update their profile information. It includes a front-end React app and requires a back-end API to fetch and update user data.

## Using the Application

- The application displays input fields for the user's first name and email.
- If the user has the required permissions, they will be able to view and edit these fields.
- Changes can be saved by clicking the "Save Changes" button.

## Structure

- `index.tsx`: The entry point of the React application.
- `App.tsx`: The main component that handles state and rendering of the user profile.
- `InputField.tsx`: A reusable input field component.
- `apiService.ts`: Contains functions for API calls to fetch and update user data.

### Running the tests

To run the automated tests for this system:

```bash
npm test
```

## API Endpoints

The application expects the following API endpoints:

- `GET http://localhost:4000/api`: Fetches the user's current data.
- `POST http://localhost:4000/api/update`: Updates the user's data.

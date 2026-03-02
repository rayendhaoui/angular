# Testrayen

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.21.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Backend server (Node/Express)

The `backend` folder contains a simple Express API that communicates with a MySQL database. It exposes CRUD endpoints under `/residences` and is already wired to create the database/table if they do not exist.

### Configuration

1. Install dependencies in the backend directory:
   ```bash
   cd backend
   npm install
   ```
2. Copy `.env.example` (if present) or set environment variables for `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME` and optionally `PORT`.
   - With XAMPP the default MySQL host is `127.0.0.1` and user is usually `root` with an empty password.
3. Start XAMPP and ensure the MySQL service is running.

### Running the server

```bash
node backend/app.js
```

The server will listen on port 3000 by default and you should see a message like:

```
Serveur démarré sur le port 3000 en mode development
API accessible à http://localhost:3000/residences
```

The frontend application (on `localhost:4200`) will call this API.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" />
  </a>
</p>

# Development Setup

1. Clone the repository.
2. Copy the `env.example` file and rename it to `.env`.
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the Docker container (Docker Desktop):
   ```bash
   docker-compose up -d
   ```
5. Start the Nest backend:
   ```bash
   npm run start:dev
   ```
6. Visit the site:
   ```bash
   http://localhost:3000/graphql
   ```

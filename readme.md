# NeuroxAI Experiment 🧪

A fully dockerized PERN-style experiment (Postgres, Express, React, Node).  
TypeScript-first monorepo structure for stronger type safety and easy local development via Docker Compose.

---

## Quick Overview

- Frontend: React + Vite + TypeScript (hot-reload) — port 5173  
- Backend: Express + Node + TypeScript — port 5000  
- Database: PostgreSQL 15 — port 5432  
- Orchestration: Docker Compose (services defined in docker-compose.yml)

---

## Prerequisites

- Docker Desktop (Windows)
- Git

No need to install Node, PostgreSQL, or TypeScript locally — everything runs inside containers.

---

## .env (example)

Create a root `.env` file (or copy `.env.example`) with these values:

```env
PORT=5000
DB_HOST=db
DB_USER=neuro_user
DB_PASSWORD=neuro_password
DB_NAME=neuroxai_db
DB_PORT=5432
```

Docker Compose reads the top-level `.env` for variable substitution and each service also loads it via `env_file`.

---

## Quick Start (Windows)

Open PowerShell or cmd.exe:

1. Clone and enter repo
```bash
git clone https://github.com/rahulshuvo/neuroxai-experiment.git
cd neuroxai-experiment
```

2. Ensure `.env` exists (see example above)

3. Build and run
```bash
docker-compose up --build
```

4. Stop
```bash
docker-compose down
```

---

## Accessing the App

- Frontend: http://localhost:5173  
- Backend API: http://localhost:5000  
- DB health/test endpoint (example): http://localhost:5000/db-test

Note: Inside Docker Compose the frontend should call the backend via the service name:
VITE_API_URL=http://backend:${PORT}

---

## Project Structure

neuroxai-experiment/
- backend/             — Express API (TypeScript)
- frontend/            — React + Vite UI (TypeScript)
- docker-compose.yml   — Compose orchestration
- .env                 — Environment configuration
- readme.md            — Project documentation

---

## Docker notes

- Backend and frontend are typically mounted as volumes for hot reload during development.
- Named volumes are used for node_modules to avoid host/Windows file permission and performance issues.
- Postgres data is persisted in a named volume (postgres_data).

Recommended runtime images: node:18-alpine or node:22-alpine (match Dockerfiles).

---

## Troubleshooting

- Port conflicts (5432/5000/5173): stop local services occupying those ports (e.g., local Postgres).
  - Windows: Stop PostgreSQL service in Services or Task Manager → Services.
- Backend cannot connect to DB: DB may still be initializing. Wait a few seconds and retry. Compose will retry if configured.
- Containers not reflecting code changes: verify volume bindings in docker-compose.yml and that dev-start scripts are used in Dockerfiles.

---

## Tips

- Keep a `package-lock.json` / `pnpm-lock.yaml` for reproducible installs inside Docker.
- Use a `.dockerignore` to reduce build context (exclude node_modules, .env, .git, logs).

---

Created for the NeuroxAI Experiment — minimal, modular, and fully dockerized for rapid ML + full-stack iteration.

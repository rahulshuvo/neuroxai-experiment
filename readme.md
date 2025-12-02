# NeuroxAI Experiment 🧪

A fully dockerized, full-stack experiment using the **PERN stack** (Postgres, Express, React, Node.js). This repository is configured as a monorepo with **TypeScript** enforced across the entire stack.

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

## 🏗 Architecture

The project is orchestrated via Docker Compose and consists of three services:

| Service | Technology | Port | Description |
| :--- | :--- | :--- | :--- |
| **Frontend** | React + Vite + TS | `5173` | Hot-reloading enabled UI |
| **Backend** | Express + Node v22 + TS | `5000` | REST API with `tsx` watch mode |
| **Database** | PostgreSQL 15 | `5432` | Persistent data storage |

## 🛠 Prerequisites

You do **not** need Node.js, PostgreSQL, or TypeScript installed on your machine. You only need:

* [Docker Desktop](https://www.docker.com/products/docker-desktop/)
* Git

## ⚡️ Quick Start

Follow these steps to get the entire stack running in minutes.

### 1. Clone the repository
```bash
git clone [https://github.com/YOUR_USERNAME/neuroxai-experiment.git](https://github.com/YOUR_USERNAME/neuroxai-experiment.git)
cd neuroxai-experiment
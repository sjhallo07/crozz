# Crozz Coin Project

> The financial foundation for a higher purpose. Part of the Great Plan.

Crozz Coin is a cryptocurrency project designed to foster global economic stability and fund initiatives for peace, prosperity, and the improvement of life quality worldwide.

## 📖 Documentation

Start with our [Whitepaper](./docs/01-mision-y-vision/whitepaper.md) and [Theological Framework](./docs/01-mision-y-vision/theological-framework.md) to understand the mission.

For developers, the [Project Roadmap](./ROADMAP.md) and [Architecture Decisions](./docs/03-diseno/architecture-decisions.md) are the best starting points.

## 🏗️ Architecture Overview

This project is structured as a multi-component system:
*   **Blockchain Node**: A custom blockchain built using [Cosmos SDK](https://cosmos.network/)/[Substrate](https://substrate.io/).
*   **Smart Contracts**: Core logic for token, treasury, and governance.
*   **Web Wallet**: User-friendly interface to interact with the Crozz network.
*   **API Services**: Backend services for explorers and data aggregation.

## 🚀 Getting Started

Prerequisites: Docker, Go 1.19+, Rust.



# Run a local testnet using Docker
docker-compose -f infrastructure/docker/testnet.yaml up

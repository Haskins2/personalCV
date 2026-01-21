# Personal CV Project

This is a Next.js project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It serves as a personal CV and portfolio website.

## Local Development

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  Clone the repository (if you haven't already).
2.  Install dependencies:

    ```bash
    npm install
    ```

### Running Locally

To start the development server with hot-reloading:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building and Testing Production Build Locally

To simulate exactly what will run on the server, you can build and start the production version locally:

1.  Build the project:

    ```bash
    npm run build
    ```

2.  Start the production server:

    ```bash
    npm run start
    ```

## Deployment

This project includes a deployment script (`deploy.sh`) configured to deploy to a Linode server.

### Server Configuration

The deployment script targets the server at `172.237.120.179` and assumes the application lives in `~/personalCV`. It uses [PM2](https://pm2.keymetrics.io/) to manage the application process on the server.

### How to Deploy

To deploy the latest changes to the server, run the `deploy.sh` script from the project root:

```bash
chmod +x deploy.sh  # Ensure the script is executable (only needed once)
./deploy.sh
```

The script performs the following steps:

1.  **Local Build**: Runs `npm run build` locally to ensure the project compiles successfully.
2.  **Package**: Creates a deployment package with the built application, static files, and configuration.
3.  **Upload**: Uploads the package to the server via `SCP`.
4.  **Remote Deploy**:
    - Connects to the server via SSH.
    - Stops the existing PM2 process.
    - Backs up the previous build.
    - Extracts the new build.
    - Installs production dependencies (`npm ci --only=production`).
    - Restarts the application using PM2.
    - Cleans up temporary files.

### Server Requirements

The server should have:

- Node.js installed.
- PM2 installed globally (`npm install -g pm2`).
- SSH access configured for the deploying user.

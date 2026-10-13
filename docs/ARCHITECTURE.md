# System Architecture

## Overview

The application uses a separate frontend and backend deployed on AWS EC2.
Ansible automates configuration and deployment over SSH.

## Components

### Ansible Control Node
- Stores the deployment playbook and inventory.
- Connects to managed EC2 instances over SSH.
- Runs configuration and deployment tasks.

### Frontend Server
- Runs Nginx.
- Serves the compiled React/Vite application.
- Can forward API requests to the backend when configured.

### Backend Server
- Runs the Flask API through Gunicorn.
- Can be managed as a systemd service.
- Should accept application traffic only from authorized sources.

## Request Flow

    User Browser
         |
         v
    Nginx / Frontend EC2
         |
         v
    Flask API / Backend EC2

## Deployment Flow

    Developer
         |
         v
    GitHub Repository
         |
         v
    Ansible Control Node
         |
         +---- SSH ----> Frontend EC2
         |
         +---- SSH ----> Backend EC2

## Security Boundaries

- SSH is used for administration and should be restricted.
- Backend traffic should remain on the private network where possible.
- Production web traffic should use HTTPS.
- Credentials and private keys must be stored outside source control.

This document describes the intended architecture. Actual ports, routing,
TLS configuration and deployment behavior depend on the current playbook
and AWS network configuration.

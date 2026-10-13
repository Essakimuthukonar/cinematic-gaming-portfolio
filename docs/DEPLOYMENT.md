# Deployment Guide — Cinematic Gaming Portfolio

## 1. Project Overview

This project deploys a React/Vite frontend and a Python Flask backend
on AWS EC2 using Ansible.

## 2. Architecture

Browser
  |
  v
Frontend EC2 — Nginx — React/Vite production build
  |
  v
Backend EC2 — Gunicorn — Flask API
  |
  v
Application data and API responses

Ansible runs from a control node and configures the target servers
over SSH.

## 3. Technology Stack

- AWS EC2 and VPC
- Ubuntu Linux
- Ansible
- React, TypeScript and Vite
- Nginx
- Python and Flask
- Gunicorn
- systemd

## 4. Prerequisites

- Ansible installed on the control node
- SSH access to the target EC2 instances
- A valid SSH private key stored securely
- Network rules allowing SSH from the control node
- Frontend and backend security groups configured appropriately
- Application source code available to the deployment playbook

## 5. Configure Ansible

Copy the example configuration files and customize them for your
environment.

On a Linux Ansible control node:

    cp ansible.cfg.example ansible.cfg
    cp inventory.ini.example inventory.ini

Update the inventory with the actual target server private IP
addresses or DNS names.

Configure the private key path for your control node. Never commit
private keys to GitHub.

## 6. Test Connectivity

From the directory containing your Ansible configuration and inventory:

    ansible all -m ping

A successful response normally contains "pong" for each reachable host.

## 7. Validate the Playbook

    ansible-playbook deploy.yml --syntax-check

Review the inventory, variables, target hosts and deployment tasks
before running the playbook.

## 8. Deploy the Application

    ansible-playbook deploy.yml

Use the inventory and configuration for the intended environment.
Review the output and resolve any failed tasks before proceeding.

## 9. Verify Services

Example checks, when these services and paths are configured:

    ansible frontend -b -m command -a "nginx -t"
    ansible backend -b -m command -a "systemctl is-active portfolio-backend"
    ansible backend -b -m command -a "curl -sS http://127.0.0.1:5001/api/health"

The service name, API health endpoint and port must match the actual
playbook and backend application.

## 10. Security Recommendations

- Never upload SSH private keys, passwords, tokens or .env files.
- Do not commit real server inventories to a public repository.
- Restrict SSH access to trusted source IP addresses.
- Keep the backend port private; do not expose it publicly unless required.
- Use HTTPS with a trusted certificate for production.
- Review Ansible tasks before deployment because they may change server
  configuration or overwrite existing web-server settings.
- Use Ansible Vault or a secrets manager for sensitive variables.

## 11. Troubleshooting

### SSH connection fails
Check the private key, SSH username, security groups, routing and
whether the target instance is running.

### Ansible cannot find a host
Check the inventory path and host group names.

### Nginx configuration fails
Run nginx -t on the frontend server and inspect the Nginx error logs.

### Backend service is inactive
Inspect the systemd service status and logs, Python dependencies,
application configuration and port bindings.

## 12. Deployment Workflow

1. Update the application source.
2. Build and test the frontend.
3. Review the Ansible inventory and variables.
4. Test SSH connectivity.
5. Validate the playbook syntax.
6. Run the deployment.
7. Verify Nginx, the backend service and the API.
8. Review logs and confirm the application is reachable.

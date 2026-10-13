
import os
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

# Local development only. Restrict this to your frontend origin
# when deploying the application.
CORS(app)

PROFILE = {
    "name": "Essakimuthu Konar",
    "title": "Junior DevOps Engineer | Cloud Engineer",
    "tagline": "Engineering the future. Automating what's next.",
    "location": "Mumbai, Maharashtra, India",
    "email": "muthukonar394@gmail.com",
    "phone": "+91 88381 55024",
    "summary": (
        "Junior DevOps Engineer with 3+ years of IT infrastructure "
        "and production support experience, transitioning into DevOps "
        "and cloud engineering. Hands-on experience with AWS, Linux, "
        "containers, infrastructure automation, CI/CD, monitoring, "
        "troubleshooting and technical documentation."
    ),
    "experience": [
        {
            "role": "Executive, Mobile Device Support",
            "company": "Wellness Forever Medicare Pvt. Ltd.",
            "location": "Mumbai",
            "period": "Feb 2025 – Present",
            "highlights": [
                "Administer enterprise Android MDM and policy compliance.",
                "Manage IT asset inventory, deployment and documentation.",
                "Troubleshoot device, connectivity and application incidents.",
                "Maintain SOPs and operational runbooks."
            ]
        },
        {
            "role": "IT Support Engineer",
            "company": "Get IT Solution",
            "period": "2022 – 2025",
            "highlights": [
                "Resolved hardware, software and network incidents.",
                "Supported Windows desktops, laptops and printers.",
                "Diagnosed network connectivity issues.",
                "Managed ticket-based incident tracking and resolution."
            ]
        }
    ],
    "skills": {
        "AWS & Cloud": [
            "EC2", "S3", "IAM", "VPC", "ECR", "ECS", "EKS",
            "AWS CLI", "CodePipeline", "CodeBuild"
        ],
        "Containers & Orchestration": [
            "Docker", "Docker Compose", "Kubernetes", "Kind",
            "Helm", "Amazon ECS", "Amazon EKS", "Amazon ECR"
        ],
        "CI/CD & Version Control": [
            "Jenkins", "AWS CodePipeline", "AWS CodeBuild",
            "Git", "GitHub"
        ],
        "Infrastructure as Code": [
            "Terraform", "Ansible", "Ansible Playbooks"
        ],
        "Monitoring & Logging": [
            "Prometheus", "Grafana", "Metrics", "Dashboards",
            "Alerting Concepts"
        ],
        "Linux & Web Servers": [
            "Ubuntu Linux", "Nginx", "Apache", "Node.js"
        ],
        "Scripting & IT Operations": [
            "Bash", "Shell Scripting", "Cron", "Incident Management",
            "Troubleshooting", "Root Cause Analysis", "MDM",
            "IT Asset Management", "SOPs"
        ]
    },
    "projects": [
        {
            "name": "Konexa",
            "subtitle": "DevOps Operations Platform",
            "technologies": [
                "AWS EC2", "Linux", "Apache", "Node.js",
                "Git", "S3", "IAM", "Bash", "Cron"
            ],
            "description": (
                "A self-hosted DevOps operations platform deployed on "
                "AWS EC2, with automated health checks and backups."
            ),
            "highlights": [
                "Deployed a Linux-based application using Apache and Node.js.",
                "Organized source code, scripts, backups and logs.",
                "Automated health checks and backup routines using Bash and Cron.",
                "Integrated S3 backup storage and IAM roles."
            ]
        },
        {
            "name": "Kubernetes Lab — Kind Cluster",
            "technologies": [
                "Kubernetes", "Kind", "Helm", "Traefik", "Docker"
            ],
            "description": (
                "A hands-on Kubernetes lab for deploying workloads "
                "and practising cluster operations."
            ),
            "highlights": [
                "Worked with Pods, Deployments, Services and Namespaces.",
                "Practised ConfigMaps, Secrets, Jobs and CronJobs.",
                "Worked with PV/PVC, Traefik Ingress and Middleware.",
                "Practised rolling updates, rollbacks and troubleshooting."
            ]
        },
        {
            "name": "Terraform on AWS",
            "subtitle": "Infrastructure as Code Lab",
            "technologies": ["Terraform", "AWS"],
            "description": (
                "Repeatable AWS infrastructure provisioning using "
                "Terraform configuration and reusable modules."
            ),
            "highlights": [
                "Worked with resources, variables and outputs.",
                "Practised remote state and reusable modules.",
                "Followed the plan, apply and destroy workflow."
            ]
        },
        {
            "name": "AWS CI/CD and Container Lab",
            "technologies": [
                "CodePipeline", "CodeBuild", "ECR", "ECS", "EKS",
                "Prometheus", "Grafana"
            ],
            "description": (
                "A lab exploring cloud CI/CD, container image management, "
                "orchestration and monitoring."
            ),
            "highlights": [
                "Worked with AWS CodePipeline and CodeBuild.",
                "Used ECR for container images and explored ECS/EKS.",
                "Practised metrics collection and monitoring dashboards."
            ]
        }
    ],
    "education": [
        {
            "qualification": "B.E. Civil Engineering",
            "institution": "Anna University",
            "year": "2020"
        }
    ],
    "training": [
        "DevOps with AWS — IT Vedant, Dadar, Mumbai",
        "CI/CD Pipelines with Jenkins",
        "Docker for Containerization and Deployment",
        "Kubernetes for Container Orchestration",
        "Infrastructure as Code with Terraform and AWS",
        "Ansible Playbooks and Automation",
        "Real-Time Monitoring and Logging in DevOps"
    ]
}


@app.get("/api/health")
def health():
    return jsonify({"status": "healthy"})


@app.get("/api/profile")
def profile():
    return jsonify({
        key: value
        for key, value in PROFILE.items()
        if key not in ("phone", "email")
    })


@app.get("/api/skills")
def skills():
    return jsonify({"skills": PROFILE["skills"]})


@app.get("/api/projects")
def projects():
    return jsonify({"projects": PROFILE["projects"]})


@app.get("/api/experience")
def experience():
    return jsonify({"experience": PROFILE["experience"]})


@app.get("/api/contact")
def contact():
    return jsonify({
        "email": PROFILE["email"],
        "phone": PROFILE["phone"]
    })


if __name__ == "__main__":
    port = int(os.environ.get("PORT", "5000"))
    app.run(host="0.0.0.0", port=port)

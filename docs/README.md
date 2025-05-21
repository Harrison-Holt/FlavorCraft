# 🍽️ FlavorCraft – Accessible Recipe Book App

**FlavorCraft** is a cloud-native, accessible recipe management application. It’s built to demonstrate secure AWS serverless architecture, user authentication, and compliance with accessibility standards. Designed with production-readiness in mind, it integrates CI/CD, real-time logging, and accessibility testing aligned with WCAG 2.1 and Section 508.

---

## 🎯 Project Purpose

This project serves as a practical application of:

- Secure, scalable AWS architecture for a real-world backend project
- Full-stack cloud development using AWS Lambda, API Gateway, and Cognito
- Accessibility best practices using WCAG 2.1 and DHS Trusted Tester standards
- CI/CD automation using AWS CodePipeline and CodeBuild

---

## 🎓 Certifications Demonstrated

This project applies concepts from the following certifications:

- **AWS Certified Solutions Architect – Associate**
  - S3 + CloudFront hosting, IAM, API Gateway, deployment pipelines
- **AWS Certified Developer – Associate**
  - Lambda development, environment variables, event triggers, Cognito auth
- **DHS Trusted Tester for Web**
  - Manual accessibility testing, WCAG alignment, semantic HTML, keyboard support

---

## 🛠️ Tech Stack

**Frontend**
- HTML5, Bootstrap 5, Vanilla JavaScript
- Hosted on AWS S3 + CloudFront
- Accessibility testing via Pa11y + Lighthouse

**Backend**
- AWS Lambda (Node.js)
- Amazon API Gateway (REST APIs)
- Amazon Cognito (User Authentication)
- Amazon DynamoDB or RDS
- Amazon S3 (Image Uploads)
- Amazon CloudWatch (Logging & Monitoring)

**CI/CD**
- AWS CodePipeline for automated deployment
- AWS CodeBuild for static site build + accessibility checks (Pa11y, Lighthouse)
- Artifacts deployed to S3 and Lambda functions updated via buildspec.yml

---

## 📈 Project Status

**🚧 In Development**  
Frontend and backend wiring is underway. CI/CD pipeline and accessibility testing integration actively being implemented.

---

## 🧪 Accessibility Focus

- WCAG 2.1 Level AA standards (validated via Pa11y + Lighthouse)
- Semantic HTML, proper heading order, ARIA roles where needed
- Keyboard navigation and focus visibility
- Manual test cases aligned with DHS Trusted Tester methodology

---

## 🔐 Security and Infrastructure

- Cognito-based user login/registration
- IAM roles enforce least-privilege access
- Backend APIs exposed only via API Gateway
- HTTPS enforced via CloudFront for static frontend

---

## 🚀 Deployment Flow

1. Push code to GitHub
2. CodePipeline triggers on new commit
3. CodeBuild runs:
   - Accessibility tests (Pa11y, Lighthouse)
   - Lints frontend
   - Builds and deploys static assets to S3
   - Updates Lambda functions via ZIP artifact
4. CloudFront cache invalidated (if needed)

---

## 🙌 Author

**Harrison Holt**  
AWS-Certified Backend & Cloud Developer  
📫 [LinkedIn](www.linkedin.com/in/harrison-holt-18a703202) • 🌐 [harrisonholt.dev](https://www.harrisonholt.dev)

> “Build securely. Test accessibly. Ship with confidence.”

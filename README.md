# Thryve LMS

Welcome to **Thryve LMS**! A cutting-edge, AI-powered Learning Management System (LMS) built with modern web technologies like **React.js** and **Next.js**. The platform integrates **Google Gemini** for personalized and adaptive learning experiences, creating a dynamic learning environment for all users.

---

# 🛠️ Key Features

- **AI-Powered Learning**: Integrated with **Google Gemini** for content generation and adaptive learning paths.
- **Personalized Learning Paths**: Tailored learning experiences based on user progress and needs.
- **User Authentication**: Built-in secure authentication using **Clerk**.
- **Subscription Payments**: Managed payments via **Stripe** for a smooth, scalable transaction system.
- **Responsive UI**: A scalable, mobile-first UI designed using **Tailwind CSS** and **ShadCN** to ensure seamless access across all devices.

---

# 🚀 Getting Started

To get a local copy of the project up and running, follow these simple steps:

## 1. Clone the repository
```bash
git clone https://github.com/your-username/thryve.git
```
## 2. Install dependencies
```bash
npm install
```
## 3.Set up environment variables Create a ```.env.local``` file and add
#### 🌐 GENERAL CONFIGURATION
```bash
HOST_URL=http://localhost:3000
```
#### 🔐 CLERK AUTHENTICATION
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key
```
#### Clerk Auth Routes
```bash
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```
#### 🤖 GOOGLE GEMINI AI
```bash
NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY=your-google-gemini-api-key
```
#### 💳 STRIPE PAYMENT
```bash
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your-stripe-public-key
STRIPE_SECRET_KEY=your-stripe-secret-key
```
#### Pricing Plan IDs
```bash
NEXT_PUBLIC_STRIPE_MONTHLY_PRICE_ID=your-stripe-monthly-plan-id
```
#### Webhook Secret
```bash
STRIPE_WEB_HOOK_KEY=your-stripe-webhook-secret
```
#### ⚙️ INNGEST EVENT HANDLER
```bash
INNGEST_EVENT_KEY=your-inngest-event-key
INNGEST_SIGNING_KEY=your-inngest-signing-key
```
#### 🗃️ DATABASE
```bash
NEXT_PUBLIC_DATABASE_CONNECTION_STRING=your-database-connection-string
```
## 4. Start the development server
```bash
npm run dev
```
---
# 🔗 Links
- Live on - [Thryve](https://thryve-orpin.vercel.app/)
- LinkedIn - [@LinkedIn](https://www.linkedin.com/in/95abdullah99/)
---
# ScreenShots
##  1 Landing Page
![image](https://github.com/user-attachments/assets/893c8da0-f5db-4f4e-82c7-2c0081161e19)
## 2 DashBoard
![Screenshot 2025-04-03 220443](https://github.com/user-attachments/assets/a9a9df7d-9faa-4ff5-804c-b1c91cdd441b)
----
# 📧Contact
#### 95abdullah99@gmail.com

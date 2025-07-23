# Ecommerce Web Application

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A full‑stack ecommerce platform featuring user authentication, product management, search & filter, and Stripe payments.

---

## 🚀 Features

- **User Accounts**  
  JWT‑based signup/login with role‑based dashboard (admin vs. customer).

- **Product Catalog**  
  CRUD operations for products, categories, and images.

- **Search & Filter**  
  Keyword search, category filtering, and pagination.

- **Secure Checkout**  
  Stripe integration for payment processing.

---

## 📁 Repository Structure

```
Ecommerce-app/
├── client/               # React.js frontend (Create React App)
├── server/               # Express.js backend
│   ├── routes/
│   ├── controllers/
│   └── models/
├── .env                  # API keys and config
├── package.json (root)   # scripts to start both client & server
└── README.md
```

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Axios, React Router, TailwindCSS  
- **Backend:** Node.js, Express.js, MongoDB (Mongoose)  
- **Authentication:** JWT  
- **Payments:** Stripe API  
- **Deployment:** Vercel (frontend), Heroku/Render (backend)

---

## 🔧 Getting Started

1. **Clone & install**  
   ```bash
   git clone https://github.com/Yuvraj-Singh-Rajawat/Ecommerce-app.git
   cd Ecommerce-app
   npm install
   ```

2. **Configure environment** (`.env`):  
   ```env
    MONGODB_URI = mongodburl
    CLOUDINARY_API_KEY = yourcloudinaryapi
    CLOUDINARY_SECRET_KEY = yourcloudinarysecret
    CLOUDINARY_NAME = yourname
    JWT_SECRET = yourjwtsecret
    ADMIN_EMAIL = admin@forever.com
    ADMIN_PASSWORD = qwerty123
    STRIPE_SECRET_KEY = yourstripesecret
    RAZORPAY_KEY_SECRET = yoursecret
    RAZORPAY_KEY_ID = yourkey
    PORT = port
   ```

3. **Run**  
   ```bash
   npm run dev
   ```
   - Frontend: http://localhost:3000  
   - Backend: http://localhost:5000

---

## 🤝 Contributing

1. Fork the repo  
2. Create feature branch (`git checkout -b feature/X`)  
3. Commit changes (`git commit -m "Add X"`)  
4. Push (`git push origin feature/X`)  
5. Open a PR

---

## 📄 License

MIT © Yuvraj Singh Rajawat

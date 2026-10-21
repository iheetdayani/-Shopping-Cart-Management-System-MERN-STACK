# 🛒 Shopping Cart Management System

A full-stack Shopping Cart Management System developed using the **MERN Stack** — MongoDB, Express.js, React.js, and Node.js.

The project focuses on product management, REST API integration, and shopping cart calculations through a React frontend.

## 🚀 Features

- Create and store product records in MongoDB.
- Retrieve all products through REST APIs.
- Retrieve individual products by ID.
- Display products in a React dashboard.
- Add and manage shopping cart items.
- Calculate product totals and cart amounts.
- Perform discount and final bill calculations.
- Build a responsive interface using Bootstrap 5.
- Connect the frontend with backend APIs.

## 🛠️ Technologies Used

- **Frontend:** React.js, JavaScript, Bootstrap 5
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **API Integration:** REST APIs, Axios

## 📦 Product Management

The backend provides REST API operations for creating and retrieving products.

| HTTP Method | Operation |
|---|---|
| `POST` | Create a product |
| `GET` | Retrieve all products |
| `GET /:id` | Retrieve a product by ID |

## 🛒 Shopping Cart Calculations

The application focuses on calculating product amounts, discounts, and the final bill.

**Product Amount**

```js
const amount = product.price * product.quantity;
```

**Cart Total**

```js
const total = cart.reduce((sum, item) => {
  return sum + item.price * item.quantity;
}, 0);
```

*These are illustrative calculation formulas; adjust property names to match your actual implementation.*

## 📁 Project Structure

```text
Shopping-Cart-Management-System/
├── Backend/
│   ├── Models/
│   │   └── Product.js
│   ├── Controller/
│   │   └── ProductController.js
│   ├── Routes/
│   │   └── ProductRoutes.js
│   ├── server.js
│   └── package.json
│
└── Frontend/
    ├── src/
    │   ├── Components/
    │   ├── Services/
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

*Update the structure to match your actual folder names.*

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd Shopping-Cart-Management-System
```

### 2. Run the Backend

```bash
cd Backend
npm install
npm run dev
```

Configure the MongoDB connection and environment variables before starting the server.

### 3. Run the Frontend

Open a second terminal:

```bash
cd Frontend
npm install
npm run dev
```

Open the local URL shown in the terminal.

## 🎯 Learning Outcomes

- Creating REST APIs with Express.js.
- Defining MongoDB schemas using Mongoose.
- Connecting React components to backend APIs.
- Managing application data in React.
- Implementing shopping cart calculations.
- Using JavaScript array methods such as `reduce()`.
- Designing responsive interfaces with Bootstrap 5.

## 👨‍💻 Author

**Heet Dayani**

MERN Stack Development | React.js | Node.js | Express.js | MongoDB

---

⭐ If you find this project useful, consider giving the repository a star!

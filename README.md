# 📝 Raw Node.js CRUD API (No Framework, No Dependencies)

This project is a **pure Node.js backend application** that implements a complete **CRUD API for a Todo app** — without using any frameworks, external libraries, or even npm packages.

It is designed to help you understand how things work **under the hood in Node.js**, including request handling, routing, and data management using only built-in modules.

---

## 🚀 Features

* Built using **Node.js core modules only**
* No frameworks (no Express, no Fastify, etc.)
* No external dependencies
* Manual routing system
* Full CRUD operations:

  * Create a Todo
  * Read all Todos
  * Read Todo by ID
  * Update Todo
  * Delete Todo
* In-memory data storage (no database)
* Manual request body parsing (streams)

---

## 📁 Project Structure

```
RAW-NODE-CRUD-API/
│
├── package.json          # Only contains "type": "module"
│
├── server.js             # Entry point: creates HTTP server
├── router.js             # Handles routing logic
│
├── store/
│   └── todoStore.js      # In-memory data store + CRUD logic
│
├── controllers/
│   ├── createTodo.js     # POST /todos
│   ├── getAllTodos.js    # GET /todos
│   ├── getTodoById.js    # GET /todos/:id
│   ├── updateTodo.js     # PUT /todos/:id
│   └── deleteTodo.js     # DELETE /todos/:id
│
└── utils/
    ├── parseBody.js      # Parses incoming JSON body
    └── sendResponse.js   # Sends JSON responses

└── README.md             # Project documentation
```

---

## ⚙️ How It Works

### 1. HTTP Server

The app uses Node.js's built-in:

```js
http.createServer()
```

This creates a basic HTTP server without any abstraction layer.

---

### 2. Request Handling

* `req.method` → Determines HTTP method (GET, POST, PUT, DELETE)
* `req.url` → Determines the route

These are passed into a custom `router.js` to map requests to controllers.

---

### 3. Routing System

Instead of using a framework, routing is handled manually by:

* Matching URL patterns
* Matching HTTP methods
* Calling appropriate controller functions

---

### 4. Controllers

Each controller:

* Handles a specific route
* Interacts with the data store
* Sends a response using a utility function

Example:

* `createTodo.js` → handles creating a new todo
* `getTodoById.js` → fetches a todo by ID

---

### 5. In-Memory Database

* A simple JavaScript array is used as a database
* Located in `store/todoStore.js`
* Stores todo objects
* Data resets when server restarts

---

### 6. Parsing Request Body

Since no middleware is used, request bodies are parsed manually:

* Data is received in chunks (streams)
* Chunks are combined
* JSON is parsed into an object

Handled in:

```
utils/parseBody.js
```

---

### 7. Sending Responses

All responses are sent using a helper:

```
utils/sendResponse.js
```

This ensures:

* Proper headers (`Content-Type: application/json`)
* Consistent response format

---

## 📡 API Endpoints

| Method | Endpoint   | Description       |
| ------ | ---------- | ----------------- |
| GET    | /todos     | Get all todos     |
| GET    | /todos/:id | Get todo by ID    |
| POST   | /todos     | Create a new todo |
| PUT    | /todos/:id | Update a todo     |
| DELETE | /todos/:id | Delete a todo     |

---

## ▶️ Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd RAW-NODE-CRUD-API
```

---

### 2. Ensure Node.js is Installed

```bash
node -v
```

---

### 3. Run the Server

```bash
node server.js
```

---

### 4. Test the API

* Postman
* curl
* Any REST client

---

## 📚 Reference

Learning resources :

* https://www.freecodecamp.org/

# 🖥️ Basic Node.js HTTP Server – For Product Managers Learning Tech

Welcome! This project is a beginner-friendly Node.js server example designed specifically for **Product Managers** who want to understand the **basics of backend development and server communication**.

---

## 🔍 What This Project Does

This simple server does the following:

- Starts a Node.js HTTP server on `localhost:3000`
- Logs the request details (headers, method, and URL) to the console
- Sends a sample JSON object in response

It’s a perfect intro to how servers work behind the scenes.

---

## 🧠 Why It Matters for Product Managers

Understanding how servers and APIs work helps you:

- Communicate better with developers
- Write clearer product requirements
- Make more informed decisions during technical discussions

You don’t need to be an engineer, but a little technical fluency goes a long way 🚀

---

## ⚙️ How to Run This Server

### ✅ Requirements

Make sure you have [Node.js](https://nodejs.org/) installed (v14 or higher).

---

### 🚀 Steps

1. **Create the project folder**  
   Inside your terminal, run:
   ```bash
   mkdir basic-node-server
   cd basic-node-server

2. **Create the file**  
   Inside the folder, create a file named server.js and paste this code:

   import http from 'http';

  const server = http.createServer((request, response) => {
     console.log('headers', request.headers)
     console.log('method', request.method)
     console.log('url', request.url)
     const user = {
       name: 'Daniela',
       hobby: 'Dancing',
       location: 'Canada'
    }


   response.setHeader('content-type', 'application/json');
   response.end(JSON.stringify(user));
   });

   server.listen(3000);


3. **Create a file called package.json and add this;**
       {
    "type": "module"
       }


4.  **Run the server**
     node server.js


5.  **Test it in your browser**
    Open your browser and go to:
    http://localhost:3000


    You’ll see a JSON response:
  {
     "name": "Daniela",
     "hobby": "Dancing",
     "location": "Canada"
  }


    
  


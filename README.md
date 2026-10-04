# Employee Management Portal

## 📌 Project Overview

Employee Management Portal is a full-stack web application developed to manage employee information easily.

The application allows users to **add, view, update, and delete employee details** through a simple React-based user interface. The backend is developed using **Spring Boot REST APIs**, and employee data is stored in a database using **Spring Data JPA**.

## 🛠️ Technologies Used

### Frontend

* React.js
* HTML
* CSS
* JavaScript
* Axios

### Backend

* Java
* Spring Boot
* Spring Data JPA
* REST APIs
* Maven

### Database

* MySQL

### Tools

* Eclipse
* Visual Studio Code
* Git
* GitHub

## ✨ Features

* Add new employee
* View all employees
* View employee by ID
* Update employee details
* Delete employee
* REST API integration
* React frontend
* Spring Boot backend
* MySQL database integration

## 📂 Project Structure

### Backend

```text
Employee-Management-Portal
│
├── src
│   └── main
│       ├── java
│       │   └── com.Vcube.EmployeeManagement
│       │       ├── Controller
│       │       ├── Service
│       │       ├── Model
│       │       └── Repository
│       │
│       └── resources
│           └── application.properties
│
└── pom.xml
```

### Frontend

```text
employee-frontend
│
├── public
├── src
│   ├── components
│   ├── services
│   └── ...
│
├── package.json
└── package-lock.json
```

## 🔗 REST API Endpoints

| Method | Endpoint          | Description           |
| ------ | ----------------- | --------------------- |
| GET    | `/getEmpList`     | Get all employees     |
| GET    | `/getEmp/{eid}`   | Get employee by ID    |
| POST   | `/createEmp`      | Create a new employee |
| PUT    | `/updateEmp/{id}` | Update employee       |
| DELETE | `/delEmp/{id}`    | Delete employee       |

## ▶️ How to Run the Project

### Backend

1. Open the backend project in Eclipse.
2. Configure the MySQL database.
3. Update the database details in `application.properties`.
4. Run the Spring Boot application.
5. Backend will run on:

```text
http://localhost:8081
```

### Frontend

1. Open the frontend project in Visual Studio Code.
2. Open the terminal inside the project folder.
3. Install dependencies:

```bash
npm install
```

4. Start the React application:

```bash
npm start
```

5. Open the application in the browser:

```text
http://localhost:3000
```

## 🔄 Application Flow

```text
React Frontend
      ↓
Axios
      ↓
Spring Boot REST API
      ↓
Service Layer
      ↓
Repository Layer
      ↓
MySQL Database
```

## 🎯 Project Objective

The main objective of this project is to build a simple and user-friendly employee management system while understanding how **React.js, Spring Boot, REST APIs, JPA, and MySQL** work together in a full-stack application.

## 👩‍💻 Developer

**Khyathi Chetti**

B.Tech – Cyber Security
Raghu Engineering College

## 📌 Future Enhancements

* Employee authentication and login
* Search and filter employees
* Pagination
* Employee profile management
* Form validation
* Role-based access
* Deployment to cloud

## 📄 License

This project is created for learning and educational purposes.

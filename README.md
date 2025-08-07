# Online Banking System

## Overview
The Online Banking System is a full-stack web application built using Java and Spring Boot. It allows users to manage their banking activities securely through a web interface. The application supports user registration, login, account management, and transaction processing.

## Technologies Used
- **Java 17+**
- **Spring Boot** (Spring Web, Spring Security, Spring Data JPA)
- **Thymeleaf** for frontend rendering
- **MySQL** for persistent storage
- **Maven** for project management

## Project Structure
```
online-banking-system
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── bankingsystem
│   │   │           ├── controller
│   │   │           ├── model
│   │   │           ├── repository
│   │   │           ├── service
│   │   │           ├── config
│   │   │           └── dto
│   │   └── resources
│   │       ├── templates
│   │       │   └── index.html
│   │       ├── static
│   │       │   ├── css
│   │       │   └── js
│   │       └── application.properties
├── pom.xml
└── README.md
```

## Features
- **User Registration & Login**: Secure user authentication with Spring Security and BCrypt password hashing.
- **Account Management**: Users can create accounts, view balances, and manage account information.
- **Transactions**: Users can deposit, withdraw, and transfer funds between accounts.
- **Transaction History**: Users can view their transaction history linked to their accounts.
- **Admin Dashboard** (Optional): Admins can manage users and accounts, view reports, and perform administrative tasks.

## Setup Instructions
1. **Clone the Repository**:
   ```
   git clone <repository-url>
   cd online-banking-system
   ```

2. **Configure Database**:
   - Create a MySQL database and update the `application.properties` file with your database connection settings.

3. **Build the Project**:
   ```
   mvn clean install
   ```

4. **Run the Application**:
   ```
   mvn spring-boot:run
   ```

5. **Access the Application**:
   Open your web browser and navigate to `http://localhost:8080`.

## Usage Guidelines
- Register a new user account to start using the banking features.
- Log in with your credentials to access your account.
- Use the navigation to perform transactions and manage your account.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
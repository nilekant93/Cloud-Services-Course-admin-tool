# Cloud Services Course – Admin

**This project is part of my summer 2025 training** and includes the following related repositories:  
- [Cloud Services Course – Student Tool](https://github.com/nilekant93/Cloud-Services-Course-student-tool-)  
- [Cloud Services Course – Backend](https://github.com/nilekant93/Cloud-Services-Course-Backend)  

## Overview
This is the **Admin** application for the Cloud Services Course project.  
It allows administrators to:  
- View all registered students from the backend database  
- Track which weekly tests have been successfully completed  
- Delete student accounts entirely from the database  

The Admin app communicates with the **Backend** service to fetch and manage student data.

## Features
- Admin login with credentials stored in the backend `.env` file  
- Display a list of all registered students  
- View progress for each student (Week 1–5)  
- Delete a student account from the database  

## Tech Stack
- [React](https://react.dev/)  
- [React Router](https://reactrouter.com/)  
- [Axios](https://axios-http.com/)  
- [React Scripts](https://www.npmjs.com/package/react-scripts)  

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) vXX+  
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. Clone the repository:
```bash
git clone https://github.com/nilekant93/cloud-services-course-admin.git
cd cloud-services-course-admin
cd admin-app
````
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm start serve
```
The app will run on http://localhost:3000 by default and communicate with the backend at http://localhost:3001.
> **Important**
> - Ensure the Backend service (app.py file) is running to fetch and manage student data.
> - The backend .env file must contain the admin credentials to log in successfully.





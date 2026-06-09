# 🌐 Online NGO Management System

> A centralized web platform for NGO verification, donor management, donation tracking, and administrative oversight — built to bring transparency and accountability to non-profit operations.

![ASP.NET](https://img.shields.io/badge/ASP.NET-Web_Forms-512BD4?style=flat-square&logo=dotnet)
![CSharp](https://img.shields.io/badge/C%23-.NET_Framework-239120?style=flat-square&logo=csharp)
![MySQL](https://img.shields.io/badge/Database-MySQL-4479A1?style=flat-square&logo=mysql)
![Visual Studio](https://img.shields.io/badge/IDE-Visual_Studio_2022-5C2D91?style=flat-square&logo=visualstudio)
![License](https://img.shields.io/badge/License-Academic-orange?style=flat-square)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [System Modules](#-system-modules)
- [Project Objectives](#-project-objectives)
- [Installation](#-installation)
- [Screenshots](#-screenshots)
- [Future Enhancements](#-future-enhancements)
- [Author](#-author)
- [License](#-license)

---

## 📌 Overview

The **Online NGO Management System** is a web-based application developed using **ASP.NET Web Forms**, **C#**, and **MySQL**. It provides a centralized platform for:

- ✅ NGO registration and administrator verification
- ✅ Donor registration, login, and donation management
- ✅ Transparent donation tracking and history
- ✅ Volunteer registration management
- ✅ Admin monitoring, reporting, and system control

The system bridges the gap between NGOs and donors by ensuring that only **verified NGOs** can receive donations, improving trust, transparency, and accountability across the board.

---

## ✨ Features

### 🏢 NGO Module
| Feature | Description |
|---|---|
| NGO Registration | NGOs can create and register their organization profile |
| Profile Management | Update and maintain NGO details |
| Verification Request | Submit verification requests to the administrator |
| View Verification Status | Track the current approval status in real time |

### 🙋 Donor Module
| Feature | Description |
|---|---|
| Registration & Login | Secure donor account creation and authentication |
| Profile Management | Manage personal and donation preferences |
| Browse Verified NGOs | Discover and explore administrator-approved NGOs |
| Make Donations | Donate directly to a chosen verified NGO |
| Donation History | View complete record of past donations |

### 🛡️ Admin Module
| Feature | Description |
|---|---|
| Secure Login | Protected administrator access |
| NGO Verification | Review, approve, or reject NGO verification requests |
| Manage NGOs & Donors | Full CRUD control over registered entities |
| Monitor Donations | Track all donation transactions in the system |
| Generate Reports | Export and view system-wide reports |
| System Management | Oversee platform settings and user management |

### 💰 Donation Management
- End-to-end **donation tracking**
- Comprehensive **donation records** management
- **Transaction monitoring** for administrators
- **Full donation history** accessible to donors

### 🔒 Security Features
- User **Authentication** (login/logout)
- **Role-Based Access Control** (Admin / NGO / Donor)
- Secure **Data Management** with validation
- Input **Validation and Verification** across all forms

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend** | ASP.NET Web Forms, HTML, CSS, JavaScript |
| **Backend** | C# (.NET Framework) |
| **Database** | MySQL |
| **IDE** | Visual Studio 2022 |
| **Version Control** | Git & GitHub |

---

## 🗂️ System Modules

```
Online NGO Management System
│
├── 1. NGO Registration and Verification
├── 2. Donor Management
├── 3. Donation Management
├── 4. Volunteer Management
├── 5. Admin Dashboard
└── 6. Reporting and Monitoring
```

---

## 🎯 Project Objectives

- 📂 **Digitize** NGO management processes to eliminate manual paperwork
- 🔍 **Provide transparency** in the donation platform
- ✅ **Enable NGO verification** before accepting any donations
- 🤝 **Improve donor trust** and organizational accountability
- 📉 **Reduce manual record-keeping** through centralized data management

---

## ⚙️ Installation

### Prerequisites

Make sure the following are installed on your system:

- [Visual Studio 2022](https://visualstudio.microsoft.com/)
- [.NET Framework](https://dotnet.microsoft.com/)
- [MySQL Server](https://dev.mysql.com/downloads/mysql/)
- [MySQL Connector for .NET](https://dev.mysql.com/downloads/connector/net/)

### Setup Steps

**1. Clone the repository**
```bash
git clone https://github.com/omspatil/Online-NGO-Management-System.git
```

**2. Open the solution in Visual Studio**
```
File → Open → Project/Solution → select the .sln file
```

**3. Create the MySQL database**
```sql
CREATE DATABASE ngo_management;
```

**4. Import the database script**
```
Run the provided SQL script file to create all required tables and seed data.
```

**5. Update the connection string**

Open `Web.config` and update the connection string:
```xml
<connectionStrings>
  <add name="NGOConnectionString"
       connectionString="Server=localhost;Database=ngo_management;Uid=root;Pwd=yourpassword;"
       providerName="MySql.Data.MySqlClient" />
</connectionStrings>
```

**6. Build and run the project**
```
Build → Build Solution (Ctrl + Shift + B)
Debug → Start (F5)
```

---

## 📸 Screenshots

### 🏠 Home Page
> *(Add Screenshot)*

### 📝 NGO Registration
> *(Add Screenshot)*

### 📊 Donor Dashboard
> *(Add Screenshot)*

### 🛡️ Admin Dashboard
> *(Add Screenshot)*

### 💳 Donation Management
> *(Add Screenshot)*

---

## 🚀 Future Enhancements

| Enhancement | Description |
|---|---|
| 💳 Online Payment Gateway | Integrate Razorpay / PayPal for real-time online payments |
| 📩 Email & SMS Notifications | Automated alerts for donations, verification status, and updates |
| 📱 Mobile Application | Native Android/iOS companion app |
| 📈 Advanced Analytics Dashboard | Visual charts and metrics for admins and NGOs |
| 📡 Real-Time Donation Tracking | Live donation feeds and progress bars |
| 📋 NGO Performance Reports | Impact reports and outcome summaries per NGO |

---

## 👨‍💻 Author

**Om Patil**

[![GitHub](https://img.shields.io/badge/GitHub-omspatil-181717?style=flat-square&logo=github)](https://github.com/omspatil)

---

## 📄 License

This project is developed for **academic and educational purposes** as part of the CDAC curriculum.

---

> *"Transparency builds trust. Technology enables transparency."*

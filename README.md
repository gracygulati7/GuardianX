#  GuardianX — Women Safety & Elderly Care Platform

**GuardianX** is a comprehensive web platform designed to empower women and support the elderly by providing safety, health monitoring, and quick emergency assistance — all in one unified system.

Built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**, GuardianX focuses on real-time responsiveness, user-friendly design, and secure backend integration.

---

## 🚀 Live Demo
🔗 **Frontend (Vercel):** [https://guardianx-iota.vercel.app](https://guardianx-iota.vercel.app)  
🔗 **Backend (Render):** [https://guardianx-4gx1.onrender.com](https://guardianx-4gx1.onrender.com)

---

## 🧩 Tech Stack
- **Frontend:** React.js, Axios, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas  
- **Authentication:** JWT (JSON Web Token)  
- **Email Service:** EmailJS  
- **Hosting:** Vercel (Frontend) & Render (Backend)

---

## 👩‍🦰 Women Safety Features

1. **User Registration & Login**  
   Secure user authentication using JWT for protected access to all safety features.

2. **SOS Alert**  
   Instantly triggers a loud **police siren sound** when clicked — helping deter potential threats nearby.

3. **Incident Reporting**  
   Report unsafe incidents easily using a simple form. Option to **report anonymously** for privacy and safety.

4. **Location Sharing**  
   Share your current location with loved ones instantly via **WhatsApp**, ensuring quick help in emergencies.

5. **Emergency Contact Management**  
   Add, update, delete and manage emergency contact details to reach out instantly during distress.

6. **Safety Tips**  
   Browse through a well-organized library of **safety tips** and self-defense advice to stay aware and confident with national helpline numbers in case of emergencies.

---

## 👵 Elderly Care Features

1. **Health Check-In Reminders**  
   Set daily **health and medicine reminders** sent via **EmailJS** for consistent health monitoring.

2. **Routine Tracker**  
   Track daily routines like **meals, walks, and exercises** for maintaining a healthy lifestyle.

3. **Emergency Contact Management**  
   Store and manage trusted emergency contacts for quick response when needed.

4. **Health Status Updates**  
   Submit and view daily **health updates or activities** through a simple and accessible form.

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/gracygulati7/GuardianX.git
cd GuardianX
````

### 2. Install Dependencies

#### Backend 

```bash
cd seniorguardianbackend
npm install
```

#### Frontend 

```bash
cd SeniorGuardian
npm install
```

### 3. Environment Variables

Create `.env` files in both `seniorguardianbackend/` and `SeniorGuardian/` folders.

#### Example `.env` for Backend

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

#### Example `.env` for Frontend

```
REACT_APP_API_URL=https://guardianx-4gx1.onrender.com
```

### 4. Run the App Locally

```bash
# Run backend
cd seniorguardianbackend
npm start

# Run frontend
cd SeniorGuardian
npm start
```

---

## 🌐 Deployment

* **Frontend (Vercel):** `npm run build` → Deploy `/SeniorGuardian/build`
* **Backend (Render):** Connect repo → Add environment variables → Deploy automatically
* **Database:** MongoDB Atlas cluster linked via URI in `.env`

---

## 🔒 Security Highlights

* JWT-based authentication for protected routes
* CORS configured between Vercel and Render
* Secure connection to MongoDB Atlas
* Safe form handling and validation

---

## 🧠 Future Scope

* Real-time SOS tracking and alerts
* AI-based fall detection for elderly users
* Panic button wearable integration
* Voice-based emergency trigger
* Community safety maps and analytics

---

## 👩‍💻 Contributors

**Gracy Gulati**
📧 *[gracy331.be22@chitkara.edu.in](mailto:gracy331.be22@chitkara.edu.in)*
🌐 [LinkedIn](https://www.linkedin.com/in/gracy-gulati-956061292/) | [GitHub](https://github.com/gracygulati7)

**Gunn Arora**
📧 *[gunn333.be22@chitkara.edu.in](mailto:gunn333.be22@chitkara.edu.in)*
🌐 [LinkedIn](https://www.linkedin.com/in/gunn-arora-3a0a9b291/) | [GitHub](https://github.com/gunn333)

---

## 🛡️ License

This project is licensed under the **MIT License** — free to use and modify with attribution.

---

### 💙 “GuardianX — Because Safety and Care Should Never Be a Privilege.”

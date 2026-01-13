# ![Ward 21](https://jpcdn.it/img/fa05b9b6a8985c90ff75d0e2f1de0ff2.png)

# Ward 21 – Official Horror Game Website  
### Game Promotion, Free Downloads & Community Feedback Platform

---

## Project Overview

This website was developed as the **official promotional platform** for the indie survival horror game **Ward 21**.  
The goal of the project is to **market the game**, **provide free downloads**, and **build a feedback-driven community**, while delivering a **cinematic horror-themed web experience**.

Key objectives:

- Promote the **Ward 21 survival horror game**
- Allow players to **download the game for free**
- Collect **player feedback and reports**
- Target both **local Sinhala audiences** and **international players**
- Deliver an immersive **dark, horror-themed UI** with modern effects

The site focuses on **performance, accessibility, and atmosphere**, combining smooth animations, parallax depth, and carefully designed dark visuals.

---

## Core Features

- 🎮 **Free Game Downloads** (step-by-step flow)
- 👤 **Age Gate / Mature Audience Filter**
- 🌐 **Multilingual Support (English & Sinhala)**
- 🧟 **Horror-themed UI & Dark Mode Design**
- 🖼️ **Parallax Image Effects (Depth / 3D Feel)**
- 📰 **News & Updates System**
- 💬 **Player Feedback & Reports (Firebase)**
- 📩 **Email Collection for Download Access**
- 🎬 **Trailer & Media Sections**
- ⚡ **Custom Splash Screen & Smooth Page Transitions**

---

## Root Project Structure

```text
ward21-web-v2/
├─ public/
│  ├─ img/                     # Static images & fallback visuals
│  ├─ vid/                     # Trailer & background videos
│  └─ ward21logo.png
│
├─ src/
│  ├─ assets/
│  │  ├─ fonts/
│  │  ├─ img/
│  │  ├─ json/                 # Static content & config
│  │  └─ vid/
│
│  ├─ components/
│  │  ├─ front/
│  │  │  └─ AgeGate.jsx        # Age verification & splash screen
│  │
│  │  ├─ hooks/
│  │  │  ├─ useParallax.js     # Parallax scroll effects
│  │  │  └─ useTypewriter.js
│  │
│  │  ├─ partials/
│  │  │  ├─ nav.jsx
│  │  │  ├─ footer.jsx
│  │  │  └─ LangSwitch.jsx
│  │
│  │  ├─ sections/
│  │  │  ├─ home-hero.jsx
│  │  │  ├─ home-story.jsx
│  │  │  ├─ home-about.jsx
│  │  │  ├─ home-news.jsx
│  │  │  ├─ Gameplay.jsx
│  │  │  ├─ Credits.jsx
│  │  │  ├─ watch-trailer.jsx
│  │  │  ├─ report.jsx
│  │  │  └─ tos.jsx
│  │
│  │  └─ ui/
│  │     ├─ DownloadModal.jsx
│  │     ├─ GameAlbum.jsx
│  │     ├─ TrailerButton.jsx
│  │     └─ NewsCard.jsx
│
│  ├─ data/
│  │  ├─ english/              # English content constants
│  │  └─ sinhala/              # Sinhala content constants
│
│  ├─ firebase/
│  │  └─ config.js             # Firestore integration
│
│  ├─ pages/
│  │  ├─ home.jsx
│  │  ├─ news.jsx
│  │  ├─ report.jsx
│  │  ├─ credits.jsx
│  │  ├─ tos.jsx
│  │  └─ NotFound.jsx
│
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
│
├─ .env
├─ package.json
├─ index.html
└─ eslint.config.js
```
## Technologies Used

### 1. React.js
- Component-based architecture for clean, modular UI
- Reusable sections for hero, story, gameplay, and downloads
- Page-level separation for scalability

---

### 2. Tailwind CSS
- Utility-first styling with a dark horror color palette
- Smooth hover, transition, and focus effects
- Responsive design optimized for desktop & mobile
- Custom gradients and lighting-style shadows

---

### 3. Scroll & Parallax Effects
- Custom `useParallax` hook for depth-based motion
- Scroll-triggered animations to enhance immersion
- Layered images to simulate 3D depth feeling
- Smooth easing for cinematic transitions

---

### 4. Multilingual System (English & Sinhala)
- Entire landing page supports dual languages
- Text content managed via constant data files
- Easy scalability for future languages
- Special focus on Sinhala local audience marketing

---

### 5. Firebase (Firestore)
Stores:
- Player feedback
- Bug reports
- Download submissions (email & name)

Additional features:
- Secure and scalable backend
- Real-time updates for admin review

---

### 6. Age Gate & Splash Screen
- Custom-built age verification screen
- Ensures mature audience only access
- Prevents immediate content exposure
- Enhances horror immersion and responsibility

---

### 7. Download System
**Step-by-step download flow:**
1. Enter name & email  
2. Submit details  
3. Unlock download access  

**Helps to:**
- Track player interest
- Build early community
- Gather feedback

---

### 8. Horror-Themed Design Language
- Dark UI with red/gray accents
- High-contrast typography
- Atmospheric spacing and layout
- Designed to match survival horror tone

---

## Performance & Optimization
- Lightweight images with lazy loading
- Reduced animation complexity on mobile
- Minimal JS overhead for better load times
- Clean separation of assets and logic

---

## Project Challenges
- Balancing visual atmosphere vs performance
- Designing parallax effects without overloading GPU
- Ensuring Sinhala fonts remain readable in dark UI
- Managing smooth animations across low-end devices

---

## Intended Use
- Official **Ward 21** game website
- Free game distribution
- Marketing & player engagement
- Feedback and bug reporting
- Community growth

---

## Resources & Inspirations
- Horror game UI references
- Modern React landing pages
- Indie game marketing websites
- Tailwind CSS documentation
- Firebase documentation

---

## Developer Notes
- This project is fully custom designed and developed
- No website templates were used
- Focused on clean architecture, scalability, and immersion
- Designed for long-term updates alongside game development

---

## Developed & Designed by  
**Yasitha Dulaj**

🔗 GitHub: https://github.com/Dulaj007  
🎮 Game Website: https://ward21.info.gf

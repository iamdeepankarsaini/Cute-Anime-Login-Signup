<div align="center">

  # ✨ Created by Deepankar Saini ✨

  # 🌸 Cute Anime Glassmorphic Login & Signup Template

  <p align="center">
    <b>A modern, light-pink & white glassmorphism frontend website template featuring falling sakura petals, interactive forms, dynamic password strength meter, and modal dialogs.</b>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
    <img src="https://img.shields.io/badge/Design-Glassmorphism-ff477e?style=for-the-badge" alt="Glassmorphism" />
    <img src="https://img.shields.io/badge/Responsive-Yes-brightgreen?style=for-the-badge" alt="Responsive" />
    <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License" />
  </p>

  ---
</div>

## 📌 Overview

Welcome to the **Cute Anime Glassmorphic Login & Signup** portal template! This project is designed to give your web application, SaaS platform, anime blog, or gaming community portal a ultra-premium, aesthetically stunning visual identity. 

It combines **frosted glassmorphism**, soft pink gradient accents, floating mascot animation, and an interactive **HTML5 Canvas Sakura Petals particle system** with full client-side validation and responsive design.

---

## ✨ Key Features

- 🌸 **Live Sakura Petal Canvas:** Interactive particle engine with realistic floating petals and mouse cursor attraction.
- 🎨 **Light Pink Glassmorphism:** Clean, modern CSS frosted glass effect with glowing borders and subtle drop shadows.
- 🔄 **Segmented Tab Switcher:** Animated sliding pill tab transition between **Login** and **Sign Up** forms.
- 🔐 **Interactive Form Security:**
  - Real-time Email validation & error feedback.
  - Password show/hide toggle.
  - Live 4-bar Password Strength Meter with feedback indicators.
  - Confirm Password matching validation.
- 💬 **Interactive Modals:**
  - Password Recovery modal with email reset link simulation.
  - Terms of Service & Privacy Policy popups with backdrop blur.
- 📱 **Fully Responsive:** Flawless experience across desktop, tablet, and mobile displays.
- ⚡ **Zero External Dependencies:** Built with pure Vanilla HTML5, CSS3, and JavaScript — lightweight and super fast!

---

## 📁 Project Structure

Here is the file and directory layout of the project:

```text
Cute Anime Login-Signup/
│
├── 📄 index.html          # Main HTML5 structure (Forms, Header, Modals, Tab Switcher)
├── 🎨 styles.css          # CSS Design Tokens, Glassmorphism, Animations, Responsive Layout
├── ⚡ app.js              # JavaScript Interactive Logic, Canvas Sakura Engine, API Handlers
├── 📝 setup.txt           # Quick reference configuration & backend integration instructions
├── 📄 README.md           # Documentation & Customization Guide (This file)
└── 📂 assets/             # Media and graphic assets
    ├── 🖼️ anime-bg.jpg    # High-Definition anime background image
    └── 🐱 chibi-mascot.png # Cute floating chibi anime character image
```

### Detailed File Descriptions:
1. **`index.html`**: Contains the semantic HTML setup including the backdrop canvas, ambient gradient blobs, card stage container, form fields, tab buttons, social logins, and modal popups.
2. **`styles.css`**: Defines all `:root` CSS custom properties (colors, shadows, blur levels), animations (`@keyframes floatBob`, `@keyframes pulseGlow`), glass card styling, and responsive media queries.
3. **`app.js`**: Houses the particle system engine (`SakuraPetal` class), event listeners for tab switching, real-time input validation logic, modal dialog controls, and network call simulation handlers.
4. **`assets/`**: Holds high-resolution background imagery and transparent mascot PNG graphics.

---

## 🚀 How to Use in Your Website

Integrating this template into your web project or web application is simple and straightforward:

### Option 1: Direct Usage (Standalone Portal)
1. Download or clone this repository to your computer:
   ```bash
   git clone https://github.com/your-username/Cute-Anime-Login-Signup.git
   ```
2. Open the project folder in your editor (VS Code, Sublime, etc.).
3. Double-click `index.html` or use VS Code **Live Server** extension to view the template in your browser.

### Option 2: Integration into an Existing Website / Application
1. **Copy Assets & Styles**:
   - Copy `styles.css` into your project's CSS directory (or merge its contents into your main CSS file).
   - Copy the `assets/` folder to your project's static assets directory.
2. **Include Google Fonts & Stylesheet**:
   Add the following tags inside your HTML `<head>` section:
   ```html
   <!-- Google Fonts -->
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

   <!-- Main Stylesheet -->
   <link rel="stylesheet" href="styles.css">
   ```
3. **Embed HTML Structure**:
   Copy the `.page-container` and `<canvas id="sakura-canvas">` markup from `index.html` into your web page.
4. **Link JavaScript Logic**:
   Include `app.js` right before the closing `</body>` tag:
   ```html
   <script src="app.js"></script>
   </body>
   ```

---

## ⚙️ Where to Make Changes (Customization Guide)

### 🎨 1. Customizing Colors & Theme Tokens (`styles.css`)
All major theme styling options are centralized as CSS custom variables in `styles.css` at the top of the file under `:root`:

```css
:root {
  /* Brand Accent Colors */
  --primary-pink: #ff477e;        /* Main Pink Button & Highlight Accent */
  --primary-hover: #ff2a6d;       /* Button Hover State */
  --primary-light: #ff758c;       /* Light Pink Gradient Stop */
  
  /* Background & Glass Effect Colors */
  --bg-pink-soft: #fff0f5;        /* Soft Background Tint */
  --glass-bg: rgba(255, 255, 255, 0.82); /* Frosted Glass Card Fill */
  --glass-border: rgba(255, 255, 255, 0.9); /* Glass Border Outline */
  
  /* Text & Neutral Colors */
  --text-dark: #2b2d42;         /* Primary Headings & Labels */
  --text-muted: #6c757d;        /* Subtitles & Placeholders */
}
```
> 💡 **Tip:** To change the color scheme (e.g. to Lavender, Sky Blue, or Mint Green), simply modify the HEX/RGBA values above!

---

### 🖼️ 2. Replacing Background & Mascot Images (`assets/`)
- **Background Image:** Replace `assets/anime-bg.jpg` with your own wallpaper file. If you rename the file, update line 18 in `styles.css`:
  ```css
  .anime-bg-image {
    background-image: url('assets/your-new-bg.jpg');
  }
  ```
- **Chibi Mascot Character:** Replace `assets/chibi-mascot.png` with your transparent PNG character. Update line 125 in `index.html` if the file name changes.

---

### ⚡ 3. Connecting Real Backend APIs (`app.js`)
By default, `app.js` simulates network response times with `setTimeout`. To connect your real backend API (e.g. Node.js/Express, Python/Django, FastAPI, Firebase, Supabase, PHP):

1. Open `app.js`.
2. Locate the form submit event listeners for `#login-form`, `#signup-form`, and `#recovery-form`.
3. Replace the `simulateNetworkCall(...)` function with a standard `fetch()` or `axios` call:

```javascript
// 🔑 Example API Integration for Login (Inside app.js)
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  try {
    const response = await fetch('https://api.yourdomain.com/v1/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      // Store JWT Auth Token
      localStorage.setItem('userToken', data.token);
      
      // Show Success Modal & Redirect
      showSuccessModal('Welcome Back!', 'Authentication successful!', email);
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1500);
    } else {
      showFieldError('login-password', data.message || 'Invalid credentials.');
    }
  } catch (error) {
    showFieldError('login-email', 'Network error. Please try again later.');
  }
});
```

---

### 🌸 4. Adjusting Sakura Petal Animations (`app.js`)
You can tweak the falling sakura particle physics inside `app.js`:
- **Change Petal Quantity:** Search for `PETAL_COUNT` in `app.js` (default is `35`). Increase for more petals, decrease for lighter performance.
- **Adjust Gravity & Speed:** Modify `this.speedY` and `this.speedX` properties inside the `SakuraPetal` class constructor.

---

### 📜 5. Updating Privacy Policy & Terms of Service (`index.html`)
The text displayed inside the legal modals is located directly in `index.html`:
- **Privacy Policy Modal:** Edit `<div id="privacy-modal">` section.
- **Terms of Service Modal:** Edit `<div id="terms-modal">` section.
- **Password Recovery Modal:** Edit `<div id="recovery-modal">` section.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic Layout, Form Controls, Accessibility Attributes, Modal Dialogs |
| **CSS3** | Modern Flexbox, Grid, CSS Variables, Glassmorphic Backdrop Blur, Keyframe Animations |
| **JavaScript (ES6+)** | Dynamic DOM Manipulation, Form Validation, Canvas 2D Petal Renderer, Modal Controls |

---

## 👨‍💻 Author

**Created by Deepankar Saini**

- **Instagram:** [@itdeepankar](https://instagram.com/itdeepankar)
- **Project Goal:** Providing clean, modern, and high-quality frontend website templates for developers & creators around the world.

---

<div align="center">

  ### 🌸 ANIME GLASSMORPHIC LOGIN & SIGNUP STYLESHEET Website Template 🌸

  <p><i>Crafted with passion, aesthetic design, and clean code for your next magical web experience!</i></p>

</div>

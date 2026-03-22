<<<<<<< HEAD
# 🌆 Interactive 3D Developer Portfolio

A stunning modern portfolio website inspired by **sebastien-lempens.com** with immersive 3D environments, smooth scroll-driven animations, and beautiful sunset lighting.

## ✨ Features

### Design & Experience
- **Fullscreen Immersive 3D**: Built with Three.js and React Three Fiber
- **Stylized 3D Paris-inspired City Scene**: Dynamic buildings with interactive elements
- **Smooth Scroll-Driven Navigation**: Cinematic camera transitions between sections
- **Beautiful Golden Hour Lighting**: Hand-crafted sunset atmosphere
- **Responsive Design**: Fully optimized for desktop and mobile
- **Dark Theme with Neon Accents**: Modern aesthetic with orange/gold color scheme

### Sections

1. **Hero Section**
   - 3D scooter character riding through the city
   - Display name and professional title
   - Call-to-action buttons
   - Scroll indicator with animation

2. **About Section**
   - Floating glass panels
   - Professional bio and highlights
   - Key skills summary
   - Smooth scroll reveal animations

3. **Projects Section**
   - Interactive 3D buildings representing projects
   - Hover effects and glow transitions
   - Technology stack tags
   - GitHub and live demo links
   - 6 project examples (customizable)

4. **Skills Section**
   - 3D floating skill objects
   - Rotating geometric shapes for each technology
   - Skill proficiency bars
   - 14 core technologies included
   - Interactive hover effects

5. **Contact Section**
   - Animated contact card
   - Email, LinkedIn, and GitHub links
   - Email signup form
   - Social proof and credits

### Technical Highlights

- **React + Three.js**: Component-based 3D architecture
- **React Three Fiber**: Declarative 3D scene management
- **GSAP**: Smooth camera animations and transitions
- **Framer Motion**: UI animation library
- **High Performance**: Optimized WebGL rendering with LOD
- **Ambient Soundscape**: Optional procedurally generated audio
- **Lazy Loading**: Efficient asset management
- **Mobile Optimized**: Touch-friendly interactions

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Navigate to the project directory** (already at the root):
```bash
cd portfolio
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start the development server**:
```bash
npm run dev
```

4. **Open in browser**:
```
http://localhost:5173
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── 3d/                 # Three.js components
│   │   │   ├── CityScene.jsx       # Main 3D canvas
│   │   │   ├── Buildings.jsx       # Interactive buildings with projects
│   │   │   ├── Character.jsx       # 3D scooter rider
│   │   │   ├── SkillObjects.jsx    # Floating skill objects
│   │   │   ├── Lights.jsx          # Scene lighting setup
│   │   │   ├── Ground.jsx          # City ground & street details
│   │   │   └── ParticleField.jsx   # Ambient particles
│   │   │
│   │   ├── sections/           # Page sections
│   │   │   ├── Hero.jsx            # Landing section
│   │   │   ├── About.jsx           # About me section
│   │   │   ├── Projects.jsx        # Projects showcase
│   │   │   ├── Skills.jsx          # Skills display
│   │   │   └── Contact.jsx         # Contact section
│   │   │
│   │   └── ui/                 # UI components
│   │       ├── Navigation.jsx      # Top navigation
│   │       ├── AudioToggle.jsx     # Sound toggle
│   │       └── LoadingScreen.jsx   # Splash screen
│   │
│   ├── hooks/
│   │   ├── useScrollProgress.js    # Scroll tracking
│   │   ├── useCameraAnimation.js   # Camera control
│   │   └── useAudio.js             # Audio context management
│   │
│   ├── utils/
│   │   └── constants.js        # All portfolio data
│   │
│   ├── App.jsx                 # Main app component
│   ├── index.css               # Global styles
│   └── main.jsx                # Entry point
│
├── public/
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Customization Guide

### Update Your Info
Edit `src/utils/constants.js`:

```javascript
export const PERSONAL = {
  name: 'Your Name',
  title: 'Your Title',
  subtitle: 'Your Subtitle',
  location: 'Your City',
  email: 'your@email.com',
  github: 'https://github.com/yourname',
  linkedin: 'https://linkedin.com/in/yourname',
  bio: 'Your bio here...',
};
```

### Add Your Projects

In the same file, modify the `PROJECTS` array:

```javascript
export const PROJECTS = [
  {
    id: 1,
    icon: '📱',
    name: 'Project Name',
    description: 'Project description',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/user/repo',
    live: 'https://project-live.com',
    color: '#ff6b35',
  },
  // ... more projects
];
```

### Customize Skills

Edit the `SKILLS` array in `constants.js`.

### Change Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --neon-orange: #ff6b35;
  --neon-gold: #ffd700;
  /* ... more variables */
}
```

## 🎮 Interactions

- **Scroll**: Navigate through sections with smooth camera transitions
- **Click 3D Buildings**: View project details
- **Hover**: Buildings glow, skills enliven, buttons respond
- **Audio Toggle**: Bottom-right button plays ambient soundscape
- **Navigation**: Click top nav to jump to sections

## 📦 Build & Deploy

```bash
npm run build
npm run preview
```

## 📱 Mobile Optimized

- Fully responsive design
- Touch-friendly interactions
- Optimized 3D performance on mobile devices

## 🎵 Ambient Audio

Toggle optional procedurally generated ambient soundscape with the button in the bottom-right corner.

## 🌟 Made with

- **React** - UI framework
- **Three.js** - 3D graphics
- **@react-three/fiber** - React Three.js renderer
- **@react-three/drei** - Useful helpers
- **GSAP** - Animations
- **Framer Motion** - UI animations
- **Vite** - Build tool

## 📄 License

Free to use for personal portfolios.

---

**Made with 💜 using React, Three.js, and GSAP**

Happy building! 🚀
=======
# waveportfolio
>>>>>>> 093e65b9f11ea0a19098de6db72568e625bcd9e0

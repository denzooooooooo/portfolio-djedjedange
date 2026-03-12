# Portfolio - Djedjed Ange Marhial Alan

## 1. Project Overview

- **Project Name**: Portfolio Djedjed Ange
- **Type**: Single-page portfolio website
- **Core Functionality**: Showcase web/mobile development and network security services with an interactive pricing calculator contact form
- **Target Users**: Potential clients seeking web development, mobile app, or security services in Ivory Coast and beyond

---

## 2. UI/UX Specification

### Layout Structure

**Sections (in order):**
1. **Navigation** - Fixed top navbar with smooth scroll links
2. **Hero** - Full viewport animated intro with name and title
3. **About** - Personal introduction with animated elements
4. **Services** - Three cards: Web Development, Mobile Development, Network Security
5. **Experience** - Timeline of work at CarrePremium and Tikeo
6. **Projects** - Gallery of completed and upcoming projects
7. **Pricing Calculator** - Interactive form with auto-calculated price
8. **Contact** - Additional contact methods
9. **Footer** - Social links and copyright

**Responsive Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Visual Design

**Color Palette (Black & White Theme Background: `#0):**
- Primarya0a0a` (near black)
- Secondary Background: `#141414` (dark gray)
- Card Background: `#1a1a1a` (charcoal)
- Primary Text: `#ffffff` (white)
- Secondary Text: `#a0a0a0` (light gray)
- Accent: `#ffffff` (white for highlights)
- Border: `#2a2a2a` (subtle gray)

**Typography:**
- Headings: 'Playfair Display', serif (elegant, distinctive)
- Body: 'Outfit', sans-serif (modern, readable)
- Hero Title: 5rem (desktop), 2.5rem (mobile)
- Section Titles: 3rem (desktop), 2rem (mobile)
- Body Text: 1.1rem
- Small Text: 0.9rem

**Spacing System:**
- Section Padding: 100px vertical (desktop), 60px (mobile)
- Container Max Width: 1200px
- Card Padding: 40px
- Element Gap: 30px

### Visual Effects & Animations

**Core Animations:**
1. **Page Load**: Staggered reveal with fade-up + slide-in from bottom
2. **Scroll Animations**: Elements animate in when entering viewport
3. **Hero Text**: Glitch effect on name, typewriter effect on subtitle
4. **Cards**: 3D tilt effect on hover, glow on hover
5. **Buttons**: Magnetic hover effect, ripple on click
6. **Navigation**: Backdrop blur, slide-down on scroll
7. **Pricing Calculator**: Smooth number transitions, form field animations

**Special Effects:**
- Particle background in hero section
- Gradient text on headings
- Smooth parallax on scroll
- Cursor trail effect
- Loading screen with animated logo

---

## 3. Functionality Specification

### Core Features

**1. Navigation**
- Fixed position with blur backdrop
- Smooth scroll to sections
- Active section indicator
- Mobile hamburger menu with slide-in animation

**2. Hero Section**
- Animated particle background
- Name with glitch/stutter animation
- Title: "Développeur Web & Mobile | Expert Sécurité Réseau"
- Scroll indicator with bounce animation

**3. About Section**
- Brief bio with typing animation
- Skills as animated progress bars
- Profile highlight box

**4. Services Section**
- Three service cards with flip animation
- Icons for each service
- Hover effects with glow

**5. Experience Timeline**
- Vertical timeline with alternating cards
- Companies: CarrePremium, Tikeo
- Animated line drawing on scroll

**6. Projects Gallery**
- Grid layout with hover reveal
- "Coming Soon" badge for upcoming projects
- Filter animation

**7. Pricing Calculator Form**
**Fields:**
- Project Type (select): Site Vitrine, Site E-commerce, Application Web, Application Mobile
- Nombre de pages (number): 1-50
- Design Personnalisé (checkbox)
- Responsive Mobile (checkbox)
- API Integration (checkbox)
- Base de données (checkbox)
- SEO Avancé (checkbox)
- Maintenance 6 mois (checkbox)

**Auto-Calculation Logic:**
- Site Vitrine: 150,000 XOF base
- Site E-commerce: 350,000 XOF base
- Application Web: 500,000 XOF base
- Application Mobile: 700,000 XOF base
- Par page supplémentaire: +25,000 XOF
- Design Personnalisé: +100,000 XOF
- Responsive: +50,000 XOF
- API: +75,000 XOF
- Base de données: +80,000 XOF
- SEO: +60,000 XOF
- Maintenance: +100,000 XOF

**Client Counter-Proposal:**
- Input field for proposed price
- Message display area

**8. Contact Methods**
- Email with copy-to-clipboard
- Phone number
- Location: Ivory Coast
- Social links (LinkedIn, GitHub, Twitter)

### User Interactions
- All buttons have hover/active states
- Form validates before submission
- Smooth scroll between sections
- Keyboard navigation support
- Loading states on form submit

---

## 4. Acceptance Criteria

### Visual Checkpoints
- [ ] Black and white theme consistently applied
- [ ] All animations smooth (60fps)
- [ ] Responsive on all devices
- [ ] All text readable and properly sized
- [ ] No visual glitches or overflow

### Functional Checkpoints
- [ ] Navigation smooth scrolls to correct sections
- [ ] Pricing calculator correctly calculates total
- [ ] Counter-proposal field is functional
- [ ] All external links work
- [ ] Form shows success message on submit
- [ ] Mobile menu opens/closes correctly
- [ ] Animations trigger on scroll

### Performance
- [ ] Page loads within 3 seconds
- [ ] No console errors
- [ ] Images optimized
- [ ] Smooth animations without lag

---

## 5. Technical Stack

- **HTML5**: Semantic structure
- **CSS3**: Custom properties, animations, flexbox/grid
- **JavaScript**: Vanilla JS for interactions, pricing calculator
- **Fonts**: Google Fonts (Playfair Display, Outfit)
- **Icons**: Inline SVG icons
- **No external frameworks** - Pure custom code for maximum control

---

## 6. File Structure

```
/portfolio
├── index.html      (Main HTML file)
├── styles.css      (All styles)
├── script.js       (All interactions)
└── SPEC.md         (This specification)
```


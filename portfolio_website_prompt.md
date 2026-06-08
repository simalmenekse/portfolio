# AI Prompt — Personal Portfolio & CV Website for Ayşe Şimal Menekşe

> Copy everything inside the prompt block below into your AI coding tool (Claude, v0, Cursor, Lovable, etc.). Edit the bracketed `[ ]` choices to taste.

---

## THE PROMPT

You are a senior front-end engineer and product designer. Build a polished, interactive, single-page personal portfolio / CV website for **Ayşe Şimal Menekşe**, a Computer Science M.Sc. student and AI/Software Engineer. The site is for job applications, so it must look professional, modern, and recruiter-ready.

### Tech stack
- **[React + Vite + Tailwind CSS]** (swap for plain HTML/CSS/JS or Next.js if you prefer).
- **Framer Motion** for scroll and hover animations (or CSS transitions if no React).
- Single-page app with smooth-scroll anchor navigation. Fully responsive (mobile-first), works down to 360px width.
- Clean, well-commented, production-quality code. No placeholder lorem ipsum — use the real content provided below.

### Visual direction
Dark, premium, "developer portfolio" aesthetic — inspired by sleek dark landing pages with a single glowing accent color, glassmorphism cards, and generous spacing.
- **Background:** near-black (`#0A0A0F` to `#111118`), with subtle radial gradient glows behind hero and section headers.
- **Accent color:** **[deep violet `#7C3AED` / electric purple]** used for buttons, links, glows, active nav, and section eyebrow labels. (Alternative: warm amber `#F97316` for an orange-glow look.)
- **Cards:** dark translucent panels (`rgba(255,255,255,0.04)`) with `1px` subtle border (`rgba(255,255,255,0.08)`), soft rounded corners (16–20px), and a faint inner glow on hover.
- **Typography:** modern geometric sans (e.g. `Inter`, `Space Grotesk`, or `Sora`). Large bold display headings, comfortable body line-height, muted gray body text (`#A1A1AA`).
- Section headers use a small uppercase accent-colored "eyebrow" label above a large title.
- Subtle grain/noise texture or faint grid lines optional for depth.

### Interactions & polish
- Sticky, blurred (`backdrop-blur`) top nav that highlights the active section on scroll.
- Fade-up / stagger reveal animations as each section enters the viewport.
- Hover states on all cards, buttons, and links (lift, glow, or border highlight).
- Smooth-scroll to anchors; a "back to top" affordance.
- Animated number counters for the stats section.
- Respect `prefers-reduced-motion`. Good color contrast and semantic HTML for accessibility.

### Page structure & content

**1. Navbar**
Logo/monogram "ASM" on the left. Links: Home · About · Experience · Projects · Skills · Contact. A primary accent button on the right: **"Let's Talk"** (scrolls to contact). Mobile: hamburger menu.

**2. Hero**
- Eyebrow: "Hi, I'm Ayşe Şimal Menekşe"
- Headline (two lines, accent on second): **"AI & Software Engineer"** / **"building intelligent systems"**
- Subtext: "M.Sc. Computer Science student at the University of Freiburg, focused on machine learning, deep learning, and applied AI. I build everything from embedded systems to LLM-powered VR applications."
- Two buttons: **"View My Work"** (scrolls to Projects) and **"Download CV"** (links to `cv.pdf` — leave a placeholder href).
- Social icons: GitHub (`https://github.com/simalmenekse`), LinkedIn (`https://linkedin.com/in/simalmenekse`), Email (`aysesimalmenekse@gmail.com`).
- Right side: a circular or rounded-square framed profile photo placeholder with a soft accent glow ring. (Leave an `img` placeholder I can swap.)

**3. Stats strip** (animated counters)
- `3.55` — Bachelor's GPA
- `2` — Engineering Internships
- `1` — IEEE Publication
- `7.5` — IELTS Academic Score

**4. About Me**
Short eyebrow "About Me", then 2–3 short paragraphs:
"I'm a Computer Engineering graduate (Çankaya University, GPA 3.55) currently pursuing an M.Sc. in Computer Science at the University of Freiburg, Germany, with relevant coursework in Machine Learning, Deep Learning, Reinforcement Learning, and Computer Graphics. I completed an Erasmus exchange in Computer Science at the University of Vaasa, Finland. I've worked as a software engineering intern at ASELSAN and TÜBİTAK SAGE, and I led the development of an AI-powered VR training platform that became a published IEEE paper. I'm based in Freiburg with a German work permit and open to roles in AI/ML and software engineering."

**5. Experience & Education** (two-column timeline layout, like a resume)

*Experience cards:*
- **Software Engineer Intern — ASELSAN**, Ankara, Türkiye · 07/2024 – 08/2024. Built desktop application features using the Qt Framework in C++; collaborated on software testing and debugging.
- **Embedded Software Engineer Intern — TÜBİTAK SAGE**, Ankara, Türkiye · 07/2023 – 08/2023. Developed embedded software components in C# and C++ for hardware systems; implemented UART communication protocols for serial data transmission.

*Education cards:*
- **M.Sc. Computer Science — Albert-Ludwigs-Universität Freiburg**, Germany · 10/2025 – Present. Coursework: Machine Learning, Foundations of Deep Learning, Reinforcement Learning, Simulation in Computer Graphics.
- **Bachelor's, Computer Science (Erasmus) — University of Vaasa**, Finland · 08/2023 – 12/2023.
- **B.Sc. Computer Engineering — Çankaya University**, Ankara, Türkiye · 10/2021 – 06/2025. GPA 3.55.

**6. Featured Projects & Publications** (cards in a grid, each with title, description, tags, and a link button)
- **VRKitchen — AI-Guided VR Cooking & Risk Management** *(Published — IEEE)*. An AI-driven VR training system (Meta Quest 3) integrating Unity and AWS Bedrock LLMs to deliver real-time procedural guidance and risk handling. Evaluated with 14 participants. Published at the 2026 5th International Informatics and Software Engineering Conference (IISEC), IEEE. Tags: Unity · AWS Bedrock · LLMs · VR · C#. Link: `https://github.com/CankayaUniversity/ceng-407-408-2024-2025-VRKitchen-Risk-Management-Platform-for-Gastronomy-Practitioners`. Add a small "Published Paper" badge.
- **Song Mood Prediction — Applied Machine Learning**. A classification model predicting song mood from audio features, built in Python with scikit-learn during the Erasmus semester at University of Vaasa. Tags: Python · scikit-learn · ML.

**7. Skills** (grouped category cards with pill/tag chips)
- **Languages & Core:** C · C# · C++ · Python · SQL · OOP · Git
- **AI / ML:** Machine Learning · Deep Learning · Reinforcement Learning · Computer Vision · LLMs · RAG Systems · Keras · Data Science · Data Analytics
- **Tools & Platforms:** Unity · AWS · Qt · MongoDB · Databases
- **Spoken Languages:** English (C2) · German (B1) · Turkish (Native)

**8. Certifications & Awards** (compact list or small cards)
- IBM Applied AI Specialization — IBM / Coursera
- IBM Data Science Specialization — IBM / Coursera
- Google Advanced Data Analytics Specialization — Google / Coursera
- IELTS Academic — Score 7.5
- Member: IEEE Ankara · Google Developer Student Clubs Ankara

**9. Contact**
Eyebrow "Get in touch", heading **"Let's work together"**, short line inviting recruiters to reach out. Show: Email `aysesimalmenekse@gmail.com`, Phone `(+49) 15510880066`, Location `Freiburg im Breisgau, Germany`. Include a simple contact form (name, email, message) — wire it to `mailto:` or leave a clearly-marked submit handler stub. Social links repeated.

**10. Footer**
Monogram, copyright "© 2026 Ayşe Şimal Menekşe", and the nav/social links.

### Deliverable
Output the complete, runnable code organized into clear files/components. Include setup instructions to run it locally. Make it look genuinely impressive — this is the first thing a recruiter sees.

---

## TIPS FOR USING THIS PROMPT
- **Pick one accent color** before pasting — purple reads "modern dev", amber reads "premium/warm". Don't leave both.
- If your tool has a small context window (e.g. v0), you can paste it in two passes: first the design system + structure, then ask it to fill each section.
- Swap the `[React + Vite + Tailwind]` line for whatever stack you'll actually deploy on (GitHub Pages → plain HTML/CSS/JS is simplest; Vercel → Next.js).
- After the first generation, iterate with small follow-ups: "make the hero glow stronger", "tighten mobile spacing", "add a dark/light toggle".
- Replace the photo and `cv.pdf` placeholders with your real assets before deploying.

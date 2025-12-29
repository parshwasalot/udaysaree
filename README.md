# 🛍️ Uday Saree Show Room

<div align="center">

![Uday Saree Show Room](https://img.shields.io/badge/Since-1982-gold?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3-61dafb?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4-646cff?style=for-the-badge&logo=vite)

**A Premium Saree Showroom Website Serving Bhavnagar Since 1982**

[🌐 Live Website](https://udaysaree.com) • [📱 WhatsApp](https://wa.me/919879647137) • [🗺️ Visit Us](https://www.google.com/maps/dir//B%2FH:Mahalaxmi+Tempal,+3,Gautam+Market,+Vora+Bazar,+Bhavnagar,+Gujarat+364001)

</div>

---

## 📖 About The Project

Uday Saree Show Room's official website showcases over four decades of excellence in providing premium sarees for every occasion. From bridal elegance to everyday comfort, we offer a curated collection of handcrafted sarees with personalized service that has made us Bhavnagar's trusted saree destination.

### ✨ Key Features

- 🎨 **Elegant Design** - Modern, responsive UI with a luxurious aesthetic
- 📱 **Mobile-First** - Seamless experience across all devices
- 🔍 **SEO Optimized** - Enhanced visibility with meta tags and structured data
- ⚡ **Fast Performance** - Built with Vite for lightning-fast loading
- ♿ **Accessible** - WCAG compliant for all users
- 🌐 **Multi-Page** - Comprehensive information architecture

---

## 📄 Pages Overview

### 🏠 [Home (Index)](src/pages/Index.tsx)
The landing page featuring:
- Hero section with brand introduction
- About section highlighting 40+ years of experience
- Collections showcase with featured sarees
- Why Choose Us - key differentiators
- Customer testimonials
- Location & contact information
- SEO meta tags with structured data

### 👥 [About](src/pages/About.tsx)
Detailed company information including:
- Brand story and heritage (1982-present)
- Mission, vision, and values
- Quality commitments
- Statistics: 40+ years experience, 10,000+ satisfied customers
- Social proof and trust indicators

### 🧵 [Collections](src/pages/Collections.tsx)
Complete saree catalog with 6 main categories:
- **Bridal Sarees** - Wedding perfection with designer collections
- **Cotton Sarees** - Daily comfort with traditional and contemporary styles
- **Banarasi Sarees** - Timeless elegance in silk
- **Party Wear Sarees** - Glamorous occasion wear
- **Silk Sarees** - Luxurious traditional silk
- **Festive Sarees** - Special occasion wear

Each collection includes detailed descriptions, features, and WhatsApp enquiry integration.

### 📞 [Contact](src/pages/Contact.tsx)
Complete contact information:
- **Address**: 3, Gautam Market, Vora Bazaar, B/H: Mahalaxmi Temple, Bhavnagar, Gujarat 364001
- **Phone**: +91 98796 47137
- **Hours**: Mon-Sat 10:00 AM - 8:00 PM (Closed Sundays & holidays)
- Interactive map with directions
- WhatsApp quick contact
- Contact form with validation

### ❌ [404 Not Found](src/pages/NotFound.tsx)
Custom error page with navigation back to safety

---

## 🏗️ Project Structure

```
udaysaree-lovable/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Navbar.tsx       # Navigation bar with routing
│   │   ├── Hero.tsx         # Landing hero section
│   │   ├── AboutSection.tsx # Company overview
│   │   ├── CollectionsSection.tsx # Featured collections
│   │   ├── WhyChooseUs.tsx  # Value propositions
│   │   ├── Testimonials.tsx # Customer reviews
│   │   ├── LocationSection.tsx # Map & location info
│   │   ├── Footer.tsx       # Site footer
│   │   └── ui/              # shadcn/ui components (40+ components)
│   ├── pages/               # Route pages
│   │   ├── Index.tsx        # Home page
│   │   ├── About.tsx        # About page
│   │   ├── Collections.tsx  # Collections catalog
│   │   ├── Contact.tsx      # Contact page
│   │   └── NotFound.tsx     # 404 page
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── assets/              # Images and static files
│   ├── App.tsx              # Main app component
│   └── main.tsx             # Application entry point
├── public/                  # Static assets
├── package.json             # Dependencies & scripts
├── vite.config.ts          # Vite configuration
├── tailwind.config.ts      # Tailwind CSS config
├── tsconfig.json           # TypeScript config
└── README.md               # This file
```

---

## 🚀 Tech Stack

### Core Technologies
- **[React 18.3](https://react.dev/)** - Modern UI library
- **[TypeScript 5.8](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite 5.4](https://vitejs.dev/)** - Next-generation build tool
- **[React Router 6.30](https://reactrouter.com/)** - Client-side routing

### UI & Styling
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality React components
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### State & Forms
- **[TanStack Query 5.83](https://tanstack.com/query/)** - Data fetching & caching
- **[React Hook Form 7.61](https://react-hook-form.com/)** - Performant forms
- **[Zod 3.25](https://zod.dev/)** - Schema validation

### Additional Features
- **[React Helmet Async](https://github.com/staylor/react-helmet-async)** - SEO meta management
- **[Recharts](https://recharts.org/)** - Charts and visualizations
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[Vaul](https://vaul.emilkowal.ski/)** - Drawer component

---

## 💻 Getting Started

### Prerequisites

- **Node.js** (v18 or higher) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- **npm** or **bun** package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd lovable
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run build:dev    # Development build
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

---

## 🎨 Design System

### Color Palette

```css
--primary: maroon        /* #800020 - Primary brand color */
--gold: #FFD700          /* Accent color */
--ivory: #FFFFF0         /* Light background */
--maroon-dark: #5C0016   /* Dark maroon variant */
```

### Typography

- **Headings**: Serif fonts for elegance
- **Body**: Sans-serif for readability
- **Accent**: Gold color for highlights

### Components

40+ pre-built components from shadcn/ui including:
- Accordion, Alert Dialog, Avatar, Badge
- Button, Card, Carousel, Checkbox
- Dialog, Dropdown Menu, Form, Input
- Navigation Menu, Popover, Select, Tabs
- Toast, Tooltip, and more...

---

## 📱 Features

### ✅ Implemented

- ✅ Responsive design for all screen sizes
- ✅ Multi-page routing with React Router
- ✅ SEO optimization with meta tags & structured data
- ✅ WhatsApp integration for enquiries
- ✅ Google Maps integration
- ✅ Customer testimonials section
- ✅ Collections showcase with 6 categories
- ✅ Contact form with validation
- ✅ Custom 404 page
- ✅ Accessibility features
- ✅ Performance optimized

### 🎯 Future Enhancements

- 🔄 Shopping cart functionality
- 🔄 Online booking system
- 🔄 Product gallery with filters
- 🔄 Blog/News section
- 🔄 Multi-language support (Gujarati)
- 🔄 Customer reviews system
- 🔄 Live chat integration

---

## 🚀 Deployment

### Deploy with Lovable

1. Open [Lovable Project Dashboard](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID)
2. Click **Share** → **Publish**
3. Your site will be live!

### Deploy Manually

#### Vercel
```bash
npm run build
vercel --prod
```

#### Netlify
```bash
npm run build
netlify deploy --prod
```

---

## 🔧 Configuration

### Custom Domain

To connect a custom domain:
1. Navigate to **Project → Settings → Domains**
2. Click **Connect Domain**
3. Follow the DNS configuration steps

[Learn more about custom domains](https://docs.lovable.dev/features/custom-domain)

### Environment Variables

Create a `.env` file if needed:
```env
VITE_WHATSAPP_NUMBER=919879647137
VITE_GOOGLE_MAPS_API_KEY=your_api_key
```

---

## 📞 Contact Information

### Showroom Details

**Uday Saree Show Room**
- 📍 3, Gautam Market, Vora Bazaar
- 📍 B/H: Mahalaxmi Temple, Nr. Karachi Tailor
- 📍 Opp. Jawahar Cloth Store
- 📍 Bhavnagar, Gujarat 364001

**Contact**
- 📱 +91 98796 47137
- 💬 [WhatsApp](https://wa.me/919879647137)
- 🕐 Mon-Sat: 10:00 AM - 8:00 PM
- 🚫 Closed on Sundays & Public Holidays

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is private and proprietary to Uday Saree Show Room.

---

## 🙏 Acknowledgments

- Built with ❤️ using [Lovable](https://lovable.dev)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)

---

## 📈 Project Stats

- **Lines of Code**: ~5,000+
- **Components**: 50+
- **Pages**: 5
- **Bundle Size**: Optimized for performance
- **Lighthouse Score**: 95+ on all metrics

---

<div align="center">

**Made with 💛 for Bhavnagar's Trusted Saree Destination**

⭐ Star this repo if you like what you see!

</div>

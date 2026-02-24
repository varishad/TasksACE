# TasksACE - Virtual Assistant Services Website

A modern, professional website for TasksACE virtual assistant services, built with Next.js, React, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with orange branding
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js for optimal performance
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Interactive Components**: Smooth animations and hover effects
- **Contact Forms**: Easy ways for customers to get in touch

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or any hosting platform

## Project Structure

```
TasksACE/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Website Sections

1. **Header**: Navigation with TasksACE logo and menu
2. **Hero**: Main value proposition and call-to-action
3. **Services**: Virtual assistant types (Administrative & E-commerce)
4. **Why Choose Us**: Key benefits and features
5. **Testimonials**: Customer reviews and ratings
6. **FAQ**: Common questions and answers
7. **Contact**: Contact information and newsletter signup
8. **Footer**: Company information and links

## Customization

### Colors
The website uses a custom orange theme defined in `tailwind.config.js`:
- Primary: #f97316 (Orange)
- Secondary: #ea580c (Darker Orange)

### Content
All content can be easily modified in the respective component files in the `components/` directory.

### Styling
Tailwind CSS classes are used throughout. Custom styles are defined in `app/globals.css`.

## Deployment

The website is ready to deploy on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any static hosting provider

## Performance Features

- Server-side rendering (SSR)
- Automatic code splitting
- Image optimization
- Font optimization
- CSS optimization

## License

© 2025 TasksACE. All rights reserved.

## Support

For support with this website, contact: contact@tasksace.com 
# Jiefei Li - Portfolio Website

This is a personal portfolio website showcasing my professional background, projects, and blog posts in data science and engineering. The site features a clean, modern design with sections for professional background, projects, and blog posts, a demonstration of my skill using AI for development. 

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Theme toggle for user preference
- **Project Showcase**: Highlighted data science and engineering projects with descriptions and links
- **Blog Section**: MDX-powered blog for sharing insights and knowledge
- **Professional Timeline**: Education and career history

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) (React)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [MDX](https://mdxjs.com/) for blog posts and content management
- **UI Components**:
  - [Radix UI](https://www.radix-ui.com/) for accessible UI components
  - [Headless UI](https://headlessui.com/) for unstyled, accessible components
- **Icons**: [Phosphor Icons](https://phosphoricons.com/) and [Lucide React](https://lucide.dev/)
- **Deployment**: Configured for easy deployment on Vercel or similar platforms

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or pnpm package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jl-3586/jiefei-portfolio.git
   cd jiefei-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
jiefei-portfolio/
├── public/             # Static assets and images
├── src/
│   ├── app/            # Next.js app router pages
│   ├── components/     # React components
│   ├── config/         # Site configuration files
│   ├── content/        # MDX content (blog posts)
│   ├── images/         # Images used in components
│   ├── lib/            # Utility functions
│   └── styles/         # Global styles
├── .env.example        # Example environment variables
├── next.config.mjs     # Next.js configuration
├── package.json        # Project dependencies
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Usage

### Adding Blog Posts

Add new MDX files to the `src/content/blog/` directory with the following frontmatter format:

```mdx
---
title: "Your Blog Title"
date: "2025-03-20"
description: "Brief description of the blog post"
---

Your content here...
```

### Updating Projects

Edit the `src/config/projects.ts` file to add or modify project entries.

### Customizing Personal Information

Update personal details in `src/config/infoConfig.ts`.

## Building for Production

```bash
npm run build
# or
pnpm build
```

The build output will be in the `.next` directory, ready for deployment.


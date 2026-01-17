# Customization Guide for Mitchell Lamper's Portfolio

This guide will help you update and maintain your portfolio website.

## Your Website Includes

### Personalized Content
- **Name**: Mitchell Lamper
- **Titles**: Machine Learning Engineer • Senior Prompt Engineer • AI Consultant
- **Location**: New York, NY
- **Email**: lamper.mit@gmail.com
- **Phone**: (716) 397-2757
- **LinkedIn**: Updated with your profile

### Sections
1. **Hero** - Landing page with your name and titles
2. **About** - Your background, experience, and 6 skill categories
3. **Projects** - 6 real projects from your resume (Kroll, Mood Magic, Outlier, Wand, Eastern University)
4. **Blog** - 6 article topics based on your expertise
5. **Contact** - Form with your actual contact information

## Quick Edits

### Update Your LinkedIn URL
File: [app/components/Contact.tsx](app/components/Contact.tsx:109)
```tsx
href="https://www.linkedin.com/in/mitchell-lamper"
```
Change to your actual LinkedIn profile URL.

### Add More Projects
File: [app/components/Projects.tsx](app/components/Projects.tsx:4)

Add a new project to the `projects` array:
```tsx
{
  title: 'Your Project Name',
  description: 'Detailed description of what you built and achieved.',
  tech: ['Python', 'PyTorch', 'etc'],
  gradient: 'from-purple-600 to-blue-600',
  link: '#',  // Or link to GitHub/demo
  company: 'Company Name'
}
```

### Update Skills
File: [app/components/About.tsx](app/components/About.tsx:4)

Modify the `skills` array to add/remove skills:
```tsx
{ category: 'Your Category', items: ['Skill 1', 'Skill 2', 'Skill 3'] }
```

### Add Blog Posts
File: [app/components/Blog.tsx](app/components/Blog.tsx:4)

Add articles to showcase your expertise:
```tsx
{
  title: 'Article Title',
  excerpt: 'Brief description of what the article covers.',
  date: 'Jan 15, 2026',
  category: 'Category Name',
  readTime: '8 min read',
  link: '#'  // Link to your blog post when published
}
```

### Change Color Scheme
File: [app/globals.css](app/globals.css:3)

Modify the color variables:
```css
:root {
  --accent-purple: #a855f7;  /* Change purple shade */
  --accent-pink: #ec4899;    /* Change pink shade */
  --accent-blue: #3b82f6;    /* Change blue shade */
  --accent-orange: #f97316;  /* Change orange shade */
}
```

## Adding Real Blog Posts

When you want to add actual blog posts:

1. Create a `app/blog` directory
2. Add markdown files or create blog post pages
3. Update the links in [Blog.tsx](app/components/Blog.tsx) to point to real posts

## Contact Form Integration

The contact form currently simulates submission. To make it functional:

### Option 1: Use a Form Service (Easiest)
- **Formspree**: Add your endpoint
- **EmailJS**: Free email sending
- **Netlify Forms**: If deploying to Netlify

### Option 2: Create API Route
File: `app/api/contact/route.ts`
```tsx
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  // Send email using nodemailer, SendGrid, etc.
  return NextResponse.json({ success: true });
}
```

Update [Contact.tsx](app/components/Contact.tsx:14) to POST to `/api/contact`

## Deployment Checklist

Before deploying:
- [ ] Update LinkedIn URL
- [ ] Add GitHub profile link (if you want)
- [ ] Connect contact form to real endpoint
- [ ] Replace project links with actual URLs
- [ ] Add Google Analytics (optional)
- [ ] Test on mobile devices
- [ ] Set up custom domain

## Adding Analytics

To track visitors, add Google Analytics:

1. Get tracking ID from Google Analytics
2. Add to [app/layout.tsx](app/layout.tsx)

```tsx
import Script from 'next/script';

// In the return statement
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

## Color Gradient Reference

Your website uses these gradient combinations:
- Purple to Blue: Primary actions
- Pink to Orange: Projects, highlights
- Blue to Purple: Secondary elements
- Orange to Pink: Accent features

All gradients are defined in the component files and can be customized.

## Tips for Maintenance

1. **Keep it updated**: Add new projects as you complete them
2. **Write blog posts**: The blog section is ready for content
3. **Update skills**: Add new technologies as you learn them
4. **Testimonials**: Consider adding a testimonials section
5. **Resume download**: Add a "Download Resume" button

## Next Steps

1. Test the website locally: `npm run dev`
2. Customize the content to your liking
3. Connect the contact form
4. Deploy using Docker to your VPS (see main README)
5. Set up SSL certificate for HTTPS
6. Share your portfolio!

## Need Help?

- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- React Documentation: https://react.dev

---

Built with passion for showcasing your ML/AI expertise! 🚀

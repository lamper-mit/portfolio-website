# Portfolio Website

A bold and creative portfolio website for showcasing machine learning and prompt engineering work. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Hero Section**: Eye-catching landing with gradient animations
- **About Me**: Professional summary with skills showcase
- **Projects**: Portfolio of ML/AI projects with detailed descriptions
- **Blog**: Articles on machine learning and prompt engineering
- **Contact Form**: Interactive form for visitor inquiries
- **Responsive Design**: Mobile-friendly and optimized for all devices
- **Docker Support**: Ready for deployment to any VPS

## Tech Stack

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling with custom theme
- **Docker**: Containerized for easy deployment

## Getting Started

### Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Customization

Edit the following files to personalize your portfolio:

- **[app/components/Hero.tsx](app/components/Hero.tsx)**: Update your name and title
- **[app/components/About.tsx](app/components/About.tsx)**: Add your bio and skills
- **[app/components/Projects.tsx](app/components/Projects.tsx)**: Showcase your projects
- **[app/components/Blog.tsx](app/components/Blog.tsx)**: Add your articles
- **[app/components/Contact.tsx](app/components/Contact.tsx)**: Update social links

## Docker Deployment

### Build Docker Image

```bash
docker build -t portfolio-website .
```

### Run with Docker

```bash
docker run -p 3000:3000 portfolio-website
```

### Run with Docker Compose

```bash
docker-compose up -d
```

## VPS Deployment Guide

### Prerequisites
- VPS with Docker installed (Ubuntu/Debian recommended)
- Domain name (optional but recommended)
- SSH access to your VPS

### Step 1: Prepare Your VPS

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo apt install docker-compose -y

# Add your user to docker group
sudo usermod -aG docker $USER
```

### Step 2: Deploy to VPS

```bash
# Clone or upload your project to VPS
git clone <your-repo-url>
cd portfolio-website

# Build and run with Docker Compose
docker-compose up -d

# Check if it's running
docker-compose ps
```

### Step 3: Set Up Nginx (Optional - for custom domain)

```bash
# Install Nginx
sudo apt install nginx -y

# Create Nginx configuration
sudo nano /etc/nginx/sites-available/portfolio
```

Add this configuration:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Step 4: Set Up SSL (Optional - HTTPS)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## Production Build

To build for production without Docker:

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_CONTACT_EMAIL=your@email.com
```

## Project Structure

```
portfolio-website/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Blog.tsx
│   │   └── Contact.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── Dockerfile
├── docker-compose.yml
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

## Cost Optimization Tips

1. **VPS Providers** (Low Cost):
   - DigitalOcean: $4-6/month
   - Linode: $5/month
   - Vultr: $3.50/month
   - Hetzner: €4/month

2. **Alternative Free Options**:
   - Vercel: Free tier for personal projects
   - Netlify: Free tier available
   - Railway: Free tier with limits

3. **Optimize Docker Image**:
   - The multi-stage build reduces image size
   - Alpine Linux base keeps it minimal
   - Remove unused dependencies

## Maintenance

### Update Dependencies

```bash
npm update
```

### Rebuild Docker Image

```bash
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### View Logs

```bash
docker-compose logs -f
```

## Support

For issues or questions, please open an issue in the repository.

## License

MIT License - feel free to use this for your own portfolio!

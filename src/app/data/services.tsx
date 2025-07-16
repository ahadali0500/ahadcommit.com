export interface ServiceType {
  slug: string;
  number: string;
  title: string;
  description: string;
  details: string;
}

export const services: ServiceType[] = [
  {
    slug: 'full-stack-web-application-development',
    number: '01',
    title: 'Full Stack Web Application Development',
    description: 'Build scalable full-stack apps using React.js, Next.js, Laravel, Node.js, and PHP.',
    details: `
  ## Overview
  I build robust web applications using modern stacks such as React.js, Next.js, Laravel, Node.js, and PHP — from frontend UI to backend API and database logic.
  
  ## Technologies Used
  - React.js, Next.js
  - Node.js, Express.js
  - PHP, Laravel
  - Tailwind CSS, Bootstrap
  - MySQL, MongoDB
  
  ## Use Cases
  - SaaS platforms
  - Admin dashboards
  - Internal B2B tools
  
  ## Benefits
  - Modular architecture
  - Scalable and secure
  - Optimized for performance and SEO
      `,
  },
  {
    slug: 'custom-admin-dashboards-cms',
    number: '02',
    title: 'Custom Admin Dashboards & CMS',
    description: 'Create admin panels and CMS platforms using Laravel, React, and Bootstrap/Tailwind.',
    details: `
  ## Overview
  I develop customized CMS solutions and admin dashboards that allow clients to easily manage website content, users, and functionality.
  
  ## Technologies Used
  - Laravel, React.js
  - Bootstrap, Tailwind CSS
  - MySQL, MongoDB
  
  ## Use Cases
  - Corporate content systems
  - Educational dashboards
  - Admin panels for web apps
  
  ## Benefits
  - Fully customizable
  - Role-based access
  - Mobile-friendly UI
      `,
  },
  {
    slug: 'api-development-and-integration',
    number: '03',
    title: 'API Development & 3rd-Party Integration',
    description: 'Develop REST APIs and integrate services like Stripe, PayPal, WhatsApp, and Google APIs.',
    details: `
  ## Overview
  I create secure RESTful APIs and integrate third-party services to extend the functionality of your application.
  
  ## Technologies Used
  - Laravel API Resources
  - Express.js, Node.js
  - Stripe, PayPal, Google APIs
  
  ## Use Cases
  - Payment gateway integration
  - WhatsApp and email API
  - CRM and analytics sync
  
  ## Benefits
  - Secure authentication
  - Easy maintenance
  - Clean documentation
      `,
  },
  {
    slug: 'mobile-responsive-frontend-development',
    number: '04',
    title: 'Mobile-Responsive Frontend Development',
    description: 'Build responsive user interfaces with React.js, Next.js, Tailwind CSS, and Bootstrap.',
    details: `
  ## Overview
  I craft mobile-first interfaces that are responsive across all devices and screen sizes using modern frontend tools.
  
  ## Technologies Used
  - React.js, Next.js
  - Tailwind CSS, Bootstrap
  
  ## Use Cases
  - Marketing websites
  - Landing pages
  - Frontend for web apps
  
  ## Benefits
  - Fast load time
  - Intuitive UX
  - SEO-ready layouts
      `,
  },
  {
    slug: 'real-time-applications',
    number: '05',
    title: 'Real-Time Applications (Chat, Notifications)',
    description: 'Develop real-time apps like chat, alerts, or collaboration tools using WebSockets & Socket.io.',
    details: `
  ## Overview
  Build real-time features such as live chat, notifications, or collaborative tools using modern JS technologies.
  
  ## Technologies Used
  - Socket.io, WebSockets
  - Node.js, Express.js
  
  ## Use Cases
  - Chat support systems
  - Team collaboration tools
  - Live content updates
  
  ## Benefits
  - Instant data sync
  - Seamless communication
  - Efficient socket handling
      `,
  },
  {
    slug: 'cross-platform-web-apps-pwa',
    number: '06',
    title: 'Cross-Platform Web Apps (PWA)',
    description: 'Create Progressive Web Apps (PWAs) with Next.js and service workers for offline support.',
    details: `
  ## Overview
  I develop web apps that function like native apps — with offline support, caching, and installability.
  
  ## Technologies Used
  - Next.js
  - Service Workers
  - IndexedDB, Cache API
  
  ## Use Cases
  - To-do apps
  - News readers
  - Budget trackers
  
  ## Benefits
  - Installable on mobile
  - Works offline
  - Fast and reliable
      `,
  },
  {
    slug: 'devops-ci-cd-automation',
    number: '07',
    title: 'DevOps & CI/CD Automation',
    description: 'Automate deployment pipelines using GitHub Actions, Docker, and NGINX.',
    details: `
  ## Overview
  Set up end-to-end CI/CD pipelines for seamless development and production deployment.
  
  ## Technologies Used
  - GitHub Actions
  - Docker, Docker Compose
  - NGINX
  - PM2 for Node.js apps
  
  ## Use Cases
  - Zero-downtime deployments
  - Code auto-testing and build pipelines
  
  ## Benefits
  - Faster delivery
  - Fewer human errors
  - Full version control
      `,
  },
  {
    slug: 'server-and-cloud-deployment',
    number: '08',
    title: 'Server & Cloud Deployment (Linux, VPS, AWS)',
    description: 'Deploy apps to VPS, EC2, Vercel, or DigitalOcean with domain, SSL, and firewall setup.',
    details: `
  ## Overview
  I handle full server setup and production deployment including SSL, NGINX, and cloud service configuration.
  
  ## Technologies Used
  - AWS EC2
  - Vercel, DigitalOcean
  - Linux VPS
  - Certbot (SSL)
  
  ## Use Cases
  - Deploying Laravel/Node apps
  - Managing firewalls
  - Domain setup & redirection
  
  ## Benefits
  - Secure environment
  - Stable hosting
  - Scalable infrastructure
      `,
  },
  {
    slug: 'database-design-and-optimization',
    number: '09',
    title: 'Database Design & Optimization',
    description: 'Design and optimize MySQL, PostgreSQL, and MongoDB schemas for high-performance apps.',
    details: `
  ## Overview
  Plan, design, and optimize databases to ensure data is well-structured, fast, and scalable.
  
  ## Technologies Used
  - MySQL
  - PostgreSQL
  - MongoDB
  
  ## Use Cases
  - Admin dashboards
  - User management systems
  - Analytics/reporting tools
  
  ## Benefits
  - Fast queries
  - Normalized schema
  - Secure and scalable
      `,
  },
];

# SkillHive - Peer Learning Platform

A comprehensive e-learning platform where students and professionals create and share micro-courses, fostering peer-to-peer learning and skill development.

## 🚀 Features

- **User Authentication** - JWT-based auth with Google OAuth
- **Course Management** - Create, edit, and manage courses
- **Video Streaming** - Secure video content delivery
- **Progress Tracking** - Detailed learning analytics
- **Discussion Forums** - Interactive course discussions
- **Certificates** - Automated certificate generation
- **Payment Integration** - Stripe-powered course purchases
- **Admin Panel** - Content moderation and analytics
- **Real-time Chat** - Live discussions and notifications

## 🏗️ Architecture

\`\`\`
skillhive-platform/
├── frontend/          # Next.js React application
├── backend/           # Node.js Express API
├── database/          # PostgreSQL schema and seeds
├── shared/            # Shared TypeScript types
└── docker-compose.yml # Development environment
\`\`\`

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Modern UI components
- **React Query** - Server state management
- **Socket.io Client** - Real-time features

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **Prisma** - Database ORM
- **PostgreSQL** - Primary database
- **JWT** - Authentication
- **Socket.io** - Real-time communication
- **Cloudinary** - Media storage
- **Stripe** - Payment processing

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Docker (optional)

### Development Setup

1. **Clone the repository**
\`\`\`bash
git clone <repository-url>
cd skillhive-platform
\`\`\`

2. **Environment Setup**
\`\`\`bash
# Copy environment files
cp frontend/.env.example frontend/.env.local
cp backend/.env.example backend/.env
\`\`\`

3. **Database Setup**
\`\`\`bash
# Start PostgreSQL (or use Docker)
docker-compose up -d postgres

# Run migrations
cd backend
npm install
npx prisma migrate dev
npx prisma db seed
\`\`\`

4. **Start Development Servers**
\`\`\`bash
# Terminal 1 - Backend
cd backend
npm install
npm run dev

# Terminal 2 - Frontend
cd frontend
npm install
npm run dev
\`\`\`

5. **Access the Application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Database: localhost:5432

### Docker Development

\`\`\`bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
\`\`\`

## 📁 Project Structure

### Frontend Structure
\`\`\`
frontend/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # Reusable UI components
│   ├── lib/                 # Utilities and configurations
│   ├── hooks/               # Custom React hooks
│   ├── context/             # React context providers
│   └── types/               # TypeScript type definitions
├── public/                  # Static assets
└── package.json
\`\`\`

### Backend Structure
\`\`\`
backend/
├── src/
│   ├── controllers/         # Route handlers
│   ├── middleware/          # Express middleware
│   ├── routes/              # API routes
│   ├── services/            # Business logic
│   ├── utils/               # Helper functions
│   ├── config/              # Configuration files
│   └── types/               # TypeScript types
├── prisma/                  # Database schema and migrations
└── package.json
\`\`\`

## 🔧 Configuration

### Environment Variables

#### Frontend (.env.local)
\`\`\`env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_SOCKET_URL=http://localhost:5000
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
\`\`\`

#### Backend (.env)
\`\`\`env
DATABASE_URL=postgresql://user:password@localhost:5432/skillhive
JWT_SECRET=your-jwt-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
STRIPE_SECRET_KEY=sk_test_...
CLOUDINARY_URL=cloudinary://...
\`\`\`

## 🧪 Testing

\`\`\`bash
# Frontend tests
cd frontend
npm run test

# Backend tests
cd backend
npm run test

# E2E tests
npm run test:e2e
\`\`\`

## 🚀 Deployment

### Production Build

\`\`\`bash
# Build frontend
cd frontend
npm run build

# Build backend
cd backend
npm run build
\`\`\`

### Docker Production

\`\`\`bash
# Build production images
docker-compose -f docker-compose.prod.yml build

# Deploy
docker-compose -f docker-compose.prod.yml up -d
\`\`\`

## 📊 API Documentation

API documentation is available at `/api/docs` when running the backend server.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

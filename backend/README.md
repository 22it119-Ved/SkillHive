# SkillHive Backend

## Setup Instructions

### 1. Environment Variables
Create a `.env` file in the backend directory with the following variables:

```env
MONGODB_URI=mongodb://localhost:27017/skillhive
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development
```

### 2. Database Setup
Make sure MongoDB is running on your system. You can use:
- Local MongoDB installation
- MongoDB Atlas (cloud)
- Docker: `docker run -d -p 27017:27017 --name mongodb mongo:latest`

### 3. Install Dependencies
```bash
npm install
```

### 4. Start Development Server
```bash
npm run dev
```

The server will start on port 5000.

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user (student/faculty)
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user info

### Request/Response Examples

#### Signup
```json
POST /api/auth/signup
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "student"
}
```

#### Login
```json
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "password123"
}
```

## User Roles
- `student` - Can view courses, track progress, submit assignments
- `faculty` - Can create/manage courses, view students, grade assignments

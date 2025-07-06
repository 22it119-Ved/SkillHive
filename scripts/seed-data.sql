-- Seed data for SkillHive database
-- Insert sample data for testing and development

-- Insert categories
INSERT INTO categories (name, description, icon) VALUES
('Web Development', 'Frontend and backend web development courses', 'code'),
('Data Science', 'Data analysis, machine learning, and AI courses', 'bar-chart'),
('Design', 'UI/UX design, graphic design, and creative courses', 'palette'),
('Mobile Development', 'iOS, Android, and cross-platform mobile app development', 'smartphone'),
('Marketing', 'Digital marketing, SEO, and business growth strategies', 'trending-up'),
('Business', 'Entrepreneurship, management, and business skills', 'briefcase'),
('Photography', 'Photography techniques, editing, and visual storytelling', 'camera'),
('Music', 'Music theory, instruments, and audio production', 'music');

-- Insert sample users
INSERT INTO users (name, email, password_hash, role, bio, skills) VALUES
('Sarah Johnson', 'sarah@example.com', '$2b$10$example_hash_1', 'instructor', 'Senior Frontend Developer with 8+ years experience. Passionate about teaching React and modern web development.', ARRAY['React', 'JavaScript', 'TypeScript', 'Node.js']),
('Mike Chen', 'mike@example.com', '$2b$10$example_hash_2', 'instructor', 'Full-stack developer and tech educator. Specializes in backend development and system architecture.', ARRAY['Node.js', 'Python', 'MongoDB', 'AWS']),
('Emma Davis', 'emma@example.com', '$2b$10$example_hash_3', 'instructor', 'UI/UX Designer with a passion for creating beautiful and functional user experiences.', ARRAY['Figma', 'Adobe XD', 'User Research', 'Prototyping']),
('Dr. Alex Kumar', 'alex@example.com', '$2b$10$example_hash_4', 'instructor', 'Data Scientist and ML Engineer. PhD in Computer Science with focus on machine learning applications.', ARRAY['Python', 'Machine Learning', 'TensorFlow', 'Data Analysis']),
('Lisa Wang', 'lisa@example.com', '$2b$10$example_hash_5', 'instructor', 'Mobile app developer with expertise in Flutter and React Native. Built 20+ mobile applications.', ARRAY['Flutter', 'React Native', 'Dart', 'Mobile UI']),
('John Smith', 'john@example.com', '$2b$10$example_hash_6', 'instructor', 'Digital marketing expert helping businesses grow online. 10+ years in SEO and content marketing.', ARRAY['SEO', 'Content Marketing', 'Google Analytics', 'Social Media']),
('Ved Patel', 'ved@example.com', '$2b$10$example_hash_7', 'learner', 'Computer Science student passionate about learning new technologies and building projects.', ARRAY['JavaScript', 'React', 'Python']),
('Admin User', 'admin@skillhive.com', '$2b$10$example_hash_8', 'admin', 'Platform administrator managing content and user experience.', ARRAY['Platform Management', 'Content Moderation']);

-- Insert sample courses
INSERT INTO courses (title, description, instructor_id, category_id, level, price, duration_hours, thumbnail_url, status, tags, published_at) VALUES
('Complete React Development Course', 'Master React from basics to advanced concepts including hooks, context, and testing. This comprehensive course will take you from beginner to advanced React developer.', 1, 1, 'Intermediate', 0.00, 8, '/placeholder.svg?height=200&width=300', 'approved', ARRAY['React', 'JavaScript', 'Frontend'], NOW() - INTERVAL '30 days'),
('Node.js Backend Mastery', 'Build scalable backend applications with Node.js, Express, and MongoDB. Learn authentication, API design, and deployment strategies.', 2, 1, 'Advanced', 49.00, 12, '/placeholder.svg?height=200&width=300', 'approved', ARRAY['Node.js', 'Express', 'MongoDB'], NOW() - INTERVAL '25 days'),
('UI/UX Design Fundamentals', 'Learn design principles, user research, and prototyping with Figma. Create beautiful and functional user interfaces.', 3, 3, 'Beginner', 0.00, 6, '/placeholder.svg?height=200&width=300', 'approved', ARRAY['UI/UX', 'Figma', 'Design'], NOW() - INTERVAL '20 days'),
('Python Data Science Bootcamp', 'Comprehensive data science course covering pandas, numpy, and machine learning. Work with real datasets and build ML models.', 4, 2, 'Intermediate', 79.00, 15, '/placeholder.svg?height=200&width=300', 'approved', ARRAY['Python', 'Data Science', 'Machine Learning'], NOW() - INTERVAL '15 days'),
('Mobile App Development with Flutter', 'Build cross-platform mobile apps using Flutter and Dart programming language. Deploy to both iOS and Android.', 5, 4, 'Intermediate', 39.00, 10, '/placeholder.svg?height=200&width=300', 'approved', ARRAY['Flutter', 'Dart', 'Mobile'], NOW() - INTERVAL '10 days'),
('Digital Marketing Strategy', 'Learn SEO, social media marketing, and content strategy for business growth. Practical techniques for online success.', 6, 5, 'Beginner', 0.00, 4, '/placeholder.svg?height=200&width=300', 'approved', ARRAY['SEO', 'Social Media', 'Marketing'], NOW() - INTERVAL '5 days'),
('Advanced JavaScript Patterns', 'Deep dive into JavaScript design patterns, async programming, and performance optimization techniques.', 1, 1, 'Advanced', 59.00, 6, '/placeholder.svg?height=200&width=300', 'pending', ARRAY['JavaScript', 'Design Patterns', 'Performance'], NOW()),
('Machine Learning Basics', 'Introduction to machine learning concepts, algorithms, and practical applications using Python and scikit-learn.', 4, 2, 'Beginner', 29.00, 8, '/placeholder.svg?height=200&width=300', 'pending', ARRAY['Machine Learning', 'Python', 'AI'], NOW());

-- Insert sample lessons for React course
INSERT INTO lessons (course_id, title, description, duration_minutes, order_index, is_preview) VALUES
(1, 'Introduction to React', 'Overview of React library, its benefits, and ecosystem. Understanding component-based architecture.', 15, 1, true),
(1, 'Setting up Development Environment', 'Installing Node.js, npm, and creating your first React application using Create React App.', 20, 2, true),
(1, 'Your First React Component', 'Creating functional components, understanding JSX syntax, and rendering elements.', 25, 3, false),
(1, 'JSX and Components', 'Deep dive into JSX syntax, component composition, and best practices.', 30, 4, false),
(1, 'Props and State', 'Understanding props for data passing and state for component data management.', 35, 5, false),
(1, 'Event Handling', 'Handling user interactions, form submissions, and event propagation in React.', 25, 6, false),
(1, 'Conditional Rendering', 'Techniques for conditional rendering and dynamic content display.', 20, 7, false),
(1, 'React Hooks Deep Dive', 'Comprehensive coverage of useState, useEffect, and custom hooks.', 45, 8, false),
(1, 'Context API', 'State management using React Context API for global state sharing.', 30, 9, false),
(1, 'Performance Optimization', 'React.memo, useMemo, useCallback, and other optimization techniques.', 40, 10, false);

-- Insert sample lessons for Node.js course
INSERT INTO lessons (course_id, title, description, duration_minutes, order_index, is_preview) VALUES
(2, 'Node.js Fundamentals', 'Introduction to Node.js runtime, event loop, and core modules.', 25, 1, true),
(2, 'Express.js Setup', 'Setting up Express server, routing, and middleware basics.', 30, 2, false),
(2, 'RESTful API Design', 'Creating REST APIs with proper HTTP methods and status codes.', 35, 3, false),
(2, 'Database Integration', 'Connecting to MongoDB, schema design, and CRUD operations.', 40, 4, false),
(2, 'Authentication & Authorization', 'Implementing JWT authentication and role-based access control.', 45, 5, false);

-- Insert sample enrollments
INSERT INTO enrollments (user_id, course_id, progress_percentage, last_accessed) VALUES
(7, 1, 75, NOW() - INTERVAL '1 day'),
(7, 2, 45, NOW() - INTERVAL '2 days'),
(7, 3, 90, NOW() - INTERVAL '3 days'),
(7, 4, 20, NOW() - INTERVAL '1 week'),
(7, 5, 60, NOW() - INTERVAL '5 days');

-- Insert sample lesson progress
INSERT INTO lesson_progress (user_id, lesson_id, completed, completed_at, watch_time_seconds) VALUES
(7, 1, true, NOW() - INTERVAL '10 days', 900),
(7, 2, true, NOW() - INTERVAL '9 days', 1200),
(7, 3, true, NOW() - INTERVAL '8 days', 1500),
(7, 4, true, NOW() - INTERVAL '7 days', 1800),
(7, 5, true, NOW() - INTERVAL '6 days', 2100),
(7, 6, true, NOW() - INTERVAL '5 days', 1500),
(7, 7, true, NOW() - INTERVAL '4 days', 1200),
(7, 8, true, NOW() - INTERVAL '3 days', 2700),
(7, 9, true, NOW() - INTERVAL '2 days', 1800),
(7, 10, false, NULL, 1200);

-- Insert sample course reviews
INSERT INTO course_reviews (user_id, course_id, rating, review_text) VALUES
(7, 1, 5, 'Excellent course! Sarah explains complex concepts in a very clear and understandable way. The hands-on projects really helped solidify my understanding.'),
(7, 3, 4, 'Great content and well-structured. I wish there were more advanced topics covered, but overall a solid foundation course.');

-- Insert sample discussions
INSERT INTO discussions (course_id, user_id, title, content) VALUES
(1, 7, 'Question about useEffect cleanup', 'I''m having trouble understanding when and how to properly cleanup effects in useEffect. Can someone explain with an example?'),
(1, 7, 'Best practices for component organization', 'What are the best practices for organizing components in a large React application? Should I use folders or keep everything flat?'),
(2, 7, 'MongoDB connection issues', 'I''m getting connection timeout errors when trying to connect to MongoDB Atlas. Has anyone faced this issue?');

-- Insert sample discussion replies
INSERT INTO discussion_replies (discussion_id, user_id, content) VALUES
(1, 1, 'Great question! Cleanup functions in useEffect are essential for preventing memory leaks. Here''s a simple example: useEffect(() => { const timer = setInterval(() => console.log("tick"), 1000); return () => clearInterval(timer); }, []);'),
(2, 1, 'I recommend organizing by feature rather than by file type. Create folders for each major feature and keep related components, hooks, and utilities together.'),
(3, 2, 'Check your network settings and make sure your IP address is whitelisted in MongoDB Atlas. Also verify your connection string is correct.');

-- Insert sample certificates
INSERT INTO certificates (user_id, course_id, certificate_id, certificate_url) VALUES
(7, 3, 'CERT-UIUX-2024-001', '/certificates/cert-uiux-2024-001.pdf');

-- Insert sample notifications
INSERT INTO notifications (user_id, title, message, type, related_id) VALUES
(7, 'Course Completed!', 'Congratulations! You have completed the UI/UX Design Fundamentals course.', 'course_completion', 3),
(7, 'New Reply', 'Sarah Johnson replied to your discussion about useEffect cleanup.', 'discussion_reply', 1),
(7, 'Certificate Available', 'Your certificate for UI/UX Design Fundamentals is now available for download.', 'certificate', 3),
(1, 'New Enrollment', 'Ved Patel has enrolled in your React Development course.', 'enrollment', 1);

-- Update course statistics (ratings, student counts)
UPDATE courses SET 
    updated_at = NOW()
WHERE id IN (1, 2, 3, 4, 5, 6);

# Project Documentation

## Overview

FlowBoost is a modern full-stack web application built as an AI-powered productivity platform. The project showcases a futuristic landing page with interactive components, animations, and a comprehensive design system. It features a React frontend with advanced animations and a Node.js/Express backend with PostgreSQL database integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Framework**: Shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Animations**: Framer Motion for complex animations and transitions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

**Design System**:
- Custom theme with neon blue/green color scheme for futuristic branding
- Glassmorphism effects with backdrop blur
- Comprehensive component library with 40+ UI components
- Responsive design with mobile-first approach

### Backend Architecture

**Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Development**: Hot reload with tsx for development server
- **Build**: ESBuild for production compilation

**API Design**:
- RESTful API structure with `/api` prefix
- Middleware for request logging and error handling
- Modular route registration system

### Data Storage

**Database**: PostgreSQL with Neon serverless integration
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Type Safety**: Full TypeScript integration with inferred types
- **Connection**: Connection pooling with `@neondatabase/serverless`

**Current Schema**:
- Users table with UUID primary keys, username, and password fields
- Zod schemas for runtime validation

### Development Environment

**Monorepo Structure**:
- `/client` - React frontend application
- `/server` - Express backend API
- `/shared` - Common TypeScript types and schemas
- Shared TypeScript configuration with path mapping

**Build Process**:
- Vite for frontend bundling with React plugin
- ESBuild for backend compilation
- Separate development and production configurations

### Session Management

**Storage Interface**: Abstracted storage layer with in-memory implementation
- Designed for easy swapping between memory and database storage
- CRUD operations for user management
- Type-safe interfaces for data operations

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect

### UI Libraries
- **Radix UI**: Unstyled accessible component primitives
- **Shadcn/ui**: Pre-built component library
- **Framer Motion**: Animation library for React
- **Lucide React**: Modern icon library

### Development Tools
- **Vite**: Fast build tool with HMR
- **TanStack Query**: Powerful data synchronization
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Static type checking
- **Wouter**: Minimalist routing library

### Form and Validation
- **React Hook Form**: Performant forms with minimal re-renders
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Integration between React Hook Form and Zod

### Additional Integrations
- **Date-fns**: Modern date utility library
- **clsx**: Utility for constructing className strings
- **class-variance-authority**: Type-safe component variants
- **Replit**: Development environment plugins for Cartographer and error overlay
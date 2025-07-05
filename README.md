# Driving School Management System

A comprehensive web application for managing driving school operations, built with Next.js 15 and React 19.

## Features

- **Dashboard** - Overview of school operations and statistics
- **Student Management** - Track student progress and information
- **Instructor Management** - Manage instructor schedules and assignments
- **Lesson Scheduling** - Book and manage driving lessons
- **Theory Test Preparation** - Resources and practice tests for theory exams
- **Modern UI** - Built with Tailwind CSS and Radix UI components
- **Dark Mode Support** - Toggle between light and dark themes

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI
- **State Management**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Charts**: Recharts for data visualization

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd driving-school-app
```

2. Navigate to the frontend directory:
```bash
cd frontend
```

3. Install dependencies:
```bash
npm install
# or
pnpm install
```

4. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
frontend/
├── app/                    # Next.js app directory
│   ├── dashboard/         # Dashboard page
│   ├── instructors/       # Instructor management
│   ├── lessons/           # Lesson scheduling
│   ├── theory/            # Theory test section
│   └── ...
├── components/            # Reusable UI components
│   └── ui/               # Radix UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/               # Static assets
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

## License

This project is licensed under the MIT License.

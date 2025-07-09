# SnipShare 

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern code snippet sharing platform that makes sharing code with syntax highlighting and execution capabilities effortless. Built with cutting-edge technologies for optimal developer experience.

## Features

- Authentication: Secure sign-in with Google or GitHub via Firebase Auth
- Create & Share Snippets: Write, run, and share code snippets seamlessly
- Syntax Highlighting: Beautiful code display with Monaco Editor and Prism
- Code Execution: Run code snippets in real-time using the Piston API
- User Dashboard: Comprehensive snippet management interface
- Demo Functionality: Interactive demo page with pre-created examples
- Responsive Design: Optimized for all devices with modern UI
- Theming: Light/dark mode support for comfortable coding
- Performance: Built with Next.js App Router for optimal performance

### Supported Languages
- JavaScript
- Python
- Java
- C++

## Tech Stack

- **Frontend**: [Next.js 14 (App Router)](https://nextjs.org/), [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Authentication & Database**: [Firebase (Auth, Firestore)](https://firebase.google.com/)
- **Code Editor**: [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- **Code Execution**: [Piston API](https://emkc.org/api/v2/piston/execute)
- **Deployment**: Vercel/Netlify ready

## Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager
- Firebase project with Auth and Firestore enabled

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Auxilus08/SnipShare.git
   cd SnipShare
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your Firebase credentials in `.env.local`:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id_here
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id_here
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id_here
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000) to see the application.

## Usage

### Getting Started
1. **Sign In**: Use Google or GitHub to authenticate
2. **Explore Demos**: Visit `/demo` to see platform features
3. **Create Snippet**: Click "New Snippet" from your dashboard
4. **Write Code**: Use the Monaco editor with syntax highlighting
5. **Run & Test**: Execute your code to see results
6. **Share**: Get a shareable link for your snippet
7. **Manage**: View and organize all your snippets from your profile

### Demo System
SnipShare includes a comprehensive demo system:
- **Demo Page** (`/demo`): Interactive gallery of example snippets
- **Admin Interface** (`/admin/demo`): Easy demo content management
- **API Endpoint** (`/api/demo`): Server-side demo creation
- **Pre-built Examples**: JavaScript, Python, Java, and C++ samples

## Project Structure

```
SnipShare/
│
├── .env.example              # Example environment variables
├── .gitignore                # Git ignored files
├── components.json           # Component config
├── CONTRIBUTING.md           # Contribution guidelines
├── jsconfig.json             # JS config for path aliases
├── LICENSE.txt               # Project license
├── middleware.js             # Next.js middleware
├── next.config.mjs           # Next.js configuration
├── package.json              # NPM package file
├── package-lock.json         # NPM lock file
├── postcss.config.mjs        # PostCSS config
├── tailwind.config.js        # Tailwind CSS configuration
├── README.md                 # Project overview
│
├── app/                      # App directory (Next.js routing and pages)
│   ├── globals.css           # Global styles
│   ├── layout.js             # Main layout file
│   ├── page.js               # Homepage
│   ├── (user)/               # User-related pages
│   │   ├── layout.jsx
│   │   ├── edit/[id]/        # Edit snippet page
│   │   ├── me/               # My profile/snippets
│   │   └── new/              # Create new snippet
│   ├── admin/demo/           # Admin demo page
│   ├── api/demo/             # API route
│   ├── auth/                 # Auth page
│   ├── demo/                 # Public demo page
│   ├── demo-snippets/[id]/   # Demo snippets page
│   ├── s/[id]/               # Snippet viewer
│   ├── _components/          # Shared UI components
│   └── _constants/           # Static config/runcode files
│
├── components/               # Reusable UI and layout components
│   ├── auth/                 # Authentication components
│   ├── page/                 # Page layout sections
│   ├── providers/            # Theme/context providers
│   └── ui/                   # Custom UI components
│
├── hooks/                    # Custom React hooks
│   └── use-media-query.jsx
│
├── lib/                      # Firebase and utility libraries
│   ├── firebase.js
│   └── utils.js
│
├── public/                   # Static assets
│   ├── bg_gradient.avif
│   ├── dash-prv.png
│   └── preview-homepage.png
│
├── scripts/                  # Project scripts
│   ├── createDemoSnippets.js
│   └── testDemo.js
│
├── server_functions/         # Backend functions
│   ├── createSnippet.js
│   ├── getUserSnippets.js
│   └── updateSnippet.js
│
└── utils/                    # Utility functions
    └── current-user.js
                    
```

## Configuration

### Firebase Setup
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication with Google and GitHub providers
3. Create a Firestore database
4. Copy your config to `.env.local`

### Authentication Callback URLs
- **Local Development**: `http://localhost:3000/`
- **Production**: `https://yourdomain.com/`

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details on:
- Code of conduct
- Development workflow
- Pull request process
- Code standards

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.

## Contact & Support

- **Author**: [Auxilus08](https://github.com/Auxilus08)
- **Repository**: [SnipShare](https://github.com/Auxilus08/SnipShare)
- **Issues**: [Report a bug or request a feature](https://github.com/Auxilus08/SnipShare/issues)

## Acknowledgments

- [Piston API](https://emkc.org/api/v2/piston/execute) for code execution
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) for the excellent code editing experience
- [Firebase](https://firebase.google.com/) for authentication and database services
- [Next.js](https://nextjs.org/) team for the amazing framework

---

 **Star this repository if you find it helpful!**
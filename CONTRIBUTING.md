# Contributing to SnipShare 

First off, thank you for considering contributing to SnipShare! It's people like you that make SnipShare such a great tool for the developer community.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Workflow](#development-workflow)
- [Code Standards](#code-standards)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)
- [Community](#community)

## Code of Conduct

This project and everyone participating in it is governed by our commitment to providing a welcoming and inclusive environment. By participating, you are expected to uphold this code.

### Our Standards
- **Be respectful**: Treat everyone with respect and kindness
- **Be inclusive**: Welcome newcomers and help them succeed
- **Be collaborative**: Work together constructively
- **Be patient**: Help others learn and grow
- **Be professional**: Keep discussions focused and constructive

## Getting Started

### Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/SnipShare.git
   cd SnipShare
   ```
3. **Set up the upstream remote**:
   ```bash
   git remote add upstream https://github.com/Auxilus08/SnipShare.git
   ```
4. **Install dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   ```
5. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   # Fill in your Firebase credentials
   ```
6. **Run the development server**:
   ```bash
   npm run dev
   ```

### Technologies You Should Know
- **Next.js 14** (App Router)
- **React 18** (Functional Components, Hooks)
- **TypeScript** (preferred for new code)
- **Tailwind CSS** (for styling)
- **Firebase** (Auth, Firestore)
- **Monaco Editor** (code editor)

## How to Contribute

### Types of Contributions We Welcome

- **Bug Reports**: Found a bug? Let us know!
- **Feature Requests**: Have an idea? We'd love to hear it!
- **Documentation**: Help improve our docs
- **Code Contributions**: Fix bugs or add features
- **Design Improvements**: Enhance the user experience
- **Testing**: Add or improve tests
- **Translations**: Help make SnipShare accessible worldwide

### What We're Looking For

- **Bug fixes** for existing issues
- **New language support** for code execution
- **UI/UX improvements** for better user experience
- **Performance optimizations**
- **Accessibility enhancements**
- **Mobile responsiveness** improvements
- **Testing and documentation** improvements

## Development Workflow

### Before You Start
1. **Check existing issues** to avoid duplicate work
2. **Comment on the issue** you'd like to work on
3. **Wait for assignment** to avoid conflicts
4. **Create a branch** for your work

### Branch Naming Convention
- `feature/description` - for new features
- `bugfix/description` - for bug fixes
- `docs/description` - for documentation updates
- `refactor/description` - for code refactoring
- `test/description` - for adding tests

Examples:
- `feature/add-python-support`
- `bugfix/fix-auth-redirect`
- `docs/update-readme`

### Development Process
1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. **Make your changes** following our code standards
3. **Test your changes** thoroughly
4. **Commit your changes** with descriptive messages
5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Create a Pull Request**

## Code Standards

### General Guidelines
- Write clean, readable, and maintainable code
- Follow existing code patterns and conventions
- Add comments for complex logic
- Keep functions small and focused
- Use meaningful variable and function names

### JavaScript/TypeScript Standards
- Use **TypeScript** for new components when possible
- Use **functional components** with hooks
- Follow **React best practices**
- Use **async/await** instead of promises when possible
- Use **proper error handling**

### Code Style
- Use **Prettier** for code formatting
- Follow **ESLint** rules (will be enforced via CI)
- Use **2 spaces** for indentation
- Use **semicolons** at the end of statements
- Use **single quotes** for strings

### CSS/Styling Standards
- Use **Tailwind CSS** utility classes
- Follow **mobile-first** responsive design
- Use **semantic HTML** elements
- Ensure **accessibility** standards (WCAG 2.1)
- Test in both **light and dark modes**

### File Organization
- Keep components in `src/components/`
- Create new pages in `src/app/`
- Add utilities in `src/lib/`
- Place types in `src/types/`
- Add hooks in `src/hooks/`

## Pull Request Process

### Before Submitting
- [ ] **Test your changes** locally
- [ ] **Run the linter**: `npm run lint`
- [ ] **Check types**: `npm run type-check`
- [ ] **Update documentation** if needed
- [ ] **Add tests** for new features
- [ ] **Ensure CI passes**

### PR Title Format
Use conventional commit format:
- `feat: add new feature`
- `fix: resolve bug with login`
- `docs: update README`
- `style: improve button design`
- `refactor: optimize code editor`
- `test: add unit tests`

### PR Description Template
```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
- [ ] I have tested this change locally
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes

## Screenshots (if applicable)
Add screenshots to help explain your changes.

## Checklist
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
```

### Review Process
1. **Automated checks** must pass (CI/CD)
2. **Code review** by maintainers
3. **Testing** by reviewers
4. **Approval** and merge

## Issue Guidelines

### Reporting Bugs
When reporting bugs, please include:
- **Clear title** describing the issue
- **Steps to reproduce** the bug
- **Expected behavior** vs actual behavior
- **Environment details** (browser, OS, etc.)
- **Screenshots** if applicable
- **Error messages** or console logs

### Feature Requests
For feature requests, please include:
- **Clear description** of the feature
- **Use case** or problem it solves
- **Proposed solution** if you have one
- **Alternatives considered**
- **Additional context** or examples

### Issue Labels
We use labels to categorize issues:
- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements to docs
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `priority: high/medium/low` - Issue priority

## Community

### Getting Help
- **Discussions**: Use GitHub Discussions for questions
- **Issues**: Report bugs via GitHub Issues
- **Email**: Contact maintainers directly if needed

### Recognition
Contributors are recognized in:
- **README.md** contributors section
- **Release notes** for significant contributions
- **GitHub contributors** page

### Becoming a Maintainer
Regular contributors who show commitment to the project may be invited to become maintainers. This involves:
- Consistent, high-quality contributions
- Helping other contributors
- Participating in project discussions
- Following project guidelines

## Development Tips

### Useful Commands
```bash
# Run development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npm run type-check

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch
```

### Debugging
- Use **React Developer Tools** for component debugging
- Use **Firebase Emulator** for local development
- Check **browser console** for errors
- Use **Next.js built-in debugging** features

### Testing
- Write **unit tests** for utilities and hooks
- Write **integration tests** for components
- Test **authentication flows** thoroughly
- Test **code execution** features
- Verify **responsive design** on different devices

## Questions?

Don't hesitate to ask questions! We're here to help:
- Open a **Discussion** on GitHub
- Comment on relevant **Issues**
- Reach out to **maintainers**

Thank you for contributing to SnipShare! 
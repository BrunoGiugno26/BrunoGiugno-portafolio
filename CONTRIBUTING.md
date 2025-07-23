# Contributing to Portfolio Template

First off, thank you for considering contributing to this portfolio template! 🎉

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Issue Guidelines](#issue-guidelines)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

### Our Standards

- **Be respectful** and inclusive
- **Be collaborative** and helpful
- **Be patient** with newcomers
- **Focus on what's best** for the community

## 🤝 How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates.

**When submitting a bug report, please include:**

- **Clear title** and description
- **Steps to reproduce** the issue
- **Expected vs actual behavior**
- **Screenshots** if applicable
- **Environment details** (OS, browser, Node.js version)

### ✨ Suggesting Features

Feature suggestions are welcome! Please:

- **Check existing issues** first
- **Provide clear use case** and rationale
- **Consider implementation complexity**
- **Be open to discussion**

### 🔧 Code Contributions

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Submit** a pull request

## 🛠 Development Setup

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm
- Git

### Setup Steps

1. **Clone your fork**
   \`\`\`bash
   git clone https://github.com/YOUR_USERNAME/portfolio-template.git
   cd portfolio-template
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Run tests**
   \`\`\`bash
   npm run test
   npm run type-check
   npm run lint
   \`\`\`

## 🔄 Pull Request Process

### Before Submitting

- [ ] **Test your changes** thoroughly
- [ ] **Update documentation** if needed
- [ ] **Follow code style** guidelines
- [ ] **Write meaningful** commit messages
- [ ] **Rebase** on latest main branch

### PR Template

\`\`\`markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested locally
- [ ] Added/updated tests
- [ ] All tests pass

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes (or documented)
\`\`\`

## 📝 Style Guidelines

### TypeScript/JavaScript

- **Use TypeScript** for all new code
- **Follow existing patterns** and conventions
- **Add JSDoc comments** for complex functions
- **Use meaningful variable names**
- **Keep functions small** and focused

### React Components

\`\`\`typescript
/**
 * Component description
 */
interface ComponentProps {
  /** Prop description */
  title: string
  /** Optional prop description */
  subtitle?: string
}

export function Component({ title, subtitle }: ComponentProps) {
  return (
    <div>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}
\`\`\`

### CSS/Styling

- **Use Tailwind CSS** classes
- **Follow mobile-first** approach
- **Use semantic class names** for custom CSS
- **Maintain consistent spacing**

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

\`\`\`
feat: add new project card component
fix: resolve mobile navigation issue
docs: update installation instructions
style: improve button hover states
refactor: extract common utilities
test: add unit tests for contact form
\`\`\`

## 🐛 Issue Guidelines

### Bug Reports

Use the bug report template:

\`\`\`markdown
**Describe the bug**
A clear description of the bug

**To Reproduce**
Steps to reproduce the behavior

**Expected behavior**
What you expected to happen

**Screenshots**
If applicable, add screenshots

**Environment:**
- OS: [e.g. macOS, Windows]
- Browser: [e.g. Chrome, Firefox]
- Version: [e.g. 22]
\`\`\`

### Feature Requests

Use the feature request template:

\`\`\`markdown
**Is your feature request related to a problem?**
A clear description of the problem

**Describe the solution you'd like**
A clear description of what you want to happen

**Describe alternatives you've considered**
Alternative solutions or features

**Additional context**
Any other context or screenshots
\`\`\`

## 🏷 Labels

We use labels to categorize issues and PRs:

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements to docs
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `question` - Further information requested

## 🎯 Areas for Contribution

### High Priority

- **Bug fixes** and stability improvements
- **Performance optimizations**
- **Accessibility improvements**
- **Mobile responsiveness** fixes

### Medium Priority

- **New components** and features
- **Documentation** improvements
- **Test coverage** increases
- **Code refactoring**

### Low Priority

- **Design enhancements**
- **Animation improvements**
- **Developer experience** improvements

## 🚀 Release Process

1. **Version bump** in package.json
2. **Update CHANGELOG.md**
3. **Create release** on GitHub
4. **Deploy to demo** site

## 📞 Getting Help

- **GitHub Discussions** - For questions and ideas
- **GitHub Issues** - For bugs and feature requests
- **Email** - adeel.hashmi@example.com

## 🙏 Recognition

Contributors will be:

- **Listed** in README.md
- **Mentioned** in release notes
- **Added** to contributors page
- **Thanked** publicly on social media

---

Thank you for contributing! 🎉

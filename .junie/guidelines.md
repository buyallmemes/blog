# BuyAllMemes Blog - Developer Guidelines

This document provides concise guidance for developers working on the BuyAllMemes Blog project. It covers project structure, running tests, executing scripts, and best practices.

## Project Structure

The BuyAllMemes Blog is an Angular application with the following key directories:

```
blog/
├── src/                    # Source code
│   ├── app/                # Angular application code
│   │   ├── blog/           # Blog component (main page)
│   │   ├── post/           # Post component (individual posts)
│   │   ├── navigation/     # Navigation component
│   │   ├── app.component.* # Root component files
│   │   ├── app.routes.ts   # Application routes
│   │   └── app.config.ts   # Application configuration
│   ├── assets/             # Static assets
│   └── styles.scss         # Global styles
├── docs/                   # Documentation files
└── .junie/                 # Junie-specific guidelines
```

## Tech Stack

- **Angular 19**: Core framework
- **Tailwind CSS**: Utility-first CSS framework
- **Angular Material**: UI component library
- **FontAwesome**: Icon library
- **ngx-sharebuttons**: Social media sharing

## Running the Application

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run specific test file
ng test --include=src/app/blog/blog.component.spec.ts
```

## Code Organization Guidelines

1. **Component Structure**:
   - Keep components small and focused on a single responsibility
   - Use standalone components when possible
   - Place related files (component, styles, tests) together

2. **Feature Organization**:
   - Group related components in feature directories (e.g., blog/, post/)
   - Use barrel files (index.ts) to simplify imports

3. **State Management**:
   - Use services for shared state
   - Leverage Angular's resolver pattern for data fetching
   - Document state flow between components

## Best Practices

1. **Performance**:
   - Use OnPush change detection for performance-critical components
   - Implement lazy loading for routes
   - Optimize images and assets

2. **Testing**:
   - Write unit tests for all components and services
   - Test edge cases and error scenarios
   - Keep tests focused and independent

3. **Styling**:
   - Use Tailwind utility classes for most styling needs
   - Keep component-specific styles in their SCSS files
   - Follow responsive design principles

4. **Documentation**:
   - Document public methods and complex logic
   - Keep comments up-to-date with code changes
   - Use JSDoc format for documentation

## Git Workflow

1. Create feature branches from main
2. Make small, focused commits
3. Write descriptive commit messages
4. Create pull requests with clear descriptions
5. Request code reviews before merging

## Additional Resources

- [Project Structure Documentation](../docs/PROJECT_STRUCTURE.md)
- [Contributing Guidelines](../CONTRIBUTING.md)
- [Angular Documentation](https://angular.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

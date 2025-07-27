import { Post } from './post/post';

export const BLOG_POSTS: Post[] = [
  {
    anchor: 'let-go',
    title: 'Let Go',
    excerpt: 'Sometimes the best thing you can do is let go...',
    content: `# Let Go

Sometimes the best thing you can do is let go. Whether it's a project that's not working, a relationship that's toxic, or a belief that's holding you back.

In software engineering, this often means:
- Deleting code that doesn't serve the purpose
- Abandoning features that add complexity without value
- Letting go of perfect solutions in favor of working ones

The art is knowing when to persist and when to pivot.`,
    publishedDate: '2024-01-15',
    tags: ['philosophy', 'software']
  },
  {
    anchor: 'practical-dependency-inversion-principle',
    title: 'Practical Dependency Inversion Principle',
    excerpt: 'Understanding and applying DIP in real-world scenarios...',
    content: `# Practical Dependency Inversion Principle

The Dependency Inversion Principle (DIP) is one of the SOLID principles that helps create more maintainable and testable code.

## What is DIP?

1. **High-level modules should not depend on low-level modules. Both should depend on abstractions.**
2. **Abstractions should not depend on details. Details should depend on abstractions.**

## Practical Example

Instead of:
\`\`\`typescript
class OrderService {
  private emailService = new EmailService(); // Direct dependency
  
  processOrder(order: Order) {
    // Process order logic
    this.emailService.sendConfirmation(order.email);
  }
}
\`\`\`

Use dependency injection:
\`\`\`typescript
interface NotificationService {
  sendConfirmation(email: string): void;
}

class OrderService {
  constructor(private notificationService: NotificationService) {}
  
  processOrder(order: Order) {
    // Process order logic
    this.notificationService.sendConfirmation(order.email);
  }
}
\`\`\`

This makes testing easier and the code more flexible.`,
    publishedDate: '2024-01-10',
    tags: ['solid', 'design-patterns', 'typescript']
  },
  {
    anchor: 'circular-dependencies',
    title: 'Circular Dependencies',
    excerpt: 'How to identify and resolve circular dependencies...',
    content: `# Circular Dependencies

Circular dependencies occur when two or more modules depend on each other, creating a cycle.

## The Problem

\`\`\`typescript
// user.service.ts
import { OrderService } from './order.service';

export class UserService {
  constructor(private orderService: OrderService) {}
}

// order.service.ts  
import { UserService } from './user.service';

export class OrderService {
  constructor(private userService: UserService) {}
}
\`\`\`

## Solutions

1. **Extract common dependencies**
2. **Use dependency injection**
3. **Refactor to remove the cycle**
4. **Use interfaces to break the cycle**

The key is to identify the cycle early and refactor before it becomes deeply embedded.`,
    publishedDate: '2024-01-05',
    tags: ['architecture', 'debugging', 'best-practices']
  },
  {
    anchor: 'ultimate-testing-guideline',
    title: 'Ultimate Testing Guideline',
    excerpt: 'A comprehensive guide to testing strategies...',
    content: `# Ultimate Testing Guideline

Testing is crucial for maintainable software. Here's a practical approach:

## Testing Pyramid

1. **Unit Tests (70%)**
   - Fast, isolated, focused
   - Test individual functions/classes
   
2. **Integration Tests (20%)**
   - Test components working together
   - Database, API interactions
   
3. **E2E Tests (10%)**
   - Test complete user workflows
   - Slow but catch real issues

## Best Practices

- Write tests first (TDD)
- Keep tests simple and focused
- Use descriptive test names
- Mock external dependencies
- Test behavior, not implementation

Remember: Good tests are documentation of how your code should work.`,
    publishedDate: '2024-01-01',
    tags: ['testing', 'tdd', 'best-practices']
  },
  {
    anchor: 'lets-build',
    title: "Let's Build",
    excerpt: 'The joy of building something from scratch...',
    content: `# Let's Build

There's something magical about starting with a blank file and building something useful.

## The Process

1. **Start simple** - Get something working first
2. **Iterate quickly** - Make small improvements
3. **Listen to feedback** - Users know what they need
4. **Refactor often** - Keep the code clean

## Why Building Matters

- **Learning** - You understand by doing
- **Creativity** - Express ideas through code  
- **Impact** - Solve real problems
- **Joy** - The satisfaction of creation

The best way to learn is to build. So let's build something today.`,
    publishedDate: '2023-12-25',
    tags: ['philosophy', 'learning', 'motivation']
  },
  {
    anchor: 'hello-world',
    title: 'Hello, World!',
    excerpt: 'Every journey begins with a single step...',
    content: `# Hello, World!

Welcome to the blog! This is where I share thoughts on software engineering, life lessons from code, and the journey of building things.

## What You'll Find Here

- **Technical insights** from real projects
- **Lessons learned** from mistakes and successes  
- **Simple solutions** to complex problems
- **Philosophy** behind good software design

## Why I Write

Writing helps me:
- Clarify my thoughts
- Share knowledge with others
- Document lessons learned
- Connect with fellow developers

Thanks for reading, and let's learn together!`,
    publishedDate: '2023-12-20',
    tags: ['introduction', 'philosophy']
  }
];
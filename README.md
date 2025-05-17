# BuyAllMemes Blog

Hello there ✌️

## Project Overview

This is an Angular blog application for BuyAllMemes. The project has been refactored to use Tailwind CSS for styling.

## Technology Stack

- Angular 19
- Angular Material
- Tailwind CSS
- FontAwesome
- ngx-sharebuttons

## Tailwind CSS Integration

This project uses Tailwind CSS for utility-first styling. The integration includes:

- Tailwind CSS core library
- PostCSS for processing
- Autoprefixer for vendor prefixes

### How to Use Tailwind CSS

Tailwind CSS provides utility classes that can be applied directly in your HTML. For example:

```html
<!-- Using Tailwind for flex layout -->
<div class="flex flex-col md:flex-row gap-4">
  <!-- Content here -->
</div>

<!-- Using Tailwind for text styling -->
<h1 class="text-2xl font-bold text-gray-800">Title</h1>
```

### Customizing Tailwind

You can customize Tailwind by editing the `tailwind.config.js` file. For example, to add custom colors:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-primary': '#your-color-here',
      },
    },
  },
  // ...
}
```

### Combining with Angular Material

This project demonstrates how to use Tailwind CSS alongside Angular Material components. You can apply Tailwind classes to Angular Material components to customize their appearance.

## Development

### Installation

```bash
npm install
```

### Running the Application

```bash
npm start
```

### Building for Production

```bash
npm run build
```

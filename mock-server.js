// Simple Express server to mock API responses
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS for Angular dev server
app.use(cors());

// Sample blog posts data
const mockPosts = [
  {
    id: '1',
    title: 'Mock Blog Post 1',
    content: '<p>This is a mock blog post content.</p><p>You can replace this with actual content.</p>',
    description: 'This is a sample mock blog post for local development',
    date: '2025-05-20',
    author: 'Local Developer',
    tags: ['mock', 'development'],
    anchor: 'mock-blog-post-1'
  },
  {
    id: '2',
    title: 'Mock Blog Post 2',
    content: '<p>Another mock blog post for testing.</p><p>Add more content here.</p>',
    description: 'Second sample blog post with mock content',
    date: '2025-05-22',
    author: 'Local Developer',
    tags: ['mock', 'testing'],
    anchor: 'mock-blog-post-2'
  }
];

// Create the blog structure that matches the Blog interface
const mockBlog = {
  posts: mockPosts
};

// API endpoint to get all posts wrapped in a Blog object
app.get('/api/mock', (req, res) => {
  res.json(mockBlog);
});

// API endpoint to get a post by ID
app.get('/api/mock/:id', (req, res) => {
  const post = mockPosts.find(p => p.id === req.params.id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

app.listen(port, () => {
  console.log(`Mock API server running at http://localhost:${port}`);
});

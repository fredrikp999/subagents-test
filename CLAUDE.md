# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based blog website called "Tech Insights" that showcases technology articles and insights. The project has evolved from initial requirements into a fully functional blog application with dynamic markdown article loading.

The purpose of the project is to try out Claude code with subagents.

## Claude Subagents
Subagents are mostly taken from https://github.com/iannuttall/claude-agents/ and https://github.com/wshobson/agents - Thanks!
code-refactorer: Code refactoring assistance
content-writer: Content writing assistance
frontend-designer: Frontend design assistance
prd-writer: Product requirement document writing
project-task-planner: Project planning and task breakdown
security-auditor: Security audit assistance
vibe-coding-coach: Coding guidance and coaching
requirement-analyst: Requirement analysis

## Current Implementation

The project now consists of:
- React blog application with responsive design
- Dynamic markdown article loading system
- Blog list and individual post views
- Modern, professional UI with mobile-first approach

## Technology Stack

- **Frontend**: React 18.2.0 with Create React App
- **Styling**: CSS3 with responsive design
- **Content**: Markdown (.md) files for articles
- **Article Loading**: Dynamic fetch from public/articles folder
- **Dependencies**: react, react-dom, react-scripts, raw-loader

## Architecture

### Components
- `App.js` - Main application with routing between list and post views
- `components/BlogList.js` - Displays article previews in responsive grid
- `components/BlogPost.js` - Renders individual articles with markdown formatting
- `utils/articleLoader.js` - Handles dynamic loading of markdown articles

### Article System
- **Articles Directory**: `public/articles/` contains all `.md` files
- **Manifest File**: `public/articles/manifest.json` tracks article metadata
- **Dynamic Loading**: Articles are fetched at runtime and parsed
- **Markdown Support**: Built-in markdown-to-HTML conversion

## Adding New Articles

To add new blog posts:
1. Create a new `.md` file in `public/articles/`
2. Update `public/articles/manifest.json` with article metadata:
```json
{
  "slug": "article-slug",
  "filename": "article-filename.md",
  "title": "Article Title",
  "date": "YYYY-MM-DD"
}
```
3. The article will automatically appear in the blog

## Current Articles

- Ericsson telecommunications leader article
- Kista Sweden Silicon Valley story

## Development Commands

- `npm install` - Install dependencies
- `npm start` - Run development server
- `npm run build` - Build for production
- `npm test` - Run tests

## Browser Support

- Chrome, Firefox, Safari, Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes

## Performance Features

- Lazy loading of article content
- Responsive images and optimized CSS
- Mobile-first design approach
- Clean, semantic HTML structure
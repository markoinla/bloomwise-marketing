# Mainline Astro Template

Mainline Astro Template is a premium template built by https://www.shadcnblocks.com

- [Demo](https://mainline-astro-template.vercel.app/)
- [Documentation](https://docs.shadcnblocks.com/templates/getting-started)

## Screenshot

![Mainline Astro Template screenshot](./public/og-image.jpg)

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) with your browser to see the result.

## Tech Stack

- Astro 5.x
- Tailwind 4
- shadcn/ui

## Key Components

### Blog Posts (`src/components/sections/blog-posts.tsx`)

The blog posts component is a responsive grid layout that displays blog posts in an elegant card format. Each blog post card includes:

- Featured image
- Title and description
- Author information with avatar
- Reading time badge
- Clean separators and hover effects

The component accepts a `posts` array prop where each post should have the following structure:

```typescript
{
  id: string;
  data: {
    title: string;
    description: string;
    image: string;
    authorName: string;
    authorImage: string;
  }
}
```

## Deploy

You can deploy this template to your preferred hosting platform that supports Astro applications. Some recommended options include:

- [Netlify](https://netlify.com)
- [Vercel](https://vercel.com)
- [Cloudflare Pages](https://pages.cloudflare.com)

# VuePress Blog Boilerplate

This is an ever-changing and opinionated architecture that uses [VuePress](https://www.vuepress.vuejs.org) to power your blogging platform.

## Features

- Write posts in Markdown
- Basic pagination sorted by most recent posts
- Ability to search for posts via headings within the post
- Basic scheduling for future publishing
- Basic tagging for posts
- Automatic RSS feed generation
- Easily integrate Google Analytics

## Getting Started

### Prerequisites

- [NodeJS >= 8](https://nodejs.org/)
- [yarn](https://yarnpkg.com/lang/en/docs/install/) (Optional)
- Basic knowledge of navigating the terminal

### Installation

> If your plan is follow the tutorial all the way through to deployment, make sure you fork this project instead of simply cloning it!

In your terminal, navigate to the desired directory where you want this project to live.

```bash
# Clone the repo for local development
git clone https://github.com/bencodezen/vuepress-blog-boilerplate.git

# Change directory into project
cd vuepress-blog-boilerplate

# Install dependencies
npm install # or yarn

# Run local server
npm run dev # OR yarn dev
```

You should now be able to visit [http:localhost:8080](http:localhost:8080) to see your local server running!

## Documentation

To check out the tutorial and docs, check out the guide (coming soon).

## Examples

- [VuePress Blog Boilerplate Demo](https://vigorous-lovelace-5c861d.netlify.com/)
- [BenCodeZen Blog](https://www.bencodezen.io)

## FAQs

### Why VuePress?

While it is true that there are plenty of blogging engines out there already optimized for blogging, I enjoyed the authoring experience of VuePress so much that I wanted to make a blog version of it while the core team works through their roadmap.

### Will this repo be updated?

This repo was created based on what I'm doing for [my own blog](https://www.bencodezen.io), so any updates I make over there will be reflected here as well.

### Where do I request a feature, file a bug, or ask a question?

All you have to do is [create a new issue](https://gitlab.com/bencodezen/vuepress-blog/issues/new)!

## Hat Tip

While this concept was born out of a desire to power my own blog with VuePress, the idea to make a boilerplate from it was inspired from [Chris Fritz's](https://www.twitter.com/chrisvfritz) [Vue Enterprise Boilerplate](https://github.com/chrisvfritz/vue-enterprise-boilerplate).

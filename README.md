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

### Requirement

- [NodeJS >= 8](https://nodejs.org/)

### Instructions

Navigate in your terminal to the desired directory where you want this project to live.

```bash
# Clone the repo
git clone https://gitlab.com/bencodezen/vuepress-blog-boilerplate.git

# Change directory into project
cd vuepress-blog-boilerplate

# Install dependencies
yarn # OR npm install

# Run local server
yarn dev # OR npm run dev
```

### Writing Posts

1. Create a Markdown file (`.md`) in the `./src/blog` directory
2. Use the following frontmatter template to provide meta data about your blog post
```yaml
---
title: Title of Your Post
date: 2018-12-23 21:04:07
excerpt: This is the snippet that will show up on the home page as preview text
tags:
    - HTML
    - CSS
    - JavaScript
---
```
3. Write your blog post using regular Markdown, [extensions](https://vuepress.vuejs.org/guide/markdown.html), and [Vue.js](https://vuepress.vuejs.org/guide/using-vue.html)!

Once you're done, you can expect the home page to automatically generate a `<BlogPostPreview>` component with the meta data you provided along with a link to the blog post itself.

#### Scheduling Posts for Future "Publishing"

This blog theme currently allows you to set future "publish"* dates via [ISO-8601 format](https://en.wikipedia.org/wiki/ISO_8601) (i.e., YYYY-MM-DD hh:mm:ss).

* Note: Your blog posts will technically be available, but the posts preview will not be surfaced on the home page and users will only be able to see your posts if they know the exact URL.


### Configuring Your Site

You'll want to checkout `./src/.vuepress/config.js` if you want to update the following information:

- Site Title
- Google Analytics ID
- Repo Location
- Repo Label in Navigation
- Edit Page Link Text
- Top Navigation
- Favicon: Use [favicon-generator.org](https://www.favicon-generator.org/) to generate icons and simply replace all the files in `./src/.vuepress/public` and your favicon should just show up!

### Deploying Your Site

I recommend using [Netlify](https://www.netlify.com/) to deploy your VuePress site.

A more thorough guide to come, but as far as a high level overview of the steps you need to take:

1. Create an account with Netlify if you don't already have one
1. Create a "New site from Git"
1. Connect your blog repo through the create a new site wizard
1. Setup "Build & deploy" settings with the following settings:
    - **Build command**: `npm run build`
    - **Publish directory**: `public/`

## Demo

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

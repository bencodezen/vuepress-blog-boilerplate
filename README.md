# VuePress Blog Template

This is a basic template to use [VuePress](https://www.vuepress.vuejs.org) as your blogging platform. It is simple from a blogging engine perspective, but it does the basic things you need from a blog:

1. Write posts in Markdown
1. Only show the most recent posts with basic pagination
1. Ability to search for posts

## Demo

- [BenCodeZen Blog](https://www.bencodezen.io)

## How to Use

### Getting Setup

#### Requirement

- [NodeJS >= 8](https://nodejs.org/)

#### Instructions

Navigate in your terminal to the desired directory where you want this project to live.

```bash
# Clone the repo
git clone git@gitlab.com:bencodezen/vuepress-blog-template.git

# Change directory into project
cd vuepress-blog-template

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
title: 
date: 2018-12-23 21:04:07
excerpt: 
---
```
3. Write your blog post using regular Markdown, [extensions](https://vuepress.vuejs.org/guide/markdown.html), and [Vue.js](https://vuepress.vuejs.org/guide/using-vue.html)!

Once you're done, you can expect the home page to automatically generate a `<BlogPostPreview>` component with the meta data you provided along with a link to the blog post itself.


### Configuring Your Site

You'll want to checkout `./src/.vuepress/config.js` if you want to update the following information:

- Site Title
- Google Analytics ID
- Repo Location
- Repo Label in Navigation
- Edit Page Link Text
- Top Navigation

### Deploying Your Site

I recommend using [Netlify](https://www.netlify.com/) to deploy your VuePress site.

A more thorough guide to come, but as far as a high level overview of the steps you need to take:

1. Create an account with Netlify if you don't already have one
1. Create a "New site from Git"
1. Connect your blog repo through the create a new site wizard
1. Setup "Build & deploy" settings with the following settings:
    - **Build command**: `npm run build`
    - **Publish directory**: `public/

## FAQs

### Will this repo be updated?

This repo was created based on what I'm doing for [my own blog](https://www.bencodezen.io), so any updates I make over there will be reflected here as well.

### Where do I request a feature, file a bug, or ask a question?

All you have to do is [create a new issue](https://gitlab.com/bencodezen/vuepress-blog/issues/new)!

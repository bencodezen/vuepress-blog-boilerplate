# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0]

- Project is now deprecated
- For continued updates on Ben's opinions on a blogging boilerplate, see [Ben's Blog Boilerplate](https://github.com/bencodezen/bens-blog-boilerplate)

## [0.11.0-beta]

### Added

- [#41](https://github.com/bencodezen/vuepress-blog-boilerplate/issues/41) Rerelease tagging feature
- [#31](https://github.com/bencodezen/vuepress-blog-boilerplate/issues/31) Add repo config to docs

### Changed

- [#37](https://github.com/bencodezen/vuepress-blog-boilerplate/issues/37) Improved favicon process
- Archived posts page

## [0.10.0-beta]

### Added

- Explanation for logos in docs
- Feature to estimate reading time on blog posts

## [0.9.0-beta]

### Added

- Configured VuePress Plugin Janitor

### Changed

- Google Analytics is now a plugin and configured via plugin and not in the config object directly

### Fixed

- Future blog posts will no longer be output in the build directory
- RSS Feed filter will now compare identical UTC timezone

### Deprecated

- Limited tagging UI functionality (i.e., sort posts by tags) was removed in order to allow for better integration of official blog plugin in the near future

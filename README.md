# IIIF Bookmarklets

Source repository for [IIIF Bookmarklets website](http://iiif-bookmarklets.netlify.app).

This site uses [Jekyll](https://jekyllrb.com) and the [Just the Docs](https://just-the-docs.com) theme. Deployed with [Netlify](https://www.netlify.com).

Bookmarklets are in the `_includes` directory; pages in `bookmarklets`.

## Local development

Install gems with bundler: `bundle`

Run the development server: `bundle exec jekyll serve`

## Minify Javascript

To minify Javascript [UglifyJS](https://github.com/mishoo/UglifyJS) is used.

Use the following command:

```zsh
uglifyjs [filename].js -b quote_style=1,beautify=false  > [filename].min.js
```

This makes sure single quotes are preserved (otherwise it won't be possible to include the script in a link tag).

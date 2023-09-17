---
layout: default
title: Universal Viewer
parent: Tools
permalink: /tools/universal-viewer/
---
# Universal Viewer

This bookmarklet opens the current address in [Universal Viewer](http://universalviewer.io).

{% include instructions.md %}

<a href="{% include universal-viewer.js%}">Open in Universal Viewer</a>{: .btn .fs-5 .mb-4 .mb-md-0 }

## Source code

```js
{% include universal-viewer.js %}
```

## Get Manifest parameter
Sometimes you want to get the manifest parameter after having opened something in Universal Viewer.

{% include instructions.md %}

<a href="{% include manifest-param.min.js%}">Get IIIF Manifest</a>{: .btn .fs-5 .mb-4 .mb-md-0 }

```js
{% include manifest-param.js %}
```
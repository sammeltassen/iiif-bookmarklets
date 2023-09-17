---
layout: default
title: Mirador
parent: Tools
permalink: /tools/mirador/
---
# Mirador

This bookmarklet opens the current address in [Mirador](https://projectmirador.org).

{% include instructions.md %}

<a href="{% include mirador.js%}">Open in Mirador</a>{: .btn .fs-5 .mb-4 .mb-md-0 }

## Source code

```js
{% include mirador.js%}
```

## Get Manifest parameter
Sometimes you want to get the manifest parameter after having opened something in Mirador.

{% include instructions.md %}

<a href="{% include manifest-param.min.js%}">Get IIIF Manifest</a>{: .btn .fs-5 .mb-4 .mb-md-0 }

```js
{% include manifest-param.js %}
```
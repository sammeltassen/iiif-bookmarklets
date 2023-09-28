---
layout: default
title: Leventhal Map & Education Center
parent: Collections
permalink: /collections/leventhalmap/
nav_order: 2.4
---
# Leventhal Map & Education Center
Bookmarklet to open an item directly in Allmaps. It checks if a Georeference Annotation is available and subsequently opens the item in the Allmaps Editor or Allmaps Viewer.

{% include instructions.md %}

<a href="{% include leventhalmap.min.js%}">Open in Allmaps</a>{: .btn .fs-5 .mb-4 .mb-md-0 }

## Testing

| Title | Type |
| --- | --- |
| [1903 Map of Salem and surrounding places](https://collections.leventhalmap.org/search/commonwealth:x059cb867) | Manifest |
| [Portolan atlas](https://collections.leventhalmap.org/search/commonwealth:q524n163k) | Manifest |

[Using the digital collections](https://www.leventhalmap.org/collections/digital-collections/)

## Source code

```js
{% include leventhalmap.js%}
```
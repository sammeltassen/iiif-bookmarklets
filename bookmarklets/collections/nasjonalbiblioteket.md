---
layout: default
title: Nasjonalbiblioteket
parent: Collections
permalink: /collections/nasjonalbiblioteket/
nav_order: 2.3
---
# National Library of Norway
Bookmarklet to open an item directly in the Allmaps Editor.

{% include instructions.md %}

<a href="{% include nasjonalbiblioteket-allmaps.min.js%}">Open in Allmaps Editor</a>{: .btn .fs-5 .mb-4 .mb-md-0 }

## Testing

| Title | Type |
| --- | --- |
| [Kart over Hommelviken i 1:3000   ](https://www.nb.no/items/336678d379874af1a5ad7c9c1b532dd7) | Manifest |
| [Hydrografisk Kart over det sydlige Norge](https://www.nb.no/items/4be58ba9171d0ad7c26001d2a21cb5a2) | Manifest |

[Search results for digitized maps](https://www.nb.no/search?mediatype=kart&viewability=ALL)

## Source code

```js
{% include nasjonalbiblioteket-allmaps.js%}
```
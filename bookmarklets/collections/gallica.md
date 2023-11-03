---
layout: default
title: Gallica
parent: Collections
permalink: /collections/gallica/
nav_order: 2.5
---
# La Bibliothèque nationale de France
Bookmarklet to open an item from Gallica directly in the Allmaps Editor.

{% include instructions.md %}

<a href="{% include gallica-allmaps.min.js%}">Open in Allmaps Editor</a>{: .btn .fs-5 .mb-4 .mb-md-0 }

## Testing

| Title | Type |
| --- | --- |
| [Architectonographie des théâtres de Paris](https://gallica.bnf.fr/ark:/12148/bpt6k1526013d) | Manifest |
| [Nouveau plan de Paris](https://gallica.bnf.fr/ark:/12148/btv1b532238549) | Manifest |

[Browse more digitized maps here](https://gallica.bnf.fr/html/und/cartes/cartes?mode=desktop)

## Source code

```js
{% include gallica-allmaps.js%}
```
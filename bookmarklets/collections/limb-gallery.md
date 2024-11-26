---
layout: default
title: Limb Gallery
parent: Collections
permalink: /collections/limb-gallery/
nav_order: 2.6
---
# Limb Gallery
Many french archives use Arkhênum's [Limb Gallery](https://limbgallery.com/) software to publish their digital collections. IIIF Manifests are available for items in Limb Gallery but the links are not always published in the interface. This bookmarklet opens the IIIF Manifest from a viewer, but also from a permalink or item webpage.

{% include instructions.md %}

<a href="{% include limb-gallery.min.js%}">Get IIIF Manifest</a>{: .btn .fs-5 .mb-4 .mb-md-0 }

## Testing
Some links to test the bookmarklet:

| Item                                                                  | Institution                                                                                                       |
|-----------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| Plan de Dieppe, item permalink                                        | https://patrimoine.dieppe.fr/idurl/1/14995                                                                        |
| Plan de Dieppe, item page (collection)                                | https://patrimoine.dieppe.fr/collection/item/14995-plan-de-dieppe-avec-les-fortifications-et-les-travaux-projetes |
| Plan de Dieppe, viewer                                                | https://patrimoine.dieppe.fr/viewer/14995/?offset=#page=1&viewer=picture&o=bookmarks&n=0&q=                       |
| Cadastre vue générale de Bazas ville et campagne, item page (records) | https://archives-numeriques.ville-bazas.fr/records/item/9038-cadastre-vue-generale-de-bazas-ville-et-campagne     |

{: .warning }
Due to different configurations this bookmarket will not work for all CONTENTdm collections. Feel free to open an [issue](https://github.com/sammeltassen/iiif-bookmarklets/issues/new) to add support for a specific collection.

## Source code

```js
{% include limb-gallery.js%}
```

Minimized version:

```js
{% include limb-gallery.min.js%}
```
---
layout: default
title: CONTENTdm
parent: Collections
permalink: /collections/content-dm/
nav_order: 2.2
---
# CONTENTdm
Many institutions use OCLC's [CONTENTdm](https://www.oclc.org/en/contentdm.html) to publish their digital collections. IIIF Manifests are available for items in CONTENTdm but the links are not always published in the interface. This bookmarklet opens the IIIF Manifest for the page.

{% include instructions.md %}

<a href="{% include content-dm.min.js%}">Get IIIF Manifest</a>{: .btn .fs-5 .mb-4 .mb-md-0 }

## Testing
Some links to test the bookmarklet:

| Item | Institution |
| --- | --- |
| [Caarte vande polder van Nieuw-Helle-Voet / I. Luiken fecit cum aqua forti ; A. Steyaart invenit ; I. Stemmers sculpsit](https://vu.contentdm.oclc.org/digital/collection/krt/id/2714/rec/39) | [Vrije Universiteit](https://vu.contentdm.oclc.org/digital/collection/krt) |
| [Atlas factice of Kaartboek van Rijnland, Delfland en Schieland](https://images.wur.nl/digital/collection/coll21/id/1019/rec/4) | [Wageningen University & Research](https://www.wur.nl/en/library/special-collections/maps-atlases.htm) |
| [Tabulae Dominii Groeningae qvae et complectitur maximam partem Drentiae](https://facsimile.ub.rug.nl/digital/collection/Kaarten/id/1155/rec/7) | [University of Groningen](https://facsimile.ub.rug.nl/digital/collection/Kaarten/search) |
| [Nieuwe geographische en historische atlas, van de Zeven Vereengde Nederlandsche Provintien](https://bijzonderecollecties.ubn.ru.nl/digital/collection/p21010coll14/id/717440/rec/1) | [Radboud](https://bijzonderecollecties.ubn.ru.nl/digital/) |


{: .warning }
Due to different configurations this bookmarket will not work for all CONTENTdm collections. Feel free to open an [issue](https://github.com/sammeltassen/iiif-bookmarklets/issues/new) to add support for a specific collection.

## Source code

```js
{% include content-dm.js%}
```

Minimized version:

```js
{% include content-dm.min.js%}
```
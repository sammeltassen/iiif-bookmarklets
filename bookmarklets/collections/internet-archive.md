---
layout: default
title: Internet Archive
parent: Collections
permalink: /collections/internet-archive/
nav_order: 2.1
---

# Internet Archive

## Get Manifest

Opens the IIIF Manifest or Collection URL of the current page on [archive.org](https://archive.org). If the manifest cannot be loaded, it prompts the user to create a GitHub issue in the [iiif repository](https://github.com/internetarchive/iiif/) of the Internet Archive.

{% include instructions.md %}

<a href="{% include internet-archive.min.js%}">Get IIIF Manifest</a>{: .btn .fs-5 .mb-4 .mb-md-0 }

## Testing

Some links to test the bookmarklet:

| Title                                                                                              | Type       |
| -------------------------------------------------------------------------------------------------- | ---------- |
| [Digital Piranesi](https://archive.org/details/digital-piranesi-v17)                               | Collection |
| [Ichnographiam Campi Martii antiquae urbis](https://archive.org/details/piranesi-ia-vol10-007.jpg) | Image      |

{: .warning }
The IIIF implementation at the Internet Archive is still being tested, and many items might not (yet) be available. This bookmarklet will be adapted when the official documentation of the APIs is published.

## Source code

```js
{% include internet-archive.js%}
```

Minimized version (used to create the link above):

{: .note }
For the minimized version, comments, spaces and newlines are removed from the code above. You can copy this code, create a new bookmark, and paste it in the address or url field.

```js
{% include internet-archive.min.js%}
```

## Open in Allmaps Editor

Opens the IIIF Manifest or Collection URL directly in Allmaps Editor.

{% include instructions.md %}

<a href="{% include internet-archive-allmaps.min.js%}">Open in Allmaps Editor</a>{: .btn .fs-5 .mb-4 .mb-md-0 }

## Source code

```js
{% include internet-archive-allmaps.js%}
```

Minimized version (used to create the link above):

{: .note }
For the minimized version, comments, spaces and newlines are removed from the code above. You can copy this code, create a new bookmark, and paste it in the address or url field.

```js
{% include internet-archive-allmaps.min.js%}
```

## See also

- [IA-IIIF-bookmarklet.js](https://gist.github.com/pbinkley/c30ee85d5ac4590dba3fa8c596d7d358)

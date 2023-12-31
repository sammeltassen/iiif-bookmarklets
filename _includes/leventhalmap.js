javascript: (async function () {
    const id = window.location.href.match(/(commonwealth:[^?#]*)/)[1];
    const manifest = `https://collections.leventhalmap.org/search/${id}/manifest.json`;
    const encodedManifestUrl = encodeURIComponent(manifest);
    const editorBase = "https://editor.allmaps.org/#/collection?url=";
    const viewerBase = "https://viewer.allmaps.org/?url=";
    const annotationUrl = `https://annotations.allmaps.org/?url=${encodedManifestUrl}`;
    const response = await fetch(annotationUrl).then((response) => response.json());
    if (response.error) {
        window.location = editorBase + encodedManifestUrl
    } else {
        window.location = viewerBase + annotationUrl
    }
})()
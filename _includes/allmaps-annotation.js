javascript: (async function () {
    // Encode the current url in the address bar 
    const encodedManifestUrl = encodeURIComponent(window.location.href);
    // Construct url to check for annotation
    const annotationUrl = `https://annotations.allmaps.org/?url=${encodedManifestUrl}`;
    // Base url to open manifest in the Allmaps Editor
    const editorBase = "https://editor.allmaps.org/#/collection?url=";
    // Try to fetch annotation
    const response = await fetch(annotationUrl).then((response) => response.json());
    // If it doesn't exist, prompt user to open it in the Allmaps Editor
    if (response.error) {
        if (window.confirm("Annotation not found. Would you like to open the manifest in the Allmaps Editor?")) {
            location = editorBase + encodedManifestUrl
        }
    } else {
        // If it does exist, open the annotation
        location = annotationUrl
    }
})()
javascript: (function () {
    // Split params from url and get the manifest param
    const params = window.location.href.split('?')[1];
    const encodedManifest = new URLSearchParams(params).get('manifest');
    // Decode param and navigate to manifest
    if (encodedManifest) {
        const decodedManifest = decodeURIComponent(encodedManifest);
        location = decodedManifest
    } else {
        // Or alert the user that no manifest was found
        window.alert('No manifest found!')
    }
})()
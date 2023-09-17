javascript: (function () {
    // Get all the relevant parts from the url
    const regexPattern = /http.*:\/\/(?<base>.*?)\/digital\/collection\/(?<collection>.*?)\/id\/(?<id>\w*)/;
    const matches = window.location.href.match(regexPattern).groups;
    // Construct the manifest url
    const manifestUrl =
        'https://' +
        matches.base +
        '/iiif/' +
        matches.collection +
        ':' +
        matches.id +
        '/' +
        'manifest.json';
    // Navigate to the manifest
    location = manifestUrl;
})()
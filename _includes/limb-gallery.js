javascript: (function () {
    // Get all the relevant parts from the url
    // See https://regex101.com/r/t7nUZQ/1
    const regexPattern = /http.*:\/\/(?<base>.*?)\/(idurl\/\w*\/|viewer\/|collection\/item\/|records\/item\/)(?<id>\w*)/;
    const matches = window.location.href.match(regexPattern).groups;
    // Construct the manifest url
    const manifestUrl =
        'https://' +
        matches.base +
        '/iiif/' +
        matches.id +
        '/' +
        'manifest';
    // Navigate to the manifest
    location = manifestUrl;
})()
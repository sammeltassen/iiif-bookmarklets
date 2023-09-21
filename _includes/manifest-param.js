javascript: (function () {
    // Split params from url and get the manifest or url param
    const params = new URLSearchParams(window.location.href.split("?")[1]);
    const manifestUri = params.get("manifest") || params.get("url");
    // Navigate to manifest
    if (manifestUri) {
        window.location = manifestUri;
    } else {
        // Or alert the user that no manifest was found
        window.alert("No manifest found!");
    }
})()
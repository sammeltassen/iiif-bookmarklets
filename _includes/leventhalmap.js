javascript: (function () {
    const id = window.location.href.match(/(commonwealth:[^?#]*)/)[1];
    const manifest = `https://collections.leventhalmap.org/search/${id}/manifest.json`;
    const editorBase = "https://editor.allmaps.org/#/collection?url=";
    window.location = editorBase + encodeURIComponent(manifest);
})()
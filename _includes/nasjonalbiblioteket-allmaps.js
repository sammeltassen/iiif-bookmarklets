javascript: (function () {
  const id = window.location.href.match(/nb.no\/items\/([^/?]*)/)[1];
  const manifest = `https://api.nb.no/catalog/v1/iiif/${id}/manifest`;
  const editorBase = "https://editor.allmaps.org/#/collection?url=";
  location = editorBase + encodeURIComponent(manifest);
})();

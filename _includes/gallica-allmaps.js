javascript: (function () {
    const id = window.location.href.match(/ark:\/\d*\/([^/?.#]*)/)[1];
    const manifest = `https://gallica.bnf.fr/iiif/ark:/12148/${id}/manifest.json`;
    const editorBase = "https://editor.allmaps.org/#/collection?url=";
    location = editorBase + encodeURIComponent(manifest);
  })();
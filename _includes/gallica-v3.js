javascript: (function () {
    const id = window.location.href.match(/ark:\/\d*\/([^/?.#]*)/)[1];
    location = `https://openapi.bnf.fr/iiif/presentation/v3/ark:/12148/${id}/manifest.json`;
  })();
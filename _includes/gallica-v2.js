javascript: (function () {
    const id = window.location.href.match(/ark:\/\d*\/([^/?.#]*)/)[1];
    location = `https://gallica.bnf.fr/iiif/ark:/12148/${id}/manifest.json`;
  })();
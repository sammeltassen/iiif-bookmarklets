javascript: (function () {
    const id = window.location.href.match(/nb.no\/items\/([^/?]*)/)[1];
    location = `https://api.nb.no/catalog/v1/iiif/${id}/manifest`;
  })();
javascript: (async function () {
  // Editor base URL
  const editorBaseUrl = "https://editor.allmaps.org/#/collection?url=";
  // Check if visiting a page on archive.org
  if (window.location.href.includes("archive.org/details/")) {
    // Find the id of the current page
    const id = window.location.href.match(
      /https:\/\/archive.org\/details\/([^/?]*)/
    )[1];
    // Check if the page is an item or collection
    const type = document.head.querySelector("[property~=mediatype][content]")
      ? "manifest"
      : "collection";
    // Construct the manifest uri
    const manifestUri = `https://iiif.archive.org/iiif/3/${id}/${type}.json`;
    try {
      // Try to fetch the manifest
      await fetch(manifestUri).then((response) => response.json());
      // If successfull, load the manifest in Allmaps Editor
      location = editorBaseUrl + encodeURIComponent(manifestUri);
    } catch {
      // If unsuccessfull, prompt user to create an issue on github
      if (
        window.confirm(
          `Cannot load ${type}. Would you like to create an issue on GitHub?`
        )
      ) {
        // Prefill the issue form
        location = `https://github.com/internetarchive/iiif/issues/new?title=Cannot+load+IIIF+${type}&body=Hi,+I+was+not+able+to+load+the+IIIF+${type}+for+the+page+${window.location.href}.+I+tried+the+following+uri:+${manifestUri}.+Thank+you+for+taking+a+look!`;
      }
    }
  }
})();

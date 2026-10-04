// GitHub Pages serves the repository root. Keep its entry pointed at the current site.
// Preserve fragment links and query parameters when arriving through the original URL.
window.location.replace(new URL('./still-becoming-v2/' + window.location.search + window.location.hash, window.location.href).href);

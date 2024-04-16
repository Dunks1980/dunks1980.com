import bay from 'https://cdn.jsdelivr.net/npm/@dunks1980/bay.js@3.3.7/bay.min.mjs';
bay();
fetch("./components/welcome.html")
    .then(response => response.text())
    .then(html => {
      bay.create("d-welcome", html, ["prop-color"]);
    });
import bay from 'https://cdn.jsdelivr.net/npm/@dunks1980/bay.js@latest/bay.min.mjs';
bay();
fetch("./components/welcome.html")
  .then(response => response.text())
  .then(html => {
    bay.create("d-welcome", html, ["prop-color"]);
  });


function update(e) {
  e.stopPropagation(); // Prevent event propagation

  var x = e.clientX;
  var y = e.clientY;
  var parentRect = document.body.getBoundingClientRect(); // Use document.body instead of child elements
  var offsetX = x - parentRect.left; // Calculate offsetX relative to the main body
  var offsetY = y - parentRect.top; // Calculate offsetY relative to the main body

  // Get the position of whole container 
  var containerRect = document.querySelector('.whole-container').getBoundingClientRect();
  var containerX = containerRect.left;
  var containerY = containerRect.top;
  offsetX = offsetX - containerX;
  offsetY = offsetY - containerY;
  document.documentElement.style.setProperty('--cX', offsetX + 'px');
  document.documentElement.style.setProperty('--cY', offsetY + 'px');

  // Calculate shadow position opposite to the light
  var shadowX = (-offsetX + parentRect.width / 2) / 6; // Adjust the factor (6) to control the effect
  var shadowY = (-offsetY + parentRect.height / 2) / 6; // Adjust the factor (6) to control the effect
  document.documentElement.style.setProperty('--sX', shadowX + 'px');
  document.documentElement.style.setProperty('--sY', shadowY + 'px');
}

document.addEventListener('mousemove', update);

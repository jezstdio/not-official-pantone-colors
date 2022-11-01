// Fetched from this site: https://www.pantone-colours.com/

const min = 5893;
const max = 6651;
const divs = Array.from(document.querySelectorAll("[id^=div]"));
const colors = divs.map(div => {
  return `${div.textContent.trim()}: ${getComputedStyle(div.parentElement).backgroundColor}`
}).filter(a => a);

console.log(colors);
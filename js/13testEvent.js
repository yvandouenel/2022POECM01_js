const h1 = document.querySelector("h1");

console.log(`h1`, h1);
h1.onclick = function () {
  console.log(`Clic sur H1`);
}
h1.onmouseover = function () {
  console.log(`survol sur H1`);
}

const a = document.querySelector("a");

a.onclick = handleClick;
function handleClick(event) {
  console.log(`Dans handleClick`);
  event.preventDefault();
  const target = event.target;
  console.log(`target :`, target);
}
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createCircle() {
  const circle = document.createElement("div");
  const size = Math.floor(Math.random() * 20 + 5);
  const max = 100 - size;
  const x = Math.floor(Math.random() * max);
  const y = Math.floor(Math.random() * max);
  //console.log(`circle ${size}\t${x}-${y}`);

  circle.className = "circle";
  circle.style.width = `${size}vw`;
  circle.style.height = `${size}vw`;
  circle.style.left = `${x}vw`;
  circle.style.top = `${y}vh`;
  circle.style.backgroundColor = getRandomColor();

  document.body.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 600000);
}

createCircle();
setInterval(createCircle, 4000);

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
  const size = Math.random() * 200 + 50;
  const x = Math.random() * (window.innerWidth - size);
  const y = Math.random() * (window.innerHeight - size);

  circle.className = "circle";
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  circle.style.backgroundColor = getRandomColor();

  document.body.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 600000);
}

createCircle();
setInterval(createCircle, 2000);

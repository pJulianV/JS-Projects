var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var isDrawing = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);

function startDrawing(event) {
  isDrawing = true;
  draw(event);
}

function draw(event) {
  if (!isDrawing) return;
  
  var x = event.clientX;
  var y = event.clientY;
  
  var rect = canvas.getBoundingClientRect();
  x -= rect.left;
  y -= rect.top;
  
  context.lineWidth = 5;
  context.lineCap = 'round';
  context.strokeStyle = 'black';
  
  context.lineTo(x, y);
  context.stroke();
  context.beginPath();
  context.moveTo(x, y);
}

function stopDrawing() {
  isDrawing = false;
  context.beginPath();
}

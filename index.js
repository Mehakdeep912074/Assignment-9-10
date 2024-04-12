document.addEventListener("DOMContentLoaded", function() {
    // Get canvas and context
    var canvas = document.getElementById("main");
    var ctx = canvas.getContext("2d");
  
    // Set initial brush color and size
    var brushColor = "#000000"; // black
    var brushSize = 5;
  
    // Set initial drawing state
    var isDrawing = false;
  
    // Event listeners for mouse actions
    canvas.addEventListener("mousedown", function(event) {
      isDrawing = true;
      draw(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop, false);
    });
  
    canvas.addEventListener("mousemove", function(event) {
      if (isDrawing) {
        draw(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop, true);
      }
    });
  
    canvas.addEventListener("mouseup", function(event) {
      isDrawing = false;
    });
  
    canvas.addEventListener("mouseleave", function(event) {
      isDrawing = false;
    });
  
    // Drawing function
    function draw(x, y, isDragging) {
      ctx.beginPath();
      ctx.fillStyle = brushColor;
      ctx.arc(x, y, brushSize, 0, Math.PI * 2);
      ctx.fill();
      if (!isDragging) {
        ctx.closePath();
      }
    }
  
    // Event listener for clear button
    document.getElementById("erase").addEventListener("click", function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
  
    // Event listeners for color buttons
    document.getElementById("black").addEventListener("click", function() {
      brushColor = "#000000"; // black
    });
  
    document.getElementById("pink").addEventListener("click", function() {
      brushColor = "#F50057"; // pink
    });
  
    document.getElementById("blue").addEventListener("click", function() {
      brushColor = "#2979FF"; // blue
    });
  
    document.getElementById("yellow").addEventListener("click", function() {
      brushColor = "#FFD600"; // yellow
    });
  
    // Event listener for brush size slider
    var slider = document.getElementById("slider");
    var brushSizeDisplay = document.getElementById("brushSize");
    brushSizeDisplay.textContent = slider.value;
  
    slider.addEventListener("input", function() {
      brushSize = parseInt(slider.value);
      brushSizeDisplay.textContent = brushSize;
    });
  
    // Event listener for new button
    document.getElementById("new").addEventListener("click", function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
  });
  
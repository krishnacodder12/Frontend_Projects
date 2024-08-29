function changeColor(button) {
    var colors = ['#3498db', '#2ecc71', '#e74c3c', '#f39c12'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    button.style.backgroundColor = randomColor;
  }
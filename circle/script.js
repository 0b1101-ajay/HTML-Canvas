const canvas = document.querySelector('canvas');           // Grab canvas from DOM
const pen = canvas.getContext('2d');                       // Get context to access 2D canvas functions
const Width = window.innerWidth;                           // Set Width to full width of window
const Height = window.innerHeight;                         // Set Height to full height of window

canvas.width = Width*0.95;                                 // Set canvas' width equal to 95% 0f Width  
canvas.height = Height*0.95;                               // Set canvas' height equal to 95% of Height

pen.fillStyle = 'blue';                                    

pen.strokeStyle = 'red';

var x = 200;
var y = 200;
var dx = 5;
var dy = 2;

var radius = 30;

function animate() {
    
    requestAnimationFrame(animate);
    pen.clearRect(0, 0, Width, Height);
    pen.beginPath();
    pen.arc(x, y, radius, 0, Math.PI*2, true);
    pen.fill();

    if (x + radius>canvas.width  || x<radius) {
        dx = -1*dx;
    }

    if (y + radius>canvas.height  || y<radius) {
        dy = -1*dy;
    }
    x += dx;
    y +=dy;
    console.log(x)
}


animate();
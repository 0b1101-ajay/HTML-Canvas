const canvas = document.querySelector('canvas');           // Grab canvas from DOM
const pen = canvas.getContext('2d');                       // Get context to access 2D canvas functions
const Width = window.innerWidth;                           // Set Width to full width of window
const Height = window.innerHeight;                         // Set Height to full height of window

canvas.width = Width*0.95;                                 // Set canvas' width equal to 95% 0f Width  
canvas.height = Height*0.95;                               // Set canvas' height equal to 95% of Height

pen.fillStyle = 'blue';                                    

pen.strokeStyle = 'red';                                     



// Drawing filled Rectangles 
pen.fillRect(100, 100, Width*0.4, Height*0.4);


// Drawing Stroked Rectangle
pen.strokeRect(200, 200, Width*0.4, Height*0.4);


// Drawing Circles & Arcs
pen.fillStyle = 'red';  
pen.arc(300, 300, 50, 0, Math.PI*2, true);
pen.fill();


pen.arc(400, 400, 50, 0, Math.PI*2, true);
pen.stroke();


// Drawing line
pen.beginPath();
pen.strokeStyle = 'black';
pen.moveTo(400, 400);
pen.lineTo(300,300);
pen.stroke()


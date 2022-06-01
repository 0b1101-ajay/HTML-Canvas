# Canvas Cheat Sheet

### Initial Setup
```
  const canvas = document.querySelector('canvas');           // Grab canvas from DOM
  const pen = canvas.getContext('2d');                       // Get context to access 2D canvas functions
  const Width = window.innerWidth;                           // Set Width to full width of window
  const Height = window.innerHeight                          // Set Height to full height of window
  
  canvas.width = Width*0.95;                                 // Set canvas' width equal to 95% 0f Width  
  canvas.height = Height*0.95;                               // Set canvas' height equal to 95% of Height
```

```
<<<<<<< HEAD
  pen.fillStyle = 'blue';                                   

  pen.strokeStyle = 'red';                                   
=======
  pen.fillStyle = 'blue';                                    // Set the color 
>>>>>>> fcdcf8ee5fdec7043ff3167578f025e27ba835a1
```

### Drawing Basic Shapes

#### Rectangles-filled
```
  pen.fillRect(x, y, width, height);
```

#### Rectangles-Stroked
```
  pen.strokeRect(x, y, width, height);
```

#### Circles & Arcs
```
  pen.arc(x, y, radius, startAngle, endAngle, drawClockwise);// Creates outline of the given circle to show on screen          
  pen.fill()                                                 // To draw stroked circle or arc               
  pen.stroke()                                               // To draw filled circle or arc
```

#### Lines
```
  pen.beginPath();
  pen.strokeStyle = 'black';
  pen.moveTo(400, 400);
  pen.lineTo(300,300);
  pen.stroke()
```

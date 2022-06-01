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
  pen.fillStyle = 'blue';                                    // Set the color 
```

### Drawing Basic Shapes

#### Rectangles-filled
```
  pen.fillRect(x, y, width, height);
```

#### Rectangles-Stroked
```
  pen.fillRect(x, y, width, height);
```

#### Circles & Arcs
```
  pen.arc(x, y, radius, startAngle, endAngle, drawClockwise);
```

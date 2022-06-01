# Canvas Cheat Sheet

### Initial Setup
```
  const canvas = document.querySelector('canvas');           // Grab canvas from DOM
  const pen = canvas.getContext('2d');                       // Get context to access 2D canvas functions
  const Width = window.innerWidth;                           // Set Width to full width of window
  const Height = window.innerHeight                          // Set Height to full height of window
  
  canvas.width = Width;                                      // Set canvas' width equal to Width  
  canvas.height = Height;                                    // Set canvas' height equal to Height
```

```
  pen.fillStyle = 'blue;                                     // Set the color 
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

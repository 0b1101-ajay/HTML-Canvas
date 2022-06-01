const canvas = document.querySelector('canvas');


Width = window.innerWidth;
Height = window.innerHeight;

canvas.height = Height*0.95;
canvas.width = Width*0.95;


const pen = canvas.getContext('2d');
pen.fillStyle = 'black';


pen.fillRect(100, 100, Width/2, Height/2);


console.log(canvas);
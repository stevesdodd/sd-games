const draw = () => {

  const canvas: HTMLCanvasElement = document.getElementById("gameCanvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");
  
  ctx?.clearRect(0, 0, canvas.width, canvas.height);
  ctx?.fillRect(0, 0, 50, 50)
  console.log('game1')
}

export default draw

draw()

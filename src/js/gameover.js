function gameover() {
  if (sessionStorage.__state === 'start') {
    setTimeout(function() {
      _play()
    }, 200)
  }

  var tilesmap = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ]
  
  map = _mapBuilder('./src/images/roguelikeSheet_transparent.png', tilesmap)

  setTimeout(function() {
    var logo = new Image
    logo.src = './src/images/logo.png'
    logo.onload = function() {
      context.drawImage(logo, 0,0, 1080,139, 90,90, 400,60)
    }

    var instruction = new Image
    instruction.src = './src/images/gameover.png'
    instruction.onload = function() {
      context.drawImage(instruction, 0,0, 1080,594, 88,260, 400,260)
    }

    editor.setValue('// Write your code here')
  }, 200)
}

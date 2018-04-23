var context = document.getElementById('canvas').getContext('2d')
var blocker = [1]

var map
var character
var oncompile


function _play() {
  new Audio('./src/audio/kenney_digitalaudio/Audio/phaserUp4.ogg').play()
  sessionStorage.__state = 'play'
}

function _init() {
  context.clearRect(0, 0, 590, 590)
  oncompile = false

  if (!localStorage.__level) {
    localStorage.__level = 0
  }
  if (!sessionStorage.__state) {
    sessionStorage.__state = 'splash'
  }

  if (sessionStorage.__state === 'splash') {
    splash()
  } else if (sessionStorage.__state === 'play' || sessionStorage.__state === 'start') {
    try {
      eval(`level${localStorage.__level}()`)
    } catch(err) {
      new Audio('./src/audio/kenney_digitalaudio/Audio/powerUp1.ogg').play()
      gameover()
    }
  }
}

function _mapBuilder(srcImage, tiles) {
  var map = new Image
  map.src = srcImage

  map.onload = function() {
    for(let row in tiles) {
      for(let col in tiles[row]) {
        context.drawImage(map, 85,0, 16,16, 96*col,96*row, 96,96)
        if (tiles[row][col] === 1) {
          context.drawImage(map, 153,0, 16,16, 96*col,96*row, 96,96)
        } else if (tiles[row][col] === 2) {
          context.drawImage(map, 629,51, 16,16, 96*col+9,96*row+8, 80,80)
        } else if (tiles[row][col] === 3) {
          context.drawImage(map, 612,51, 16,16, 96*col+9,96*row+8, 80,80)
        } else if (tiles[row][col] === 4) {
          context.drawImage(map, 273,137, 16,16, 96*col+20,96*row+18, 60,60)
        }
      }
    }
  }
  return {
    image: map, srcImage, tiles
  }
}

function _charaterBuilder(srcImage, x, y, state) {
  var charater = new Image
  charater.src = srcImage

  var footstepsound1 = new Audio('./src/audio/kenney_rpgaudio/Audio/footstep02.ogg')
  var footstepsound2 = new Audio('./src/audio/kenney_rpgaudio/Audio/footstep06.ogg')

  charater.onload = function() {
    if (state === 'idle') {
      context.drawImage(charater, 0,12, 77,107, 96*x+14,96*y, 71,96)
    } else if (state === 'right-1') {
      context.drawImage(charater, 0,120, 77,107, 96*x+14,96*y, 71,96)
      footstepsound1.play()
    } else if (state === 'right-2') {
      context.drawImage(charater, 80,120, 77,107, 96*x+14,96*y, 71,96)
      footstepsound2.play()
    } else if (state === 'left-1') {
      context.drawImage(charater, 640,450, 77,107, 96*x+14,96*y, 71,96)
      footstepsound1.play()
    } else if (state === 'left-2') {
      context.drawImage(charater, 560,450, 77,107, 96*x+14,96*y, 71,96)
      footstepsound2.play()
    } else if (state === 'up-1') {
      context.drawImage(charater, 480,0, 77,107, 96*x+14,96*y, 71,96)
      footstepsound1.play()
    } else if (state === 'up-2') {
      context.drawImage(charater, 400,0, 77,107, 96*x+14,96*y, 71,96)
      footstepsound2.play()
    } else if (state === 'down-1') {
      context.drawImage(charater, 160,10, 77,107, 96*x+14,96*y, 71,96)
      footstepsound1.play()
    } else if (state === 'down-2') {
      context.drawImage(charater, 80,120, 77,107, 96*x+14,96*y, 71,96)
      footstepsound2.play()
    } else if (state === 'win-1') {
      context.drawImage(charater, 640,10, 77,107, 96*x+14,96*y, 71,96)
      new Audio('./src/audio/kenney_digitalaudio/Audio/powerUp2.ogg').play()
    } else if (state === 'win-2') {
      context.drawImage(charater, 560,10, 77,107, 96*x+14,96*y, 71,96)
    }
  }

  return {
    image: charater, srcImage, x, y, state
  }
}

async function up(n) {
  for (var i=1; i<n; i++) {
    await move('up')
  }
  return move('up')
}

async function down(n) {
  for (var i=1; i<n; i++) {
    await move('down')
  }
  return move('down')
}

async function left(n) {
  for (var i=1; i<n; i++) {
    await move('left')
  }
  return move('left')
}

async function right(n) {
  for (var i=1; i<n; i++) {
    await move('right')
  }
  return move('right')
}

function isKey() {
  return map.tiles[character.y][character.x] === 4
}

function getKey() {
  if (isKey()) {
    new Audio('./src/audio/kenney_rpgaudio/Audio/handleCoins.ogg').play()
    return new Promise(function(resolve, reject) {
      swal('Good Job!', 'He got a key! Now, go to the door.', 'success')
      .then(function() {
        map.tiles[character.y][character.x] = 0
        for(let row in map.tiles) {
          for(let col in map.tiles[row]) {
            if (map.tiles[row][col] === 3) {
              map.tiles[row][col] = 2
              new Audio('./src/audio/kenney_rpgaudio/Audio/doorOpen_1.ogg').play()
              break
            }
          }
          resolve()
        }
      })
    })
  }
  new Audio('./src/audio/kenney_digitalaudio/Audio/zapThreeToneDown.ogg').play()
  return swal('Runtime Error', 'No item found', 'error')
    .then(function() {
      _init()
    })
}

function move(direction) {
  if (['right', 'left', 'up', 'down'].indexOf(direction) === -1) {
    new Audio('./src/audio/kenney_digitalaudio/Audio/zapThreeToneDown.ogg').play()
    swal('Compile Error', `Direction ${direction} not found!`, 'error')
    .then(function() {
      _init()
    })
    return { map, character }
  }
  var oldX = character.x
  var oldY = character.y

  if (direction === 'right' && character.x + 1 > -1 && character.x + 1 < map.tiles.length 
      && blocker.indexOf(map.tiles[character.y][character.x + 1]) === -1) {
    character.x += 1
  } else if (direction === 'left' && character.x - 1 > -1 && character.x - 1 < map.tiles.length 
      && blocker.indexOf(map.tiles[character.y][character.x - 1]) === -1) {
    character.x -= 1
  } else if (direction === 'up' && character.y - 1 > -1 && character.y - 1 < map.tiles.length 
      && blocker.indexOf(map.tiles[character.y - 1][character.x]) === -1) {
    character.y -= 1
  } else if (direction === 'down' && character.y + 1 > -1 && character.y + 1 < map.tiles.length 
      && blocker.indexOf(map.tiles[character.y + 1][character.x]) === -1) {
    character.y += 1
  } else {
    return new Promise(function(resolve, reject) {
      new Audio('./src/audio/kenney_digitalaudio/Audio/zapThreeToneDown.ogg').play()
      swal('Runtime Error', 'Whoops! He can\'t find the way.', 'error')
      .then(function() {
        _init()
      })
    })
  }
  return new Promise(function(resolve, reject) {
    _moveHelper(oldX, oldY, direction)
    .then(function() {
      resolve()
    })
  })
}

function _moveHelper(oldX, oldY, direction, callback) {
  var newX = character.x, newY = character.y
  var step = 0
  return new Promise(function(resolve, reject) {
    var period = setInterval(function() {
      context.clearRect(0, 0, 590, 590)
      map = _mapBuilder(map.srcImage, map.tiles)
  
      if (oldX == newX && oldY == newY) {
        character = _charaterBuilder(character.srcImage, oldX, oldY, 'idle')
        clearInterval(period)
        resolve()
      } else {
        if (oldX < newX) {
          oldX += 0.1
        } else if (oldX > newX) {
          oldX -= 0.1
        }
  
        if (oldY < newY) {
          oldY += 0.1
        } else if (oldY > newY) {
          oldY -= 0.1
        }
  
        step = (step + 1) % 2
  
        oldX = Math.round(oldX * 100) / 100
        oldY = Math.round(oldY * 100) / 100
  
        character = _charaterBuilder(character.srcImage, oldX, oldY, `${direction}-${step + 1}`)
      }
    }, 120)
  })
}

function isDoor() {
  return map.tiles[character.y][character.x] === 2 || map.tiles[character.y][character.x] === 3
}

function _checkOver() {
  if (map.tiles[character.y][character.x] === 2) {
    var step = 0
    var overInterval = setInterval(function() {
      step = (step + 1) % 2
      context.clearRect(0, 0, 590, 590)
      map = _mapBuilder(map.srcImage, map.tiles)
      character = _charaterBuilder(character.srcImage, character.x, character.y, `win-${step + 1}`)
    }, 200)
    setTimeout(function() {
      new Audio('./src/audio/kenney_digitalaudio/Audio/powerUp11.ogg').play()
      clearInterval(overInterval)
      localStorage.__level = parseInt(localStorage.__level) + 1
      sessionStorage.__state = 'start'
      editor.setValue('')
      swal('Compiled', 'You\'re a good progamer, dude!', 'success')
      .then(function() {
        _init()
      })
    }, 2000)
  } else if (map.tiles[character.y][character.x] === 3) {
    setTimeout(function() {
      new Audio('./src/audio/kenney_digitalaudio/Audio/zapThreeToneDown.ogg').play()
      swal('Runtime Error', 'Pablo need a key to open the door!', 'error')
      .then(function() {
        _init()
      })
    }, 1000)
  } else {
    new Audio('./src/audio/kenney_digitalaudio/Audio/zapThreeToneDown.ogg').play()
    swal('Runtime Error', 'He can\'t find the door :(', 'error')
    .then(function() {
      _init()
    })
  }
  oncompile = false
}

function donothing(){}

function _run(text) {
  text = text.trim().split('\n').map(e => {
    e = e.trim()
    if (e.indexOf('up(') === 0 || e.indexOf('down(') === 0 
        || e.indexOf('left(') === 0 || e.indexOf('right(') === 0 || e.indexOf('getKey()') === 0) {
      return `try { await ${e} } catch(err) { reject(err) }`
    }
    return e
  }).join('\n')
  text = `(async function(){ try{ ${text}\ndonothing() } catch(err){ reject(err) }\nresolve() })()`

  return new Promise(function(resolve, reject) { eval(text) })
    .then(function() {
      if (sessionStorage.__state === 'play') {
        _checkOver()
      }
    }).catch(function(err) {
      if (err) {
        new Audio('./src/audio/kenney_digitalaudio/Audio/zapThreeToneDown.ogg').play()
        swal('Compile Error', err.message, 'error')
        .then(function() {
          _init()
        })
      }
    })
}

document.getElementById('go').addEventListener('click', function() {
  if (!oncompile) {
    if (sessionStorage.__state === 'play') {
      oncompile = true
    }
    _run(editor.getValue())
  }
  editor.focus()
})

_init()

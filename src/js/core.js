class Core {

  constructor(options) {
    this.mapSource = options && options.mapSource ? options.mapSource : './src/images/roguelikeSheet_transparent.png'
    this.playerSource = options && options.playerSource ? options.playerSource : './src/images/adventurer_tilesheet-alt.png'
    this.context = {
      ui: document.getElementById('ui').getContext('2d'),
      map: document.getElementById('map').getContext('2d'),
      player: document.getElementById('player').getContext('2d')
    }
  }

  buildMap(map) {
    this.clearMap()
    this.map = map

    let image = new Image
    image.src = this.mapSource

    let self = this

    image.onload = function() {
      for (let row in map) {
        for (let col in map[row]) {
          self.context.map.drawImage(image, 85,0, 16,16, 96*col,96*row, 96,96)
          switch(map[row][col]) {
            case 1:   // wall
              self.context.map.drawImage(image, 153,0, 16,16, 96*col,96*row, 96,96)
              break
            case 2:   // door open
              self.context.map.drawImage(image, 629,51, 16,16, 96*col+9,96*row+8, 80,80)
              break
            case 3:   // door close
              self.context.map.drawImage(image, 612,51, 16,16, 96*col+9,96*row+8, 80,80)
              break
            case 4:   // key
              self.context.map.drawImage(image, 273,137, 16,16, 96*col+20,96*row+18, 60,60)
              break
          }
        }
      }
    }
  }

  buildPlayer(player) {
    this.clearPlayer()
    this.player = player
    
    let image = new Image
    image.src = this.playerSource
    
    let self = this
    
    image.onload = function() {
      let footstepsound1 = new Audio('./src/audio/kenney_rpgaudio/Audio/footstep02.ogg')
      let footstepsound2 = new Audio('./src/audio/kenney_rpgaudio/Audio/footstep06.ogg')
      switch(player.state) {
        case 'idle':
          self.context.player.drawImage(image, 0,12, 77,107, 96*player.x+14,96*player.y, 71,96)
          break
        case 'right-1':
          self.context.player.drawImage(image, 0,120, 77,107, 96*player.x+14,96*player.y, 71,96)
          footstepsound1.play()
          break
        case 'right-2':
          self.context.player.drawImage(image, 80,120, 77,107, 96*player.x+14,96*player.y, 71,96)
          footstepsound2.play()
          break
        case 'left-1':
          self.context.player.drawImage(image, 640,450, 77,107, 96*player.x+14,96*player.y, 71,96)
          footstepsound1.play()
          break
        case 'left-2':
          self.context.player.drawImage(image, 560,450, 77,107, 96*player.x+14,96*player.y, 71,96)
          footstepsound2.play()
          break
        case 'up-1':
          self.context.player.drawImage(image, 480,0, 77,107, 96*player.x+14,96*player.y, 71,96)
          footstepsound1.play()
          break
        case 'up-2':
          self.context.player.drawImage(image, 400,0, 77,107, 96*player.x+14,96*player.y, 71,96)
          footstepsound2.play()
          break
        case 'down-1':
          self.context.player.drawImage(image, 160,10, 77,107, 96*player.x+14,96*player.y, 71,96)
          footstepsound1.play()
          break
        case 'down-2':
          self.context.player.drawImage(image, 80,120, 77,107, 96*player.x+14,96*player.y, 71,96)
          footstepsound2.play()
          break
        case 'win-1':
          self.context.player.drawImage(image, 640,10, 77,107, 96*player.x+14,96*player.y, 71,96)
          new Audio('./src/audio/kenney_digitalaudio/Audio/powerUp2.ogg').play()
          break
        case 'win-2':
          self.context.player.drawImage(image, 560,10, 77,107, 96*player.x+14,96*player.y, 71,96)
          break
      }
    }
  }

  buildUi(asset) {
    let image = new Image
    let self = this

    switch(asset) {
      case 'logo':
        image.src = './src/images/logo.png'
        image.onload = function() {
          self.context.ui.drawImage(image, 0,0, 1080,139, 90,90, 400,60)
        }
        break
      case 'instruction':
        image.src = './src/images/instruction.png'
        image.onload = function() {
          self.context.ui.drawImage(image, 0,0, 1080,675, 88,260, 400,260)
        }
        break
      case 'gameover':
        image.src = './src/images/gameover.png'
        image.onload = function() {
          self.context.ui.drawImage(image, 0,0, 1080,594, 88,260, 400,260)
        }
        break
    }
  }

  clearMap() {
    return this.context.map.clearRect(0, 0, 590, 590)
  }

  clearPlayer() {
    return this.context.player.clearRect(0, 0, 590, 590)
  }

  clearUi() {
    return this.context.ui.clearRect(0, 0, 590, 590)
  }

  moveUp() {
    let self = this
    if (this.player.y - 1 > -1 && this.player.y - 1 < this.map.length 
        && this.map[this.player.y - 1][this.player.x] !== 1) {
      return new Promise(function(resolve, reject) {
        self.moveHelper(self.player.x, self.player.y - 1)
        .then(function() {
          resolve()
        })
      })
    }
    return new Promise(function(resolve, reject) {
      new Audio('./src/audio/kenney_digitalaudio/Audio/zapThreeToneDown.ogg').play()
      swal('Runtime Error', 'Whoops! He can\'t walk up.', 'error')
      .then(function() {
        __init()
      })
    })
  }

  moveDown() {
    let self = this
    if (this.player.y + 1 > -1 && this.player.y + 1 < this.map.length 
        && this.map[this.player.y + 1][this.player.x] !== 1) {
      return new Promise(function(resolve, reject) {
        self.moveHelper(self.player.x, self.player.y + 1)
        .then(function() {
          resolve()
        })
      })
    }
    return new Promise(function(resolve, reject) {
      new Audio('./src/audio/kenney_digitalaudio/Audio/zapThreeToneDown.ogg').play()
      swal('Runtime Error', 'Whoops! He can\'t walk down.', 'error')
      .then(function() {
        __init()
      })
    })
  }

  moveLeft() {
    let self = this
    if (this.player.x - 1 > -1 && this.player.x - 1 < this.map.length 
        && this.map[this.player.y][this.player.x - 1] !== 1) {
      return new Promise(function(resolve, reject) {
        self.moveHelper(self.player.x - 1, self.player.y)
        .then(function() {
          resolve()
        })
      })
    }
    return new Promise(function(resolve, reject) {
      new Audio('./src/audio/kenney_digitalaudio/Audio/zapThreeToneDown.ogg').play()
      swal('Runtime Error', 'Whoops! He can\'t walk to the left.', 'error')
      .then(function() {
        __init()
      })
    })
  }

  moveRight() {
    let self = this
    if (this.player.x + 1 > -1 && this.player.x + 1 < this.map.length 
        && this.map[this.player.y][this.player.x + 1] !== 1) {
      return new Promise(function(resolve, reject) {
        self.moveHelper(self.player.x + 1, self.player.y)
        .then(function() {
          resolve()
        })
      })
    }
    return new Promise(function(resolve, reject) {
      new Audio('./src/audio/kenney_digitalaudio/Audio/zapThreeToneDown.ogg').play()
      swal('Runtime Error', 'Whoops! He can\'t walk to the right.', 'error')
      .then(function() {
        __init()
      })
    })
  }

  moveHelper(newX, newY) {
    let step = 0
    let self = this
    let oldX = this.player.x
    let oldY = this.player.y
    let direction

    return new Promise(function(resolve, reject) {
      var period = setInterval(function() {
        if (oldX === newX && oldY === newY) {
          clearInterval(period)
          self.buildPlayer({ x: oldX, y: oldY, state: 'idle' })
          resolve()
        } else {
          if (oldX < newX) {
            oldX += 0.1
            direction = 'right'
          } else if (oldX > newX) {
            oldX -= 0.1
            direction = 'left'
          } else if (oldY < newY) {
            oldY += 0.1
            direction = 'down'
          } else if (oldY > newY) {
            oldY -= 0.1
            direction = 'up'
          }

          step = (step + 1) % 2
    
          oldX = Math.round(oldX * 100) / 100
          oldY = Math.round(oldY * 100) / 100
    
          self.buildPlayer({ x: oldX, y: oldY, state: `${direction}-${step + 1}` })
        }
      }, 120)
    })
  }

  play() {
    new Audio('./src/audio/kenney_digitalaudio/Audio/phaserUp4.ogg').play()
    sessionStorage.__state = 'play'
  }

  onFinish() {
    let self = this
    if(this.map[this.player.y][this.player.x] === 2) {
      let step = 0
      var period = setInterval(function() {
        step = (step + 1) % 2
        self.clearPlayer()
        self.buildPlayer({ x: self.player.x, y: self.player.y, state: `win-${step + 1}` })
      }, 200)
      setTimeout(function() {
        new Audio('./src/audio/kenney_digitalaudio/Audio/powerUp11.ogg').play()
        clearInterval(period)
        localStorage.__level = parseInt(localStorage.__level) + 1
        sessionStorage.__state = 'start'
        editor.setValue('')
        swal('Compiled', 'You\'re a good progamer, dude!', 'success')
        .then(function() {
          __init()
        })
      }, 2000)
    } else if (this.map[this.player.y][this.player.x] === 3) {
      setTimeout(function() {
        new Audio('./src/audio/kenney_digitalaudio/Audio/zapThreeToneDown.ogg').play()
        swal('Runtime Error', 'He needs a key to open the door!', 'error')
        .then(function() {
          __init()
        })
      }, 1000)
    } else {
      new Audio('./src/audio/kenney_digitalaudio/Audio/zapThreeToneDown.ogg').play()
      swal('Runtime Error', 'He can\'t find the door :(', 'error')
      .then(function() {
        __init()
      })
    }

    sessionStorage.__oncompile = 0
  }

  run(text) {
    let self = this

    text = text.trim().split('\n').map(e => {
      e = e.trim()
      if (e.indexOf('up(') === 0 || e.indexOf('down(') === 0 
          || e.indexOf('left(') === 0 || e.indexOf('right(') === 0 || e.indexOf('getKey()') === 0) {
        return `await ${e}`
      }
      return e
    }).join('\n')
    text = `(async function(){ try{ ${text}\ndonothing() } catch(err){ reject(err) }\nresolve() })()`

    return new Promise(function(resolve, reject) { eval(text) })
      .then(function() {
        if (sessionStorage.__state === 'play') {
          self.onFinish()
        }
      }).catch(function(err) {
        if (err) {
          new Audio('./src/audio/kenney_digitalaudio/Audio/zapThreeToneDown.ogg').play()
          swal('Compile Error', err.message, 'error')
          .then(function() {
            __init()
          })
        }
      })
  }

  ready() {
    let self = this
    document.getElementById('go').addEventListener('click', function() {
      if (sessionStorage.__oncompile == 0) {
        if (sessionStorage.__state === 'play') {
          sessionStorage.__oncompile = 1
        }
        self.run(editor.getValue())
      }
      editor.focus()
    })
    return this
  }
}


function donothing() {}

function __init() {
  sessionStorage.__oncompile = 0
  if (!sessionStorage.__state) {
    sessionStorage.__state = 'splash'
  }
  if (!localStorage.__level) {
    localStorage.__level = 0
  }

  if (sessionStorage.__state === 'splash') {
    sceneSplash()
  } else if (sessionStorage.__state === 'play' || sessionStorage.__state === 'start') {
    try {
      eval(`sceneLevel${localStorage.__level}()`)
    } catch(err) {
      new Audio('./src/audio/kenney_digitalaudio/Audio/powerUp1.ogg').play()
      sceneGameOver()
    }
  }
}

let __game = new Core().ready()
__init()

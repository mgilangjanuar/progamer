function sceneLevel5() {
  __game.clearUi()
  __game.buildMap([
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 4, 0, 3],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ])
  __game.buildPlayer({ x: 1, y: 2, state: 'idle' })

  if (sessionStorage.__state === 'start') {
    swal({
      title: 'Pro Tips!',
      html: 'Type <code>getKey()</code> to get a key.',
      type: 'info'
    }).then(function() {
      __game.play()
    })
  }
}

function getKey() {
  if (__game.map[__game.player.y][__game.player.x] === 4) {
    __game.map[__game.player.y][__game.player.x] = 0
    new Audio('./src/audio/kenney_rpgaudio/Audio/handleCoins.ogg').play()
    return new Promise(function(resolve, reject) {
      swal('Good Job!', 'He got a key! Now, go to the door.', 'success')
      .then(function() {
        for(let row in __game.map) {
          for(let col in __game.map[row]) {
            if (__game.map[row][col] === 3) {
              __game.map[row][col] = 2
              __game.buildMap(__game.map)
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
  return swal('Runtime Error', 'Key not found!', 'error').then(function() { __init() })
}

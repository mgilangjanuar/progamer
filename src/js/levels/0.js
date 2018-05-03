function sceneLevel0() {
  __game.clearUi()
  __game.buildMap([
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ])
  __game.buildPlayer({ x: 2, y: 3, state: 'idle' })

  if (sessionStorage.__state === 'start') {
    swal({
      title: 'Pro Tips!',
      html: 'Make him out to the door by type <b>up()</b>, <b>down()</b>, <b>left()</b>, or <b>right()</b>. Use newline to separate it.',
      type: 'info'
    }).then(function() {
      __game.play()
    })
  }
}

async function up(n) {
  for (var i=1; i<n; i++) {
    await __game.moveUp()
  }
  return __game.moveUp()
}

async function down(n) {
  for (var i=1; i<n; i++) {
    await __game.moveDown()
  }
  return __game.moveDown()
}

async function left(n) {
  for (var i=1; i<n; i++) {
    await __game.moveLeft()
  }
  return __game.moveLeft()
}

async function right(n) {
  for (var i=1; i<n; i++) {
    await __game.moveRight()
  }
  return __game.moveRight()
}

function sceneLevel1() {
  __game.clearUi()
  __game.buildMap([
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ])
  __game.buildPlayer({ x: 4, y: 1, state: 'idle' })

  if (sessionStorage.__state === 'start') {
    swal({
      title: 'Pro Tips!',
      html: 'You can give a number inside a bracket as how many steps you need, eg. <b>left(4)</b>.',
      type: 'info'
    }).then(function() {
      __game.play()
    })
  }
}

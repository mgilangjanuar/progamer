function sceneLevel7() {
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
      html: 'Want to try this level again with <code>while</code> ? :))',
      type: 'info'
    }).then(function() {
      __game.play()
    })
  }
}

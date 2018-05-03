function sceneLevel6() {
  __game.clearUi()
  __game.buildMap([
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 4, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 0],
  ])
  __game.buildPlayer({ x: 1, y: 1, state: 'idle' })

  if (sessionStorage.__state === 'start') {
    swal({
      title: 'Pro Tips!',
      html: 'You can use <code>while</code> too to get a key like this<br /><pre style="text-align:left;margin-left:70px">while (! isKey()) {\n  down()\n}</pre>',
      type: 'info'
    }).then(function() {
      __game.play()
    })
  }
}

function isKey() {
  return __game.map[__game.player.y][__game.player.x] === 4
}

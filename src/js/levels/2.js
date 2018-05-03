function sceneLevel2() {
  __game.clearUi()
  __game.buildMap([
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ])
  __game.buildPlayer({ x: 0, y: 3, state: 'idle' })

  if (sessionStorage.__state === 'start') {
    swal({
      title: 'Pro Tips!',
      html: 'Do you know if you can use <code>while</code> like this?<br /><pre style="text-align:left;margin-left:70px">while (! isDoor()) {\n  right()\n}</pre>',
      type: 'info'
    }).then(function() {
      __game.play()
    })
  }
}

function isDoor() {
  return __game.map[__game.player.y][__game.player.x] === 2 || __game.map[__game.player.y][__game.player.x] === 3
}

function sceneLevel8() {
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
      html: 'Did you know if you can do like this?<br /><pre style="text-align:left;margin-left:70px">while (!isDoor()) {\n  if (isKey()) {\n    getKey()\n  }\n  right()\n}</pre>',
      type: 'info'
    }).then(function() {
      __game.play()
    })
  }
}

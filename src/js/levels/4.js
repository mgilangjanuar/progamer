function sceneLevel4() {
  __game.clearUi()
  __game.buildMap([
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 0],
    [0, 0, 0, 2, 1, 0],
    [0, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ])
  __game.buildPlayer({ x: 5, y: 3, state: 'idle' })

  if (sessionStorage.__state === 'start') {
    __game.play()
  }
}

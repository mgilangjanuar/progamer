function sceneLevel12() {
  __game.clearUi()
  __game.buildMap([
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 4, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 3, 3, 3, 3, 0],
  ])
  __game.buildPlayer({ x: 5, y: 1, state: 'idle' })

  if (sessionStorage.__state === 'start') {
    __game.play()
  }
}

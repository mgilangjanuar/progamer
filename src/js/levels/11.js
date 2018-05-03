function sceneLevel11() {
  __game.clearUi()
  __game.buildMap([
    [0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 1, 0],
    [0, 1, 0, 3, 1, 3],
    [0, 1, 1, 1, 1, 4],
    [0, 0, 0, 0, 0, 0],
  ])
  __game.buildPlayer({ x: 0, y: 2, state: 'idle' })

  if (sessionStorage.__state === 'start') {
    __game.play()
  }
}

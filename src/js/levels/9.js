function sceneLevel9() {
  __game.clearUi()
  __game.buildMap([
    [0, 0, 1, 0, 0, 0],
    [4, 0, 1, 0, 3, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ])
  __game.buildPlayer({ x: 3, y: 1, state: 'idle' })

  if (sessionStorage.__state === 'start') {
    __game.play()
  }
}

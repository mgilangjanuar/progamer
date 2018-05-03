function sceneLevel10() {
  __game.clearUi()
  __game.buildMap([
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 0],
    [0, 4, 1, 1, 3, 0],
  ])
  __game.buildPlayer({ x: 4, y: 1, state: 'idle' })

  if (sessionStorage.__state === 'start') {
    __game.play()
  }
}

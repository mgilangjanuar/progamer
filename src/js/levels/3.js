function sceneLevel3() {
  __game.clearUi()
  __game.buildMap([
    [0, 0, 2, 0, 0, 0],
    [0, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ])
  __game.buildPlayer({ x: 2, y: 5, state: 'idle' })

  if (sessionStorage.__state === 'start') {
    __game.play()
  }
}

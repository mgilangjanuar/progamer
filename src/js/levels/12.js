function level12() {
  if (sessionStorage.__state === 'start') {
    setTimeout(function() {
      _play()
    }, 200)
  }

  map = _mapBuilder('./src/images/roguelikeSheet_transparent.png', [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 4, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 3, 3, 3, 3, 0],
  ])
  character = _charaterBuilder('./src/images/adventurer_tilesheet-alt.png', 5, 1, 'idle')
}

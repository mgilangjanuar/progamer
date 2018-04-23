function level3() {
  if (sessionStorage.__state === 'start') {
    setTimeout(function() {
      _play()
    }, 200)
  }

  map = _mapBuilder('./src/images/roguelikeSheet_transparent.png', [
    [0, 0, 2, 0, 0, 0],
    [0, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ])
  character = _charaterBuilder('./src/images/adventurer_tilesheet-alt.png', 2, 5, 'idle')
}

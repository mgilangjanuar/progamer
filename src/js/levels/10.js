function level10() {
  if (sessionStorage.__state === 'start') {
    setTimeout(function() {
      _play()
    }, 200)
  }

  map = _mapBuilder('./src/images/roguelikeSheet_transparent.png', [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 0],
    [0, 4, 1, 1, 3, 0],
  ])
  character = _charaterBuilder('./src/images/adventurer_tilesheet-alt.png', 4, 1, 'idle')
}

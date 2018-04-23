function level7() {
  if (sessionStorage.__state === 'start') {
    swal({
      title: 'Pro Tips!',
      html: 'Want to try this level again with <code>while</code> ? :))',
      type: 'info'
    }).then(function() {
      _play()
    })
  }

  map = _mapBuilder('./src/images/roguelikeSheet_transparent.png', [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 4, 0, 3],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ])
  character = _charaterBuilder('./src/images/adventurer_tilesheet-alt.png', 1, 2, 'idle')
}

function level0() {
  if (sessionStorage.__state === 'start') {
    swal({
      title: 'Pro Tips!',
      html: 'Make him out to the door by type <b>up()</b>, <b>down()</b>, <b>left()</b>, or <b>right()</b>. Use newline to separate it.',
      type: 'info'
    }).then(function() {
      _play()
    })
  }

  map = _mapBuilder('./src/images/roguelikeSheet_transparent.png', [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ])
  character = _charaterBuilder('./src/images/adventurer_tilesheet-alt.png', 2, 3, 'idle')
}

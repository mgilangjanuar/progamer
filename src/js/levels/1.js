function level1() {
  if (sessionStorage.__state === 'start') {
    swal({
      title: 'Pro Tips!',
      html: 'You can give a number inside a bracket as how many steps you need, eg. <b>left(4)</b>.',
      type: 'info'
    }).then(function() {
      _play()
    })
  }
  
  map = _mapBuilder('./src/images/roguelikeSheet_transparent.png', [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ])
  character = _charaterBuilder('./src/images/adventurer_tilesheet-alt.png', 4, 1, 'idle')
}

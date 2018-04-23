function level6() {
  if (sessionStorage.__state === 'start') {
    swal({
      title: 'Pro Tips!',
      html: 'You can use <code>while</code> too to get a key like this<br /><pre style="text-align:left;margin-left:70px">while (! isKey()) {\n  down()\n}</pre>',
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
    [0, 4, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 0],
  ])
  character = _charaterBuilder('./src/images/adventurer_tilesheet-alt.png', 1, 1, 'idle')
}

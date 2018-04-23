function level2() {
  if (sessionStorage.__state === 'start') {
    swal({
      title: 'Pro Tips!',
      html: 'Do you know if you can use <code>while</code> like this?<br /><pre style="text-align:left;margin-left:70px">while (! isDoor()) {\n  right()\n}</pre>',
      type: 'info'
    }).then(function() {
      _play()
    })
  }

  map = _mapBuilder('./src/images/roguelikeSheet_transparent.png', [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ])
  character = _charaterBuilder('./src/images/adventurer_tilesheet-alt.png', 0, 3, 'idle')
}

function sceneSplash() {
  __game.clearUi()
  __game.clearPlayer()
  __game.buildMap([
    [ 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0 ]
  ])
  __game.buildUi('logo')
  __game.buildUi('instruction')
}

function play() {
  if (sessionStorage.__state === 'splash') {
    sessionStorage.__state = 'start'
    editor.setValue('')
    __init()
  }
}

function reset() {
  sessionStorage.__state = 'splash'
  localStorage.__level = 0
  editor.setValue('// Write your code here')
  new Audio('./src/audio/kenney_digitalaudio/Audio/zap1.ogg').play()
  __init()
  throw null
}

function menu() {
  if (sessionStorage.__state === 'play') {
    editor.setValue('// Write your code here')
    sessionStorage.__state = 'splash'
    new Audio('./src/audio/kenney_digitalaudio/Audio/zap1.ogg').play()
    __init()
    throw null
  }
}

function quit() {
  new Audio('./src/audio/kenney_digitalaudio/Audio/zap1.ogg').play()
  close()
}

function credits() {
  if (sessionStorage.__state === 'splash') {
    new Audio('./src/audio/kenney_digitalaudio/Audio/zap1.ogg').play()
    editor.setValue(
      '/*************\n *  Credits  *\n *************/\n\n' +
      '// - Kenney\n' + 
      '// - Ace Editor\n' + 
      '// - SweetAlert2\n' + 
      '// - You!\n' +
      '\n\n\n' +
      '/*****************\n * And thanks to *\n *****************/\n\n' +
      '// - StackOverflow\n' +
      '// - People on StackOverflow\n' +
      '// - The internet\n' +
      '// - People on the internet\n' +
      '// - Sherly (my notebook)\n' + 
      '// - Mark Zuckerberg (I have no idea why I wrote his name, but I\'m proud to write this without a typo) \n\n\n'
    , 1)
  }
}

function about() {
  if (sessionStorage.__state === 'splash') {
    new Audio('./src/audio/kenney_digitalaudio/Audio/zap1.ogg').play()
    editor.setValue(
      '/*************************\n * < Progamer! /> © 2018 *\n *************************/\n\n' +
      '// version: Released 0.1.2\n\n\n' +
      '// This game is dedicated\n' +
      '// exclusively for young\n' +
      '// students in Indonesia. The\n' +
      '// goal is to introduce\n' +
      '// programming in a fun way.\n\n\n' +
      '// “Everybody in this country\n' +
      '// should learn to program a\n' +
      '// computer, because it teaches\n' +
      '// you how to think” — Steve Jobs\n\n\n' +
      '/*************\n *  Contact  *\n *************/\n\n' +
      '// M Gilang Januar\n' +
      '// (mgilangjanuar@gmail.com)\n' +
      '// (mgilangjanuar.com)\n\n\n'
    , 1)
  }
}

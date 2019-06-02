var Game = function(fps) {
  var canvas = document.querySelector('#id-canvas')
  var context = canvas.getContext('2d')
  var g = {
    canvas: canvas,
    context: context,
    actions: {},
    keydowns: {},
  }

  // events

  g.registerAction = function(key, callback) {
    g.actions[key] = callback
  }
  // keydown
  window.addEventListener('keydown', function(event) {
    var key = event.key
    g.keydowns[key] = true
  })
  // keyup
  window.addEventListener('keyup', function(event) {
    var key = event.key
    g.keydowns[key] = false
  })

  //
  g.drawImage = function(paddle) {
    g.context.drawImage(paddle.image, paddle.x, paddle.y)
  }
  // timer
  var speedRange = e('#id-input-speed')
  speedRange.addEventListener('input', function(event){
    var input = event.target
    if(input.value == 0){
      input.value = 1
    }else{
      window.fps = Number(input.value)
    }
    log('win fps', window.fps)
  })
  window.fps = 30
  var runloop = function(){
    // events
    var actions = Object.keys(g.actions)
    for (var i = 0; i < actions.length; i++) {
      var key = actions[i]
      if (g.keydowns[key]) {
        g.actions[key]()
      }
    }
    // update
    g.update()
    // clear
    context.clearRect(0, 0, canvas.width, canvas.height)
    // draw
    g.draw()
    setTimeout(function(){
      runloop()
    }, 1000 / window.fps)
  }

  setTimeout(function(){
    runloop()
  }, 1000 / window.fps)

  return g
}

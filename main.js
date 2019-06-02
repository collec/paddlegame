var loadLevels = function(n){
  n = n-1
  var level = levels[n]
  // create blocks
  var blocks = []
  for (var i = 0; i < level.length; i++) {
    var p = level[i]
    var b = Block(p)
    blocks.push(b)
  }
  return blocks
}

var __main = function() {
  var game = Game(40)
  var paddle = Paddle()
  var ball = Ball()

  // loadLevels
  var blocks = loadLevels(1)

  var paused = false

  game.registerAction('a', function() {
    paddle.moveLeft()
  })

  game.registerAction('d', function() {
    paddle.moveRight()
  })

  game.registerAction('f', function() {
    ball.fire()
  })
  // pause ball
  window.addEventListener('keydown', function(event) {
    var key = event.key
    if (key == ' ') {
      paused = !paused
    } else if ('1234567'.includes(key)) {
      blocks = loadLevels(Number(key))
    } else if ('1234567'.includes(key)) {
      blocks = loadLevels(Number(key))
    }
  })


  // update
  game.update = function() {
    // check paused
    if (paused) {
      return
    }
    // ball paddle rectIntersects
    ball.move()
    if (paddle.collide(ball)) {
      ball.rebound()
    }

    // blocks ball rectIntersects
    for (var i = 0; i < blocks.length; i++) {
      var block = blocks[i]
      if (block.collide(ball)) {
        block.kill()
        ball.rebound()
      }
    }
  }

  // draw
  game.draw = function() {
    game.drawImage(paddle)
    game.drawImage(ball)

    for (var i = 0; i < blocks.length; i++) {
      var block = blocks[i]
      if (block.alive) {
        game.drawImage(block)
      }
    }
  }

}

__main()

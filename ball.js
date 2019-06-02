var Ball = function() {
  var image = imageFormPath('ball.png')
  var o = {
    image: image,
    x: 200,
    y: 160,
    w: 12,
    h: 13,
    speedX: 5,
    speedY: 5,
    fired: false
  }
  o.fire = function() {
    o.fired = true
  }

  o.move = function() {
    if (o.fired) {
      if (o.x < 0 || o.x+o.w > 400) {
        o.speedX = -o.speedX
      }
      if (o.y < 0 || o.y+o.h > 300) {
        o.speedY = -o.speedY
      }
      // move
      o.x += o.speedX
      o.y += o.speedY
    }
  }

  // rebound
  o.rebound = function(){
    o.speedY *= -1
  }

  return o
}

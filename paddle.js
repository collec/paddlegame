var Paddle = function() {
  var image = imageFormPath('paddle.png')
  var o = {
    image: image,
    x: 200,
    y: 260,
    speed: 5,
  }
  o.moveLeft = function() {
    o.x -= o.speed
    if(o.x < 0){
      o.x = 0
    }
  }
  o.moveRight = function() {
    o.x += o.speed
    if(o.x > 400-o.image.width){
      o.x = 400-o.image.width
    }
  }
  o.collide = function(ball) {
    return rectIntersects(o, ball)
  }
  return o
}

var Block = function(position) {
  // position 是 [0, 0] 格式
  var p = position
  var image = imageFormPath('block.png')
  var o = {
    image: image,
    x: p[0],
    y: p[1],
    alive: true,
    health: p[2] || 1,
  }
  o.kill = function(){
    o.health--
    if(o.health < 1){
      o.alive = false
    }
  }
  o.collide = function(b){
    if(o.alive){
      return rectIntersects(o, b)
    }
  }
  return o
}

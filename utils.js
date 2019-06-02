// debug log
var log = function(){
  console.log.apply(console, arguments)
}

// selector
var e = function(selector){
  return document.querySelector(selector)
}


// load image form path
var imageFormPath = function(path) {
  var image = new Image()
  image.src = path
  return image
}

// 矩形相交 检测
var rectIntersects = function(a, b){
  var bh = b.image.height
  var ah = a.image.height
  var aw = a.image.width
  var bw = b.image.width
  if(b.y > a.y-bh && b.y < a.y+ah){
    if(b.x > a.x-bw && b.x < a.x+aw){
      return true
    }
  }
  return false
}

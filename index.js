
function justInvoke(fn){
  return fn()
}

function setThisWithCall(age){
  this.name = "bob"
  return this
}

let bob = setThisWithCall.call(18)

let price = 5
let quantity = 2
let total = 0

let dep = new Set() // set doesn't allow duplicate value.

let effect = () => {
  total = price * quantity
}

function track() {
  dep.add(effect) // dep means dependency.
}

function trigger() {
  dep.forEach(effect => effect())
}

track()
effect()

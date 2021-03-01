// Your code here

class Polygon {

  constructor(array){
    this.sides = array
  }

  get countSides(){
    return this.sides.length
  }

  get perimeter(){
    return this.sides.reduce((t, v) => t + v, 0)
  }

}

class Triangle extends Polygon {

  get isValid(){
    let ordered = this.sides.sort((a, b) => a - b)
    if(this.sides.length == 3 && ordered[2] < ordered[0] + ordered[1]){
      return true
    }
    else{
      return false
    }
  }

}

class Square extends Polygon {

  get area(){
    return this.sides[0] * this.sides[1]
  }

  get isValid(){
    if(this.sides.length == 4 && this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] && this.sides [2] === this.sides[3]){
      return true
    }
    else{
      return false
    }
  }

}
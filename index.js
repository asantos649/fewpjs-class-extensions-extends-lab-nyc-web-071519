// Your code here
class Polygon{
    constructor(sides){
        this.sides = sides
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce(function(total, el){
            return total += el
        })
    }
}

class Triangle extends Polygon{
    get isValid(){
        return ((this.sides[0] + this.sides[1] > this.sides[2])  && (this.sides[0] + this.sides[2] > this.sides[0]) && (this.sides[2] + this.sides[1] > this.sides[0]))
    }
}

class Square extends Polygon{
    get isValid(){
        return ((this.sides[0] === this.sides[1])  && (this.sides[0] === this.sides[2]) && (this.sides[0] === this.sides[3]))
    }

    get area(){
        return this.sides[0]**2
    }
}
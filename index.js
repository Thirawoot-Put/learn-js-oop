class Triangle {
    constructor(a,b) {
        this.a = a
        this.b = b
    }
    describe() {
        return "Hello!!!"
    }
}

// Inheritance
class ShyTriangle extends Triangle {
    describe() {
        return "(run and hide)"
    }
}

// Super keyword
class ColorTriangle extends Triangle {
    constructor(a,b,color) {
        super(a,b)
        this.color = color
    }
}

class ColorMoodTriangle extends ColorTriangle {
    constructor(a,b,color,mood){
        super(a,b,color)
        this.mood = mood
    }
}
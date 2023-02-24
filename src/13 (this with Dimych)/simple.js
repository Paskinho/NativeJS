
const man = {
_counter: {
    value: 0,
        step: 2,
},
    getCounter() {
        console.log('this:', this)
        return this._counter.value
    }
}


console.log(man.getCounter())


class Man {
    constructor(props) {
        this.props = props
    }
    render(){
        console.log(this.props.age)
    }
}

const man1 = new Man({age: 10})
man1.render()
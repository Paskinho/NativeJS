
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

const getCounter = man.getCounter()

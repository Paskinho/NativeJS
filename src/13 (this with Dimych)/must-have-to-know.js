const man = {
    name: "developer",
    sayName() {
        /// this === this равен в 6 строке
        setTimeout(()=> {
            console.log(this.name) //верно если sayName вызвано тоже правльно
        }, 1000)
    }
}

man.sayName(); // правильно

const sayName = man.sayName; // неверно
sayName();//неверно

const boundSayName = man.sayName.bind(man); //верно
boundSayName()//верно
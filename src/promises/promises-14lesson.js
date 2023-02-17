let axios = {
    get() {
        let pr = new Promise ((resolve, reject) => {
            setTimeout(()=> {
                resolve('YoYoYo')
            },3000)
        });
        return pr
    }
}


let promise = axios.get();

promise.then((message)=> {
    console.log(message)
})
    .then()
    .then()
    .then()
    .then();




// .catch((data)=> console.error(data))
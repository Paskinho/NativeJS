let axios = {
    get() {
        return new Promise ((resolve, reject) => {
            setTimeout(()=> {
                resolve({G: 2, g3: 4, message: "YoYoyo"})
            },3000)
        });
    }
}
let promise = axios.get();

promise.then((message)=> {
    return 1
})
    .then((message)=> console.log(message))
    .then()
    .then()
    .then();




// .catch((data)=> console.error(data))
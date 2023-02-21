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

promise.then((data)=> {
    return data.message
})
    .then((message)=> console.log(message))
    .then()
    .then()
    .then();

let makeRequest = async () => {

let data = await fetch ('microsoft');
console.log(data);
data = await fetch ('google');
console.log(data);
data = await fetch ('it-kamasutra');
console.log(data);
}

makeRequest()


const makeRequestAtOneMoment = () => {
    let p1 = fetch('microsoft')
    let p2 = fetch('google')
    let p3 = fetch('it-kamasutra')

    Promise.all([p1,p2,p3]).then(data => {
        console.log('all finished')
    })
}




// .catch((data)=> console.error(data))
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


axios.get().
then(data=>console.log(data))
.then(()=>{console.log("1")})
.then(()=>{console.log("2")})



// .catch((data)=> console.error(data))
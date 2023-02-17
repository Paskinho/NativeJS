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


axios.get().then(data=>console.log(data))
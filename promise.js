(function promise(params) {
    const promise = new Promise( (resolve, reject) =>{
        setTimeout( ()=>{
            //resolve();
            reject(new Error())
        },1000)
    }).then( (res)=>{
        console.log(res)
    } ).catch( (res) =>{
        console.log(res)
    })

    console.log(promise);
    console.log("88888888");

    setTimeout( () => {
        console.log(promise)
        console.log("12121212");
    }, 2000 );

    
})()
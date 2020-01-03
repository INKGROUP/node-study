(function promise(params) {

    // var promise = interview(1)
    //     .then( ()=>{
    //        return interview(2);
    //     })
    //     .then( ()=>{
    //         return interview(3)
    //     })
    //     .then( ()=>{
    //         console.log('smile')
    //     })
    //     .catch( (err)=>{
    //         console.log('fail at'+err.round)
    //     })
  

    Promise.all([
        interviewCompany('tencent'),
        interviewCompany('weibo')
    ])
    .then( () => {
        console.log('smile')
    })
    .catch( (err)=>{
        console.log('fail at '+err.name);
    } )


    function interview(round) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.3) {
                    resolve('smile');
                } else {
                    let error = new Error('fail');
                    error.round = round;
                    reject(error);
                }
            }, 300);
        })
    }

    function interviewCompany(name) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.3) {
                    resolve('smile');
                } else {
                    let error = new Error('fail');
                    error.name = name;
                    reject(error);
                }
            }, 300);
        })
    }


})()
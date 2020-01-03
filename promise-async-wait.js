(async function() {
    try {
        // await interview(1);
        // await interview(2);
        // await interview(3);

        await Promise.all([interview(1), interview(2)]);
        


    } catch (error) {
        return console.log('cry at ' + error.round)
    }

    console.log('smile');

   

})()

function interview(round){
    return new Promise( (resolve, reject) => {
         setTimeout( () => {
             if( Math.random() > 0.3 ){
                resolve('smile');
             }else{
                 const error = new Error('fail');
                 error.round = round;
                 reject(error);
             }
         },500)
    })
}


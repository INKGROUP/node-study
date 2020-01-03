module.exports = function(playerAction){
    var computerAction = ''
    var randomNum = Math.random() * 10

    if (randomNum < 3) {
        computerAction = 'scissors'
    } else if (randomNum > 6) {
        computerAction = 'rock'
    } else {
        computerAction = 'paper'
    }
    
    console.log( `${playerAction}-----${computerAction}` )
    
    if (playerAction === 'scissors' && computerAction === 'paper' ||
        playerAction === 'rock' && computerAction === 'scissors' ||
        playerAction === 'paper' && computerAction === 'rock') {
        console.log(' you win! ')
        return 1
    } else if(playerAction === computerAction){
        console.log('come on')
        return 0
    } else {
        console.log(' I fail! ')
        return -1
    }
}
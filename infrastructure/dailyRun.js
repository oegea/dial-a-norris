module.exports = (callback) => {
    const MINUTE = 60000
    const HOUR_TO_RESET = 19
    let lastHour = -1
    
    function timeInterval(){
        var now = new Date()
        if (now.getHours() === HOUR_TO_RESET && lastHour !== HOUR_TO_RESET){
            lastHour = HOUR_TO_RESET
            console.log('Calling the scheduled function')
            try{
                callback()
            } catch (e) {
                console.error(e)
            }
        } 
    
        if (now.getHours() !== lastHour)
            lastHour = now.getHours()
    
        console.log('Iteration made, lastHour is now '+lastHour+', scheduled hour is '+HOUR_TO_RESET)
        setTimeout(timeInterval, MINUTE)
    }
    
    timeInterval()
}
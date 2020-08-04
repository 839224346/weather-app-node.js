const request = require('request')

const forecast = (latitude, longitude, callback) => {
    
    const url = 'http://api.weatherstack.com/current?access_key=e112f56fa6d70cbde9df4ac5c5988f47&query=' + latitude +','+ longitude + '&units=f'
    // const url = 'http://api.weatherstack.com/current?access_key=e112f56fa6d70cbde9df4ac5c5988f47&query=37,120&units=f'
    request({url: url, json: true}, (error, response) =>{
        if(error){
            callback("Unable to connect to location services!", undefined)
        } else if(response.body.error){
            callback("Unable to find location. Try another search.", undefined)
        }else{
            callback(undefined, response.body.current.temperature)
        }
    })
}

module.exports = forecast
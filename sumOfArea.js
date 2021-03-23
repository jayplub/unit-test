const calFuction = require('./calculate')

function sumOfArea(w1,w2){

    //   const area1 = calFuction.rectangleArea(w1)  
    //   const area2 = calFuction.rectangleArea(w2)
        const area1 = Math.pow(w1,2)  
        const area2 = Math.pow(w2,2)  
      return calFuction.sum(area1,area2)
}

module.exports = sumOfArea
    

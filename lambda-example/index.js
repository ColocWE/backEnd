const {someAsyncFunction} = require("./module")

exports.handler = main

 async function main(event, context, callback) {
    console.log("EVENT: \n" + JSON.stringify(event))
try {
    
    const result = await someAsyncFunction()
    callback(null, result)
} catch (error) {
    callback(error)    
}


  }
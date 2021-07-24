const { resolve } = require('path');

//The three functions
function myName(){
    const address = "Here is my IP address";
    return address;
}
//async fuction
async function callHttpBin(){
    let promise = new Promise((resolve, reject) => {
         const http = require('http');
         http.get(
            'http://httpbin.org/ip',
            function(response){
                let str="";
                response.setEncoding('utf-8');
                response.on('data', function(data){
                    str += data;
                });
                response.on('end', function(){
                    try{
                        let results = JSON.parse(str);
                        let myips = results.origin;
                        resolve(console.log(myips));
                        reject("Unable to reteive data");
                    }
                    catch(e){
                        console.log(e);
                    }
                });
            });
    })
    let result = await promise
    return result
}
//sync function
function executeAsynTask(){
    const valueA = callHttpBin();
    const valueB = myName();
    console.log(valueB+" "+valueA)
}
executeAsynTask();
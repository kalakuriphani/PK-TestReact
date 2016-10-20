function addPromise(a, b){
   return new Promise(function(resolve,reject){
     if(typeof a ==='number' && typeof b === 'number'){
       resolve(a+b);
     }else{
       reject('A & B should be numbers');
     }

   });
}

 addPromise(5,5).then(function(sum){
    console.log("Sum is ",sum);
}, function(err){
  console.log("Promise error ",err)
});

addPromise("phani",1).then(function(sum){
  console.log("sum ",sum)
}, function(err){
  console.log("Error ",err);
}

)

 var names =['phani','kumar','kalakuri'];
//
// names.forEach(function (name){
//   console.log("Name "+name);
// });
//
// names.forEach((name)=>{
//    console.log('arrowlog', name);
// });
//
// names.foreach((name) => console.log(name));
//
// var returnMe =(name) =>name +"!";
// console.log(returnMe('Phani'))

var person = {
  name: 'Adi',
  greet: function(){
    names.forEach((name) => {
      console.log(this.name +" says hi to "+name);
    })
  }
}

person.greet();


var addStmt = (a,b) => {
    return a+b;
}

var addExpr = (a,b) => a +b;

console.log(addStmt(2,3));

console.log(addExpr(5,5));

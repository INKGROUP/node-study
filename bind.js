const someuser = {
    name: 'jianlc',
    func: function(){
        console.log(this.name);
    },
    list:{
        count:10,
        class:1
    }
};



function deepCopy(obj){
    var _obj = {};
    for(let i in obj){
        console.log(i)
        if( typeof(obj[i]) != 'object' ){
            _obj[i] = obj[i];
        }else{
           _obj[i] = deepCopy(obj[i]);
        }
    }
    console.log(_obj);
    return _obj;
}

var testo = deepCopy(someuser);


console.log("testo-------------------");
console.log(testo);
someuser.list.count = 5555555
someuser.func = {};

console.log("============");
console.log(someuser);
console.log(testo);

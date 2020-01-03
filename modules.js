class School {
    constructor(schoolName){
        this.schoolName = schoolName;
    }
    getSchoolName(){
        return this.schoolName;
    }
    setNewSchool(schoolName){
        this.schoolName = schoolName;
    }
}

class User extends School{
    constructor(name,sex){
        super();
        this.name = name;
        this.sex = sex;
    }

    getName(){
        return this.name;
    }
    getSex(){
        return this.sex;
    }
}

module.exports = User

// exports.getName = function(thyName){
//     name = thyName
// }

// exports.sayName = function(){
//     console.log('Hello');
// }

// module.exports = function(){
//     console.log('from module.exports')  
// }



// setTimeout(() => {
//     console.log(exports)
// }, 2000);


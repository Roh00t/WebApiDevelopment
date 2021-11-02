var person = {
    name: "",
    age: 0,

    getName: function(){
        return this.name;
    },
    setName(name){
        this.name = name;
    },
    getAge: function(){
        return this.age;
    },
    setAge(age){
        this.age = age;
    }
        
    
};
module.exports = person;


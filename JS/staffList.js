
class StaffList {
    //add your code here
    constructor(){
        this.list = {}
    }
    
    add(name, age){
       if (age > 20 && !this.list[name]){
           this.list[name] = {name: name, age: age}
       } 
       else {
           let e= new Error('Staff member age must be greater than 20')
           throw e
       }
    };
    
    remove(name){
        if (this.list[name]){
        delete this.list[name]
        return true
        }
        else {return false}
    }
    
    getSize(){
        return Object.keys(this.list).length
    }
}

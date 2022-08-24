var  obj = {
    firstName: "ritu",
    lastName: "sharma",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
    console.log(obj.fullName());

    var person1 = {
        firstName: "dssf",
        lastName: "fsfsfs"
    };
    console.log(fullName.call(person1));                //use call method to reuse a method avaible in other object

    var person = {
        fullName : function(city,country) {
            return this.firstName+" "+this.lastName+" "+this.city+" "+this.country;
        }
    }
    console.log(fullName.call(person, mathura,India));

    //apply method to reuse a method available in other object
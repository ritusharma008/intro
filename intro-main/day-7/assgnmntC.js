var info = {
    name: "Ritu Sharma",
    age: 21,
    Address: {city:"mathura", state:"UP", pincode:281122 },
    details: function() {
        return this.name +" from "+ this.Address.city;
    }
}
document.write(info.details());
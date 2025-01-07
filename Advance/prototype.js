const myname='Anuj      '
// console.log(myname.trim().length);


//create a new prototype
Object.prototype.trimlength=function () {
    console.log(this.trim().length);
    
}

myname.trimlength()


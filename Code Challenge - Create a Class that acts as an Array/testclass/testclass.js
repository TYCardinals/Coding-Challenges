// Create a class (called mySet) that acts just like
// an array (push and pop) but will only add things
// if they aren’t already in the array.
// Also add a display() method that uses console.table.


const util = require('util');

class mySet
{
    constructor()
    {
        this.data=[];
    }
    display()
    {
        console.table(this.data);
    }
    pop()
    {
        this.data.pop();
    }
    push(value)
    {
        if(!this.data.find(x=>util.isDeepStrictEqual(x,value))) {this.data.push(value)}
    }
}

const set = new mySet();
set.push([3]);
set.push(55);
set.push([3]);
set.push(22);

set.display();
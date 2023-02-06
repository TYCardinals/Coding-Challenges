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
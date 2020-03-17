const chainMaker = {
  arr: [],
  getLength() {
    this.arr.length;
    return this;
    // remove line with error and write your code here
  },
  addLink(value) {
    if (value === undefined) {
      this.arr.push('( )');
    } else {
      this.arr.push(`( ${value} )`);
    }
    
    return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
    if(typeof position !=="number" || position <=0 || position > this.arr.length) {
      this.arr = [];
      throw new Error();
     
    }
    this.arr.splice((position -1),1);
    return this;
    // remove line with error and write your code here
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let result = this.arr.join("~~");
    this.arr = [];
    return result;
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;

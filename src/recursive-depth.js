module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                count = Math.max( this.calculateDepth(arr[i]), count);
            }
        }
        return count + 1;
       
    }
};
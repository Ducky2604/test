class sumArray {
    sumArray(arr) {
        return arr.reduce((sum, current) => sum + current, 0);
      }     
}

module.exports = sumArray;
// const { array } = require("yargs");

class calculator {
    add(a,b){
        return a + b;
    }
    abstract(a,b){
        return a - b;
    }
    multiply(a,b){
        return a * b;
    }
    divide(a,b){
        if(b === 0){
            throw error("division by zero is not allowed")
        }
        return a / b;
    }
    maxNumber(a,b){
        return Math.max(a,b)
    }
    sumArrayElements(arr) {
        return arr.reduce((acc, current) => acc + current, 0);
      }
      
}



module.exports = calculator;
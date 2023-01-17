const testModule = (function () {
    // private 
    let myPrivateVar = 0;
    let myPrivateMethod = function (val){
        console.log(val);
    }
    // public
    return {
        myPublicVar: 'Public',
        myPublicFunction: function (a){
            console.log(++myPrivateVar);
            myPrivateMethod(a);
        }
    }
})();

// testModule.myPublicFunction(5);
console.log(testModule.myPublicVar);
// console.log(testModule.myPrivateMethod(10));

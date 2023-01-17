const singleton = (function (){
    let instance;

    function create () {

        function print () {
            console.log('Printing..');
        }

        function turnOn () {
            console.log('Turnig on Printer...');
        }

        return {
            print: print,
            turnOn: turnOn
        };
    }

    return {
        getInstance: function () {
            if(!instance){
                printerInstance = create();
            }
            return printerInstance;
        }
    };
})();

const printer = singleton.getInstance();
printer.print()
printer.turnOn()


// function validatePIN (pin) {
//
//         if (pin.length !== 4 || pin.length !== 6){
//             return false;
//         }
//     }
//     return true;
// }


function validatePIN(pin) {
    let ppp = parseInt(pin);
    console.log(ppp);
    if (ppp.length !== 4 && ppp.length !== 6){
        return false;
    }else{
        return true;
    }
}

console.log(validatePIN('1234'));

console.log('new task');


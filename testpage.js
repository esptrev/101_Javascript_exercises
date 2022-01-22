function firstToLast(sequence){
    let shifted = sequence.shift();
    console.log(shifted);
   sequence.push(shifted);
    console.log(sequence);

}
firstToLast(["strawberry", "kiwi", "mango", "guava"]);
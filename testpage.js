var arr = ["maryyy", "havenots", "bluue", "little", "lamb", "january"];

console.log(
    arr.reduce((a, b) => a.length <= b.length ? a : b))


// function shortestString(object){
//
// }
//
// assert(shortestString(["kiwi", "mango", "strawberry"]), "kiwi", "Exercise 81");
// assert(shortestString(["hello", "everybody"]), "hello", "Exercise 81");
// assert(shortestString(["mary", "had", "a", "little", "lamb"]), "a", "Exercise 81");
// addToDone("Exercise 81 is correct.")
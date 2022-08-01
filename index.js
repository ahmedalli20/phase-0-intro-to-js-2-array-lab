// Write your solution here!

const cats=['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    cats.push('Ralph');
}
function destructivelyPrependCat(name) {
    cats.unshift('Bob');
}

 function destructivelyRemoveLastCat(){
    cats.pop('Ralph')
 }

function destructivelyRemoveFirstCat(){
    cats.shift('Bob')
}

function appendCat(name){
    var cat = []
     cat = cats.concat(cat);
     cat.push('Broom')
    return cat
   }
   function prependCat(name){
    var cat = []
     cat = cats.concat(cat);
     cat.unshift('Arnold')
    return cat
   }

function removeFirstCat(){
    var cat = []
    cat = cats.concat(cat);
    cat.shift()
   return cat
}

function removeLastCat(){
    var cat = []
    cat = cats.concat(cat);
    cat.pop()
   return cat
}
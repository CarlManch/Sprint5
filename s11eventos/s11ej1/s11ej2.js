//callback hell
function translateLetter(letter, callback) {
    return setTimeout(2000, ()=>{
        callback(letter.split("").reverse().join(""));
    });
}
function assembleToy(instruction, callback) {
    return setTimeout(2000, ()=>{
        const toy = instruction.split("").reverse().join("");
        if (toy.includes("carro")){
            return callback("fantastico");
        } else if (toy.includes("pelota")) {
            return callback("mundial");
        }
        callback(toy);
    });
}

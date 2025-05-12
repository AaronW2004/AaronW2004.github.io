const doStuff = () =>{
    alert("Hello world");
};


const myButton = document.getElementById("btn-say-hello");
myButton.onclick = () => {
    document.getElementById("message").innerHTML = "Hello Everyone!";
    document.getElementById("stuff").classList.add("special");
};

//Add a secon button, called say goodbye
//when clicked, change the text to goodbye everyone, and remove the special styels

const myButton2 = document.getElementById("btn-say-goodbye").onclick = () => {
    document.getElementById("stuff").classList.remove("special");
    document.getElementById("message").innerHTML = "Goodbye Everyone!";
}

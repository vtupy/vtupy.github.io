function biggerButton(){
    alert("Hello, world!");
    document.getElementById("user-input").style.fontSize = "24pt";
}

function radioFancyButton(){
    alert("FancyShmancy!");
    document.getElementById("user-input").style.fontWeight = "bold";
    document.getElementById("user-input").style.color = "blue";
    document.getElementById("user-input").style.textDecoration = "underline";
}

function radioBoringButton(){
    alert("BoringBetty!");
    document.getElementById("user-input").style.fontWeight = "normal";
    document.getElementById("user-input").style.color = "black";
    document.getElementById("user-input").style.textDecoration = "none";
}

function mooButton(){
    let textArea = document.getElementById("user-input");
    textArea.value = textArea.value.toUpperCase();

    let sentence = textArea.value.split(".");

    for(let i = 0; i < sentence.length; i++){
        let s  =sentence[i].trim();
        if(s.length>0){
            let word = s.split(" ");
            word[word.length - 1] += "-Moo";
            sentence[i] = word.join(" ");
        }
    }
    textArea.value = sentence.join(". ");

}





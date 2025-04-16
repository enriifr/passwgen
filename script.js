if (navigator.userAgent.includes("curl")) {
    document.body.innerText = "Hello, this is a simple text response!";
}

function change()
{
    const icon = document.getElementById("butt");
        if (icon.innerHTML === "visibility") {
            icon.innerHTML = "visibility_off";
            document.getElementById("display").style.color = "transparent";
            document.getElementById("display").style.textShadow = "0 0 8px #000";
            document.getElementById("display").style.userSelect = "none";
        } else {
            icon.innerHTML = "visibility";
            document.getElementById("display").style.color = "#0c0c0c";
            document.getElementById("display").style.textShadow = "0 0 0px #000";
            document.getElementById("display").style.userSelect = "text";
        }
}

function genera(){
    const maiusc = document.getElementById("maiusc").checked;
    const num = document.getElementById("num").checked;
    const spec = document.getElementById("spec").checked;
    const len = document.getElementById("len").value;
    let passw = Array(parseInt(len)).fill("");

    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeri = "0123456789";
    const special = "@#?!&$%<>/-€=+(),._";
    let pool = lower;

    if (maiusc) {
        pool+=upper;
        passw[randomEmptyPosition(passw)]=upper[Math.floor(Math.random()*upper.length)];    //aggiunge almeno 1 dei req.
    }
    if (num) {
        pool+=numeri;
        passw[randomEmptyPosition(passw)]=numeri[Math.floor(Math.random()*numeri.length)];
    }
    if (spec) {
        pool+=special;
        passw[randomEmptyPosition(passw)]=special[Math.floor(Math.random()*special.length)];
    }

    /*for(let loop=0;loop<len;loop++){
        if(passw[loop]==""){
            passw+=pool[Math.floor(Math.random()*pool.length)];             vecchia funzione
        }
    }*/

    passw = passw.map(char => char || pool[Math.floor(Math.random() * pool.length)]);   //fill restatnti


    display(passw.join(""));    //arr to str

}

function randomEmptyPosition(passw) {
    let position;
    do{
        position=Math.floor(Math.random()*passw.length);
    }while(passw[position]!=="");
    return position;
}

function display(passw){
    const icon = document.getElementById("butt");
    document.getElementById("display").value='';
        if (icon.innerHTML === "visibility") {
            document.getElementById("display").value=passw;
            document.getElementById("display").style.color = "#0c0c0c";
            document.getElementById("display").style.textShadow = "0 0 0px #000";
        } else {
            document.getElementById("display").value=passw;
            document.getElementById("display").style.color = "transparent";
            document.getElementById("display").style.textShadow = "0 0 8px #000";
        }
} 

function updateValue(value) {
    document.getElementById('valueDisplay').textContent = value+" caratteri";
}

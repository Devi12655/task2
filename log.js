let ip=document.getElementById("inputElement");//for getting value from name box
let sg=document.getElementById("signInText");
let p=document.getElementById("p");//for writing the text create id in <p>..
function signIn(){
    let ipv=ip.value;
    let ps=p.value;
    if(ipv==="tirumani@gmail.com"&& ps=="Devi123"){
        window.location.href = "http://127.0.0.1:3000/mytodoApp.html";
    }
    else{
        sg.textContent="INVALID CREDENTIALS...";
        sg.style.color="red";
    }
}

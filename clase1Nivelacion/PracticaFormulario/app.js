let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");
console.log("nameInput");

signIn.onclick = function() {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
}

signUp.onclick = function() {
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
}

//Capturar los datos ingresados
//poner id a los datos que quiero capturar
//https://www.google.com/search?q=como+hacer+un+console+log+de+los+datos+que+cargo+el+usario+en+un+formulario+con+funciones+propias+de+ecmascript+6&sca_esv=561360965&biw=1366&bih=651&tbm=vid&sxsrf=AB5stBiQDslLjOxBmb-seXmjXdyi7e4B8w%3A1693419038733&ei=HobvZJOnLPSWi-gPrviDEA&ved=0ahUKEwiTronC_YSBAxV0ywIHHS78AAIQ4dUDCA0&uact=5&oq=como+hacer+un+console+log+de+los+datos+que+cargo+el+usario+en+un+formulario+con+funciones+propias+de+ecmascript+6&gs_lp=Eg1nd3Mtd2l6LXZpZGVvInFjb21vIGhhY2VyIHVuIGNvbnNvbGUgbG9nIGRlIGxvcyBkYXRvcyBxdWUgY2FyZ28gZWwgdXNhcmlvIGVuIHVuIGZvcm11bGFyaW8gY29uIGZ1bmNpb25lcyBwcm9waWFzIGRlIGVjbWFzY3JpcHQgNkgAUABYAHAAeACQAQCYAQCgAQCqAQC4AQPIAQD4AQH4AQI&sclient=gws-wiz-video#fpstate=ive&vld=cid:8c5efc40,vid:R0RWoE_qVOk

//esto tiene profe
//const formulario = document.getElementById('formulario');

// formulario.addEventListener('submit', (e)=> {
//     // e.preventDefault();
    
//     console.log(formulario.elements['fname'].value);
// })
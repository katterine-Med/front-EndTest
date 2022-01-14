//const aplicacion = document.querySelector('.container');

//const url = ;
const customHeaders = new Headers({ 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJwcmluY2lwYWwiOiJINHNJQUFBQUFBQUFBSlZTUFc4VFFSUjhaNHlDaEJBRUFSSUZWS2JEWjdBZGpPUUdFZ1dhVTR3d2JvSkU5THozZkd5OHQzdnM3aEc3UWU0b1FTQWtKUDRDXC80U0tIOEJQU0UzTFcrZmpERTNFTm5lYW5adVpOKysrSDhKNVo2R1RXWlRLeFlVcU02bGpWMWlwTTBlaXROTFA0OUtSVGNrdkdVK1h4QkVqY0hTaUdrUUoxR1RxNFdxeWoyK3hwVkJucmNGNG40VHZ6eXkwamMyT0ZTY1djem93ZGhxZmFndGo2UytEU2pyNldJTzFYVmhISVV5cFwvWTdSMjdOQ1drcDM0VXFGSlVaTUEzUmQ4QTFwTDFHNVZlb2FhUndyU2hPNGlLVlwvYmRoVmt2TncrU2hzNmFWcURjbjNFN2hRb0hPYzdwOUpoajVFRFwvY2hwdVlKM3NBN3FNK0tpQTkzZHlkUTQ2QVRieG1sZUdwcHRHdU1kRzVTT1pIQm5QVVh0ejc5XC9QQnRNYW9CY0NkM3pcLzZtd205dXd1TEhxOSszbDBWSHdzT05sZWdWclQ4ck9NMTZwZnpDVW5EKzlmWFo1eStINzErZVkrZkFlUExcLysyZzhQbTV1dm1YeUFpMTZzN0lqbGoyb2gzY1czenhiXC9HUUw4M2dvODBJUlwvMUhhVTNwcVVRbnp1SFZyMUVuZkhpNDlIeVRiZXp1RHZmQWNCdVRhRkQyeFczNlwvOHlqTE9UQjc1QjRhM1kxMkQ2bHpyemx1WTdmWnBkNUdjMHlUY1JQYm90ZDlnS0tINmNNXC81XC84NE9cL3dDQUFBPSIsInN1YiI6ImthdGVyaW5tMTNAZ21haWwuY29tIiwicm9sZXMiOlsiUk9MRV9OT19ST0xFUyJdLCJleHAiOjE2NDIxMzczMzcsImlhdCI6MTY0MjEzMzczN30.pqT7Dgs8Mb5gNYfn9gF5FOiDvElZfJA8FOWrDmX5xUo'});

const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `Ingresa nombre completo <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        function pantalla() {
            document.getElementById("pantalla2").style.display = "block";
            document.getElementById("pantalla1").style.display = "none";
            document.getElementById("emailInput").innerHTML = email.value;
        }
        document.getElementById("ingresar").addEventListener("click", pantalla);
        
    } 
    
})
fetch('https://api.finerio.mx/login', {
	mode: 'cors',
    method: "POST",
    body: 
    {
    "password": "sharelim13",
    "username": "katerinm13@gmail.com"
    },
    headers: customHeaders
    
})
.then(response => response)
.then(console.log);

/*movimientos
amount
Description
type*/
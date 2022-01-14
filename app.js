const aplicacion = document.querySelector('.container');

const url = 'https://api.finerio.mx/login';


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
<<<<<<< HEAD
    }
=======
        
    } 
    
>>>>>>> login
})
fetch(url)
        .then(res =>  console.log(res))

/*movimientos
https://api.finerio.mx/api/users/4527ae30-b2a4-4e75-befb-a2c746ac7ad8/movements?deep=true&offset=0&max=35&includeCharges=true&includeDeposits=true&includeDuplicates=true
amount
Description
type*/
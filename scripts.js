function modoOscuroLogin() {
    var cuerpo = document.body;
    var boton = document.getElementsByClassName('botonOscuro')[0];
    var degradado = document.getElementsByClassName('formContainer')[0];
    var tituloForm = document.getElementsByClassName('titleForm')[0];
  
    if (cuerpo.style.backgroundColor === 'black') {
        // Mode lluminos
        cuerpo.style.backgroundColor = 'rgb(59, 105, 121)';
        cuerpo.style.color = 'white';
        boton.innerHTML = 'Modo oscuro🌙';
        degradado.classList.remove('formContainerOscuro');
        degradado.classList.add('formContainer');
        tituloForm.classList.remove('titleFormOscuro');
        tituloForm.classList.add('titleForm');
        
    } else {
        // Mode fosc
        cuerpo.style.backgroundColor = 'black';
        cuerpo.style.color = 'white';
        boton.innerHTML = 'Modo predeterminado☀️';
        degradado.classList.add('formContainerOscuro');
        tituloForm.classList.add('titleFormOscuro'); 
        
    }
}
function modoOscuro() {
    var cuerpo = document.body;
    var boton = document.getElementsByClassName('botonOscuro')[0];
    var footer = document.getElementsByTagName('footer')[0];
    var h2Elements = document.getElementsByClassName('h2Claro');
    var aside = document.getElementsByTagName('aside')[0];
    var nav = document.getElementsByTagName('nav')[0];
    var h1Element = document.getElementById('titulo');
    var h1Element2 = document.getElementById('tituloOscuro');
    if (cuerpo.style.backgroundColor === 'black') {
        // Mode lluminos
        cuerpo.style.backgroundColor = 'rgb(59, 105, 121)';
        cuerpo.style.color = 'white';
        aside.style.backgroundColor = 'rgba(28, 166, 166, 0.274)';
        nav.style.backgroundColor = 'rgba(28, 166, 166, 0.274)';
        boton.innerHTML = 'Modo oscuro🌙';
        footer.style.backgroundColor = 'rgb(28, 166, 166)';
        

        // eliminar la classe fosca dels h2
        for (let i = 0; i < h2Elements.length; i++) {
            h2Elements[i].classList.remove('h2Oscuro');
        }
        h1Element2.removeAttribute('id');
        h1Element2.id = 'titulo';
    } else {
        // Mode fosc
        cuerpo.style.backgroundColor = 'black';
        cuerpo.style.color = 'white';
        aside.style.backgroundColor = 'rgba(125,121,121,0.274)';
        nav.style.backgroundColor = 'rgba(125,121,121,0.274)';
        footer.style.backgroundColor = 'gray';
        boton.innerHTML = 'Modo predeterminado☀️';
        

        // posar la classe fosca als h2 
        for (let i = 0; i < h2Elements.length; i++) {
            h2Elements[i].classList.add('h2Oscuro');
        }
        h1Element.id = 'tituloOscuro';
    }
}


function formValidation (){
    const form = document.getElementById("myForm");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const address = document.getElementById("address");
    const phone = document.getElementById("phone");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const addressError = document.getElementById("addressError");
    const phoneError = document.getElementById("phoneError");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Reiniciar errors
        nameError.innerHTML = "";
        emailError.innerHTML = "";
        passwordError.innerHTML = "";
        addressError.innerHTML = "";
        phoneError.innerHTML = "";

        // Validar camps
        let valid = true;

        if (!/^[a-zA-Z ]{3,}$/.test(name.value)) {
            nameError.innerHTML = "El nombre es erróneo, solo puede contener letras y espacios.";
            valid = false;
        }

        if (!/^[\w-]+(.[\w-]+)@([\w-]+.)+[a-zA-Z.]{2,7}$/.test(email.value)) {
            emailError.innerHTML = "Ingrese un correo electrónico válido.";
            valid = false;
        }

        if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password.value)) {
            passwordError.innerHTML = "La contraseña debe tener al menos 6 caracteres, una letra mayúscula, una letra minúscula y un número.";
            valid = false;
        }

        if (address.value && !/^[a-zA-Z0-9,.' ]{10,}$/.test(address.value)) {
            addressError.innerHTML = "La dirección solo puede contener letras, números y caracteres como el punto, coma y apostrofe. Debe tener al menos 10 caracteres.";
            valid = false;
        }

        if (phone.value && !/^\d{9}$/.test(phone.value)) {
            phoneError.innerHTML = "Ingrese un número de teléfono válido (10 dígitos numéricos).";
            valid = false;
        }

        // Si tots els camps són vàlids, resetejar el formulari
        if (valid) {   
            window.location.href = "inici.html";
            alert('¡Bienvenido a Sportiuws ' + name.value + ' disfruta de tu estancia!');
            form.reset();
        }
    }); 
}
    const passwordLogin = document.getElementById("password");
    const buttonContra = document.getElementById("buttonContra");

    // Funció per alternar la visibilitat de la contrasenya
    function visibilidadPassword() {
        if (passwordLogin.type === "password") {
            passwordLogin.type = "text";
            buttonContra.textContent = "Ocultar";
        } else {
            passwordLogin.type = "password";
            buttonContra.textContent = "Mostrar";
        }
    }

    // Afegir un esdeveniment de clic al botó per alternar la visibilitat de la contrasenya.
    buttonContra.addEventListener("click", visibilidadPassword);



function cargarSeccion() {
    // Obtenir el nom de la secció del títol de la pàgina
    let nombreSeccion = document.getElementsByTagName('title')[0].textContent;

    // Obtenir el nom de la secció del títol de la pàgina
    alert(`Bienvenido a la Sección de ${nombreSeccion}`);
}

function cargarLogin() {
    // Obtenir el nom de la secció del títol de la pàgina
    let nombreSeccion = document.getElementsByTagName('title')[0].textContent;

    // Mostra un missatge de benvinguda amb el nom de la secció
    alert(`Registrate y forma parte de la comunidad`);
}
function cambiarContenido() {
        // Variar visibilitat del paràgraf
        var parrafo = document.getElementById('contenido');
        if (parrafo.style.display === 'none'|| parrafo.style.display === '') {
            parrafo.style.display = 'block';
        } else {
            parrafo.style.display = 'none';
        }
}















    

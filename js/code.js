function validacionForm() {
    //alert('Hello world');
    var email=document.getElementById('email').value;  
    var psswd=document.getElementById('psswd').value;

    if(email=='' && psswd==''){
        //primero
        document.getElementById("message").innerHTML='<p style="color: red">Ambos campos están vacíos</p>';
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("psswd").style.borderColor = "red";
        //segundo
        document.getElementById("submit").style.backgroundColor = "#FF748D";
        document.getElementById("submit").style.borderColor = "blue";
        document.getElementById("submit").style.color = "red";
        //tercero
        document.getElementById("message").innerHTML='<p style="color: black">Inténtalo de nuevo</p>';
        document.getElementById("message").style.backgroundColor = "#FF748D";
        document.getElementById("message").style.borderRadius = "5px";
        document.getElementById("message").style.padding = " 0.5px 0.5px"; 
        //cuarto
        document.getElementsByTagName("label")[0].style.color = "red";
        document.getElementsByTagName("label")[1].style.color = "red";

     }else if(email==''){
        //primero
        document.getElementById("message").innerHTML='<p style="color: red">El e-mail está vacío</p>';
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("psswd").style.borderColor = "grey";
        //segundo
        document.getElementById("submit").style.backgroundColor = "#FF748D";
        document.getElementById("submit").style.borderColor = "blue";
        document.getElementById("submit").style.color = "red"; 
        //tercero
        document.getElementById("message").innerHTML='<p style="color: black">Inténtalo de nuevo</p>';
        document.getElementById("message").style.backgroundColor = "#FF748D";
        document.getElementById("message").style.borderRadius = "5px";
        document.getElementById("message").style.padding = " 0.5px 0.5px";
        //cuarto
        document.getElementsByTagName("label")[0].style.color = "red";
        document.getElementsByTagName("label")[1].style.color = "grey";

     }else if(psswd==''){
        //primero
        document.getElementById("message").innerHTML='<p style="color: red">El password está vacío</p>';
        document.getElementById("psswd").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "grey";
        //segundo
        document.getElementById("submit").style.backgroundColor = "#FF748D";
        document.getElementById("submit").style.borderColor = "blue";
        document.getElementById("submit").style.color = "red";
        //tercero
        document.getElementById("message").innerHTML='<p style="color: black">Inténtalo de nuevo</p>';
        document.getElementById("message").style.backgroundColor = "#FF748D";
        document.getElementById("message").style.borderRadius = "5px";
        document.getElementById("message").style.padding = " 0.5px 0.5px";
        //cuarto
        document.getElementsByTagName("label")[0].style.color = "grey";
        document.getElementsByTagName("label")[1].style.color = "red";

     }else{
         return true;
     }

     return false;

}
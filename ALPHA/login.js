function a(){
    var x=document.getElementById("uname").value;
    var y=document.getElementById("pass").value;

    if(x=="" && y==""){
        document.getElementById("euname").innerHTML="username is required <br>";
        document.getElementById("epass").innerHTML="password is required <br>";
        return false;
    }
    else if(x==""){
        document.getElementById("euname").innerHTML="Username is required <br>";
        return false;
    }
    else if(y==""){
        document.getElementById("epass").innerHTML="password is required <br>";
        return false;
    }
    else if(x=="omkar" && y=="omk123"){
        alert("boss welcome to the page");
        return true;
    }
    else{
        document.getElementById("ebtn").innerHTML="pagal go away <br>";
        return false;
    }



//     // alert(x);
//     // alert(y);


//     if(x=="" && y==""){
//         alert("username is required");
//         alert("password is required");
//     }
//     else if(x==""){
//         alert("username is required");
//     }
//     else if(y==""){
//         alert("password is required");
//     }

//     else if(x=="omkar" && y=="omk123"){
//     alert("Boss welcome to the page");
//     }

//     else{
//         alert("Kachra go away");
//     }
}
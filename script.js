
function BMI(){
    var hVal=parseFloat( document.getElementById('h').value );
    var wVal=parseFloat( document.getElementById('w').value );

    var hUt=document.getElementById('hSel').value;
    var wUt=document.getElementById('wSel').value;
    var res=0.0;

    if(hUt=="none" || wUt=="none" || hVal=="" || wVal==""){
        alert("Enter all Values & Units Appropriately");
        return;
    }

    if(hUt=='m'){
        if(wUt=='kg'){
            res=wVal/(hVal*(hVal*1.0));
        }
        else{
            res=(wVal/0.454)/(hVal*hVal);
        }
    }
    else if(hUt=='in'){
        if(wUt=='kg'){
            res=wVal/((hVal*0.0254)*(hVal*0.0254));
        }
        else{
            res=(wVal*0.454)/((hVal*0.0254)*(hVal*0.0254));
        }
    }   
    document.getElementById("res").value=res.toFixed(2);
    
    const resDiv = document.getElementById("resDiv");
    resDiv.removeAttribute("hidden");
    resDiv.style.display="inline-block";

    if(res<18.5){
        document.getElementById("imgg").setAttribute("src","underweight.png");
        document.getElementById("resValue").innerHTML ="BMI: " + res.toFixed(2);
        document.getElementById("category").style.color="rgb(242, 255, 0)";
        document.getElementById("category").innerHTML=">> Under Weight <<";
    }
    else if(res>=18.5 && res<25){
        document.getElementById("imgg").setAttribute("src","normalweight.png");
        document.getElementById("resValue").innerHTML="BMI: " + res.toFixed(2);
        document.getElementById("category").style.color="rgb(43, 255, 0)";
        document.getElementById("category").innerHTML=">> Healthy & Fit <<";
    }
    else if(res>=25 && res<30){
        document.getElementById("imgg").setAttribute("src", "overweight.png");
        document.getElementById("resValue").innerHTML="BMI: " + res.toFixed(2);
        document.getElementById("category").style.color="rgb(242, 255, 0)"
        document.getElementById("category").innerHTML=">> Over Weight <<";
    }
    else if(res>=30){
        document.getElementById("imgg").setAttribute("src","obese.png");
        document.getElementById("resValue").innerHTML="BMI: "+res.toFixed(2);
        document.getElementById("category").style.color="rgb(255, 0, 0)"
        document.getElementById("category").innerHTML=">> Obese & Fatty <<"
    }

    return;
}


function myfunc() {
    wgt = document.getElementById("wgt");
    wgt_int = parseInt(wgt.value);
    hgt = document.getElementById("hgt");
    hgt_int = parseInt(hgt.value)/100;
    bmi = wgt_int/(hgt_int*hgt_int);
    document.getElementById("result").innerHTML = "Your BMI is: "+bmi;
    res = document.getElementById("result2");
    if (bmi<18) {
        res.innerHTML="Underweight";
    }
    else if (bmi>=18 && bmi<=25) {
        res.innerHTML="Normal";
    }
    else if (bmi>25 && bmi<=30) {
        res.innerHTML="Overweight";
    }
    else if(bmi>30){
        alert('Warning! You wgt is too heavy')
        res.innerHTML="Obese";
    }

}
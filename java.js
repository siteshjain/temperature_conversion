const calculate=()=>{
    const number=document.getElementById('temp').value;

    const select=document.getElementById('diff');
    const tempValue=diff.options[select.selectedIndex].value;

   const celTofah=(a)=>{
       let fahrenheit=Math.round((a*9/5)+32);
       return fahrenheit;
   }
   const celTokel=(b)=>{
       let kelvin=Math.round(Number(b)+273);
       console.log(kelvin);
       return kelvin;
   }
   const keltocel=(a)=>{
       let celsicus=Math.round(Number(a)-273);
       return celsicus;
   }
   const keltofah=(a)=>{
       let fahrenheit=Math.round((Number(a)-273)*9/5+32);
       return fahrenheit;
   }

   const fahtokel=(a)=>{
       let kelvin= Math.round((Number(a)-32)*5/9+273);
       return kelvin;
   }
   const fahtocel=(a)=>{
    let celsicus= Math.round((Number(a)-32)*5/9);
    return celsicus;
}


    let res1,res2;

    if(tempValue==='cel'){
        res1=celTokel(number);
        res2=celTofah(number);
        document.getElementById('result1').innerHTML=`${res2}&deg Fahrenheit`;
        document.getElementById('result2').innerHTML=`${res1}&degKelvin`;

    }
    else if(tempValue==='kel')
    {
        res1=keltocel(number);
        res2=keltofah(number);
        document.getElementById('result1').innerHTML=`${res1}&degCelsius`;
        document.getElementById('result2').innerHTML=`${res2}&deg Fahrenheitt`;


    }
    else if(tempValue==='fah')
    {
        res1=fahtokel(number);
        res2=fahtocel(number);
        document.getElementById('result2').innerHTML=`${res1}&degKelvin`;
        document.getElementById('result1').innerHTML=`${res2}&degCelsius`;

    }

  
}
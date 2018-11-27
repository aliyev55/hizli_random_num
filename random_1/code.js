var fields = document.getElementsByTagName("p");
var btn = document.getElementById("clicker");
var scnds = document.getElementsByClassName("seconds");
var _p4 = document.getElementsByTagName('p');

// --round_num =Math.round(Math.random()*4);
function calculator(a) {
   
    for(var i=0;i< _p4.length;i++){
        _p4[i].className = _p4[i].className.replace(" show","");          
        _p4[i].className = _p4[i].className.replace("vsbl","");
        _p4[i].className+=" show";
    


    }



    var list=[];
      
      for(var y=1;y<=a;y++){
        
          list[y-1]=y;
          //console.log("listnumber"+ list[y-1]);
         

      }



    var i = a-1;
    //console.log(i);
    while (list.length > 0) {
        //#endregion

        round_num = Math.round(Math.random() * i);
       // console.log(round_num);
        //   console.log("regemler" +"  "+ round_num);
         //console.log(list[round_num])
        fields[i].innerHTML = list[round_num];
        list.splice(round_num, 1);
        i--;


    }


}


document.getElementById("clicker").addEventListener('click',calculator);
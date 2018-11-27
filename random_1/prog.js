$(document).ready(function () {

    var chk = 0;
    var vrb;

    $("#btn5").click(function () {
        $("#inpt").val(5);

        vrb = null;

        txt_chg();





    });


    $("#btn10").click(function () {
        $("#inpt").val(10);
        txt_chg();


    });


    $("#btn20").click(function () {
        $("#inpt").val(20);


      brb=  setInterval(function(){
            
           

        })
    });

    $("#inpt").change(function () {

        alert("dsdsds");
    })



    // var txt =function  text_changer() { 

    //   var b=$("#inpt").val();
    //   b--;

    //   if(b>=0){
    //     $("#inpt").val(b--);
    //   }
    //  if(b==0){
    //      return false;
    //  }

    //  } 


    var txt = function txt_chg() {
        var b = $("#inpt").val();

        vrb = setInterval(function () {
            //#endregion
            b--;
            if (b >= 0) {

                $("#inpt").val(b)
            } else {

                clearInterval(vrb);
            }

        }, 1000)



    }




});
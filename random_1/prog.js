$(document).ready(function () {
    var b = 0;
    var chk = 0;
    var vrb;







    $("#btn5").click(function () {
        $("#inpt").val(5);


        clearInterval(vrb);
        b = 5;
        vrb = setInterval(function () {

            b--;


            if (b == 0) {

                $(".qstn").removeClass("show").addClass("vsbl");


            }
            if (b < 0) {
                clearInterval(vrb);
            }
            else {
                $("#inpt").val(b);
            }

        },1000)




    });





    $("#chck_ans").click(function () {

        var inpts = $(".inp_ans");

        var answr = $(".qstn");

        

        for (i = 0; i < inpts.length; i++) {

            if (inpts[i].value == answr[i].innerText) {

                inpts[i].classList.Name = inpts[i].classList.remove("back_green", "back_red")
                
                inpts[i].classList.Name = inpts[i].classList.add("back_green");
                //inpts[i].removeClass("back_green back_red").addClass("back_green");
            }
            else {

                inpts[i].classList.Name = inpts[i].classList.remove("back_green","back_red")

                inpts[i].classList.Name = inpts[i].classList.add("back_red");

            }


        }



    })




   


    $("#btn10").click(function () {
        $("#inpt").val(10);
        clearInterval(vrb);
        b = 10;
        vrb = setInterval(function () {

            b--;
            if (b == 0) {

                $(".qstn").removeClass("show").addClass("vsbl");


            }
            if (b < 0) {
                clearInterval(vrb);
            }
            else {
                $("#inpt").val(b);
            }

        },1000)


    });


    $("#btn20").click(function (b) {
        $("#inpt").val(20);

        b = 20;



        vrb = setInterval(function () {

            b--;
            if (b == 0) {

                $(".qstn").removeClass("show").addClass("vsbl");


            }

            if (b < 0) {
                clearInterval(vrb);
            }
            else {
                $("#inpt").val(b);
            }

        },1000)
    });




    


    

    


   



});
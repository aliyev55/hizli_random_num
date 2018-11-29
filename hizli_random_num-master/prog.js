$(document).ready(function() {
    var b = 0;
    var chk = 0;
    var vrb;
    var clk_btn = 0;
    var all_ans = 0;
    var true_ans = 0;
    var wrong_ans = 0;






    $(".button_2").click(function() {




    })



    $(".button_1").click(function() {

        var inpts = $(".inp_ans");
        for (i = 0; i < inpts.length; i++) {

            inpts[i].classList.Name = inpts[i].classList.remove("back_green", "back_red");

            inpts[i].value = "";
        }


        clearInterval(vrb);



        console.log(clk_btn);
        b = clk_btn;

        $("#inpt").val(b);

        vrb = setInterval(function() {

            b--;


            if (b == 0) {

                $(".qstn").removeClass("show").addClass("vsbl");


            }
            if (b < 0) {
                clearInterval(vrb);
            } else {
                $("#inpt").val(b);
            }

        }, 1000)




    })



    $("#btn5").click(function() {
        $("#inpt").val(5);
        clk_btn = 5;

        clearInterval(vrb);
        b = 5;
        vrb = setInterval(function() {

            b--;


            if (b == 0) {

                $(".qstn").removeClass("show").addClass("vsbl");


            }
            if (b < 0) {
                clearInterval(vrb);
            } else {
                $("#inpt").val(b);
            }

        }, 1000)




    });





    $("#chck_ans").click(function() {

        var inpts = $(".inp_ans");

        var answr = $(".qstn");
        $(".qstn").removeClass("vsbl").addClass("show");


        all_ans++;

        $(".all_answ").val(all_ans);

        for (i = 0; i < inpts.length; i++) {
            console.log(inpts[i].value + " " + answr[i].innerText)
            if (inpts[i].value == answr[i].innerText) {

                inpts[i].classList.Name = inpts[i].classList.remove("back_green", "back_red")

                inpts[i].classList.Name = inpts[i].classList.add("back_green");
                //inpts[i].removeClass("back_green back_red").addClass("back_green");
            } else {

                inpts[i].classList.Name = inpts[i].classList.remove("back_green", "back_red")

                inpts[i].classList.Name = inpts[i].classList.add("back_red");

            }


        }

        var tmp = $(".back_green");

        if (tmp.length == inpts.length) {
            true_ans++;
            $(".true_answ").val(true_ans);
        } else {
            wrong_ans++;
            $(".wrong_answ").val(wrong_ans);


        }

    })







    $("#btn10").click(function() {
        $("#inpt").val(10);
        clearInterval(vrb);
        clk_btn = 10;
        b = 10;
        vrb = setInterval(function() {

            b--;
            if (b == 0) {

                $(".qstn").removeClass("show").addClass("vsbl");


            }
            if (b < 0) {
                clearInterval(vrb);
            } else {
                $("#inpt").val(b);
            }

        }, 1000)


    });


    $("#btn20").click(function(b) {
        $("#inpt").val(20);

        b = 20;

        clearInterval(vrb);
        clk_btn = 20;
        vrb = setInterval(function() {

            b--;
            if (b == 0) {

                $(".qstn").removeClass("show").addClass("vsbl");


            }

            if (b < 0) {
                clearInterval(vrb);
            } else {
                $("#inpt").val(b);
            }

        }, 1000)
    });
















});
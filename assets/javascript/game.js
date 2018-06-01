$(document).ready(function () {
    //variables
    var generated;
    var oneV;
    var twoV;
    var threeV;
    var fourV;
    var win = 0;
    var loss = 0;
    var myTotal = 0;

    //generate number
    generated = Math.floor(Math.random() * 101 + 19);
    $("#generate").text(generated);

    //reset game
    function reset() {
        generated = Math.floor(Math.random() * 101 + 19);
        $("#generate").text(generated);
        myTotal = 0;
        oneV = Math.floor(Math.random() * 12 + 1);

        twoV = Math.floor(Math.random() * 12 + 1);

        threeV = Math.floor(Math.random() * 12 + 1);

        fourV = Math.floor(Math.random() * 12 + 1);
    }

    //numbers for crystal
    oneV = Math.floor(Math.random() * 12 + 1);

    twoV = Math.floor(Math.random() * 12 + 1);

    threeV = Math.floor(Math.random() * 12 + 1);

    fourV = Math.floor(Math.random() * 12 + 1);


    //adding crystal together 
    $('.crystals').on("click", ".one", function () {
        myTotal = oneV + myTotal
        $('#total').html(" Your total is now : " + myTotal);
        console.log(myTotal)

        if (myTotal == generated) {
            win = win + 1
            $('#wins').html(win);
            reset();

            alert("You Win!")
        } else if (myTotal > generated) {
            loss = loss + 1
            $('#losses').html(loss);
            alert("You Lose")
            reset();

        }
    });

    $('.crystals').on("click", ".two", function () {
        myTotal = twoV + myTotal
        $('#total').html(" Your total is now : " + myTotal);
        console.log(myTotal)

        if (myTotal == generated) {
            win = win + 1
            $('#wins').html(win);
            reset();

            alert("You Win!")
        } else if (myTotal > generated) {
            loss = loss + 1
            $('#losses').html(loss);
            alert("You Lose")
            reset();
        }
    });
    $('.crystals').on("click", ".three", function () {
        myTotal = threeV + myTotal
        $('#total').html(" Your total is now : " + myTotal);
        console.log(myTotal)

        if (myTotal == generated) {
            win = win + 1
            $('#wins').html(win);
            reset();

            alert("You Win!")
        } else if (myTotal > generated) {
            loss = loss + 1
            $('#losses').html(loss);
            alert("You Lose")
            reset();
        }
    });

    $('.crystals').on("click", ".four", function () {
        myTotal = fourV + myTotal
        $('#total').html(" Your total is now : " + myTotal);
        console.log(myTotal)

        if (myTotal == generated) {
            win = win + 1
            $('#wins').html(win);
            reset();

            alert("You Win!")
        } else if (myTotal > generated) {
            loss = loss + 1
            $('#losses').html(loss);
            alert("You Lose")
            reset();
        }
    });

    //compare to generated number
    $("generate").text(generated)




    //declare winner loser 






    //update win/loss


    //start next round

});
const tImage=['dog.jpg','car.jpg','cat.png','bike.jpg','bear.jpg','brush.jpg',
'bat.jpg','clock.jpeg','coffee.jpg','chicken.jpg','cushion.jpg','dice.jpg','dinasour.jpg',
'duck.jpg','eggs.jpg','facebook.png','facemask.png','fish.jpg','frog.jpg','giraffe.jpg',
'glove.jpg','house.jpg','lemons.jpg','oranges.jpg','panda.jpg',
'penguin.jpg','pig.jpg','popcorn.jpg','rhino.jpg','shoes.jpeg','sims.jpg','twitter.png',
'Newyork.jpg','monkey.jpg','owl.jpg','turtle.jpg','train.jpg','mr bean.jpg',
'Scooby Doo.jpg','Simpsons.jpg','spongebob.jpg'
];

let tImageNumber=0;
let winner = false;
var seconds = 100;
function countdown(){
    let countd = setInterval(function() {
        seconds--;
        document.getElementById("countdown").textContent = seconds;
        if (seconds <= 0) {
            clearInterval(countd);
            document.getElementById("countdown").textContent = 'Loser!';
        }
        if (winner == true){
            $("#countdown").html('WINNER');
            clearInterval(countd);
        }
    }, 1000); 
    seconds=100;
    $("#timeRemain").html('');
}

$(document).ready(function() {
    $("#stopBtn").click(function() {
        $("#timeRemain").html(seconds);
        seconds=100;
        winner = true;
    });

});

$(document).ready(function() {
    $("#nextImage").click(function() {
        tImageNumber=Math.floor(Math.random() * tImage.length);
        console.log('./images/' + tImage[tImageNumber]);
        $("#tImage").attr('src','./images/' + tImage[tImageNumber]);
        $("#tName").html(tImage[tImageNumber].replace(/\..+$/, '').toUpperCase());
        console.log(tImage[tImageNumber]);
        winner = false;
    });

});
  


  
var randomNumber1 =Math.floor(Math.random() * 6);
randomNumber1 = randomNumber1 + 1;
console.log(randomNumber1);

var randomNumber2 =Math.floor(Math.random() * 6);
randomNumber2 = randomNumber2 + 1;
console.log(randomNumber2);

document.querySelector(".img1").src = `images/dice${randomNumber1}.png`;
document.querySelector(".img2").src = `images/dice${randomNumber2}.png`;

if(randomNumber1===randomNumber2)
    {
        document.querySelector("h1").innerHTML="Draw";
    }
    else if(randomNumber1 > randomNumber2)
        {
            document.querySelector("h1").innerHTML="🚩Player1 Wins";
        }    
        else
        {
            document.querySelector("h1").innerHTML="Player2 Wins 🚩";
        }
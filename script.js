function roll_dice(){
	var dice = Math.floor(Math.random() * 6) + 1;
	return (dice);
}

var src1 = roll_dice();
var src2 = roll_dice();

var image = document.querySelectorAll("img")[0];
image.setAttribute("src", "img/dice"+src1+".png");
document.querySelectorAll("img")[1].setAttribute("src", "img/dice"+src2+".png");

if (src1 > src2)
{
	document.querySelector("h1").textContent = "🚩Player 1 Won";
}
if (src2 > src1)
{
	document.querySelector("h1").textContent = "Player 2 Won 🚩";
}
if (src1 === src2)
{
	document.querySelector("h1").textContent = "🏳️ NO one Wins 🏳️";
}

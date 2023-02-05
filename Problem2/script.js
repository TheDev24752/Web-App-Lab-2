const __masters = [ "ASSUMPTION",
	"DISCOURSE",
	"CONSTRUCTED",
	"METANARRATIVE",
	"STRUCTURALISM",
	"DECONSTRUCTING",
	"INTERPRETATION",
	"NORMATIVITY",
	"ESSENTIAL",
	"SYNTHESIS" ];

function chooseWord()
{
	const masterWordDiv = document.getElementById("master_word");
	const masterWordChoice = Math.floor(Math.random() * __masters.length);
	const masterWord = __masters[masterWordChoice];
	
	for (var i = 0; i < masterWord.length; i++)
	{
		newButton = document.createElement("input");
		newButton.setAttribute("type", "button");
		newButton.setAttribute("id", "letter-" + i);
		newButton.setAttribute("name", "letters");
		newButton.setAttribute("value", masterWord[i]);
		newButton.setAttribute("onclick", "addLetter('" + masterWord[i] + "', 'letter-' + " + i + ")");
		masterWordDiv.appendChild(newButton);
	}
	
	document.getElementById("start").remove();
	document.getElementById("guess_box").hidden = false;
	document.getElementById("check_word").hidden = false;
}

function reenableLetters()
{
	letters = document.getElementsByName("letters");
	for (var i = 0; i < letters.length; i++)
		letters[i].disabled = false;
}

function addWord()
{
	// get the entered word
	word = document.getElementById("guess_box").value;
	
	// I think the idea would be to eventually verify that the user's guess
	// is a vaild English word here at some point... checkword(word) -> bool?
	
	// add word to the list of words
	document.getElementById("words").innerHTML += word + " ";

	// reset game
	reenableLetters();
	document.getElementById("guess_box").value = "";
}

function addLetter(letter, btn_id)
{
	document.getElementById("guess_box").value += letter;
	document.getElementById(btn_id).disabled = true;
}
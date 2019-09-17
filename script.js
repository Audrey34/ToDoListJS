
alert("Bonjour!");

console.log("Le JS c'est cool!!!");

var tacheInput=document.getElementById("nouvelle-tache");
var addButton=document.getElementsByTagName("button")[0];
var incompletetacheHolder=document.getElementById("tache-a-faire");
var completedtachesHolder=document.getElementById("tache-accomplie");


var createNewtacheElement=function(tacheString){

	var listItem=document.createElement("li");
	var checkBox=document.createElement("input");
	var label=document.createElement("label");
	var editerInput=document.createElement("input");
	var editerButton=document.createElement("button");
	var effacerButton=document.createElement("button");

	label.innerText=tacheString;
	checkBox.type="checkbox";
	editerInput.type="text";
	editerButton.innerText="Editer";
	editerButton.className="editer";
	effacerButton.innerText="Effacer";
	effacerButton.className="effacer";


	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editerInput);
	listItem.appendChild(editerButton);
	listItem.appendChild(effacerButton);

	return listItem;
};



var addtache=function(){

	var listItemName = tacheInput.value || "New Item";   // We hold the current value or provide the default one
   var listItem = createNewtacheElement(listItemName);  // Create a new list item with the text from #new-tache
   incompletetachesHolder.appendChild(listItem);        // Append listItem to incompletetachesHolder
   binTacheEvents(listItem, tacheCompleted);            // We bind it to the incomplete holder
   tacheInput.value = "";

};


var editertache=function(){

var listItem=this.parentNode;
 var button = listItem.getElementsByTagName("button")[0];
var editerInput=listItem.querySelector('input[type=text]');
var label=listItem.querySelector("label");
var containsClass=listItem.classList.contains("editerMode");

		if(containsClass){
			label.innerText=editerInput.value;
      button.innerText = "Editer";
		}else{
			editerInput.value=label.innerText;
      button.innerText = "Sauvegarder";
		}

		listItem.classList.toggle("editerMode");
}


var effacertache=function(){
		var listItem=this.parentNode;
		var ul=listItem.parentNode;
		ul.removeChild(listItem);

};
var addtache = function() {                            // Add a new tache
  var listItemName = tacheInput.value || "New Item";   // We hold the current value or provide the default one
  var listItem = createNewtacheElement(listItemName);  // Create a new list item with the text from #new-tache
  incompletetacheHolder.appendChild(listItem);        // Append listItem to incompletetacheHolder
  binTacheEvents(listItem, tacheCompleted);            // We bind it to the incomplete holder
  tacheInput.value = "";                               // Resets the field
};


var tacheCompleted=function(){
	var listItem=this.parentNode;
	completedtachesHolder.appendChild(listItem);
				binTacheEvents(listItem, tacheIncomplete);

};


var tacheIncomplete=function(){

		var listItem=this.parentNode;
	incompletetacheHolder.appendChild(listItem);
			binTacheEvents(listItem,tacheCompleted);
};


addButton.addEventListener("click",addtache);
addButton.addEventListener("click",ajaxRequest);


var binTacheEvents=function(tacheListItem,checkBoxEventHandler){

	var checkBox=tacheListItem.querySelector("input[type=checkbox]");
	var editerButton=tacheListItem.querySelector("button.editer");
	var effacerButton=tacheListItem.querySelector("button.effacer");

			editerButton.onclick=editertache;

			effacerButton.onclick=effacertache;

			checkBox.onchange=checkBoxEventHandler;
};
var ajaxRequest=function(){

};

addButton.addEventListener("click", addtache);      // Adds event listener for the click handler to the addtache function
addButton.addEventListener("click", ajaxRequest);  //

	for (var i=0; i<incompletetacheHolder.children.length;i++){

		binTacheEvents(incompletetacheHolder.children[i],tacheCompleted);
	}


	for (var i=0; i<completedtachesHolder.children.length;i++){

		binTacheEvents(completedtachesHolder.children[i],tacheIncomplete);
	}

document.getElementById("txtjs").innerHTML = "faire une todolist";

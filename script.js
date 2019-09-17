
alert("Bonjour!");

console.log("Le JS c'est cool!!!");

var taskInput=document.getElementById("nouvelle-tache");
var addButton=document.getElementsByTagName("button")[0];
var incompleteTaskHolder=document.getElementById("tache-a-faire");
var completedTasksHolder=document.getElementById("tache-accomplie");


var createNewTaskElement=function(taskString){

	var listItem=document.createElement("li");


	var checkBox=document.createElement("input");

	var label=document.createElement("label");

	var editerInput=document.createElement("input");

	var editerButton=document.createElement("button");

	var effacerButton=document.createElement("button");



	label.innerText=taskString;

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
}



var addTask=function(){

	var listItem=createNewTaskElement(taskInput.value);!!!!

	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	taskInput.value="";

}


var editerTask=function(){

var listItem=this.parentNode;
 var button = listItem.getElementsByTagName("button")[0];
var editerInput=listItem.querySelector('input[type=text]');
var label=listItem.querySelector("label");
var containsClass=listItem.classList.contains("editerMode");

		if(containsClass){


			label.innerText=editerInput.value;
      button.innerText = "Edit";
		}else{
			editerInput.value=label.innerText;
      button.innerText = "Save"; 
		}

		listItem.classList.toggle("editerMode");
}


var effacerTask=function(){

		var listItem=this.parentNode;
		var ul=listItem.parentNode;

		ul.removeChild(listItem);

}



var taskCompleted=function(){

	var listItem=this.parentNode;
	completedTasksHolder.appendChild(listItem);
				bindTaskEvents(listItem, taskIncomplete);

}


var taskIncomplete=function(){

		var listItem=this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
			bindTaskEvents(listItem,taskCompleted);
}



var ajaxRequest=function(){

}

addButton.onclick=addTask;
addButton.addEventListener("click",addTask);
addButton.addEventListener("click",ajaxRequest);


var bindTaskEvents=function(taskListItem,checkBoxEventHandler){

	var checkBox=taskListItem.querySelector("input[type=checkbox]");
	var editerButton=taskListItem.querySelector("button.editer");
	var effacerButton=taskListItem.querySelector("button.effacer");



			editerButton.onclick=editerTask;

			effacerButton.onclick=effacerTask;

			checkBox.onchange=checkBoxEventHandler;
}


	for (var i=0; i<incompleteTaskHolder.children.length;i++){

		bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
	}


	for (var i=0; i<completedTasksHolder.children.length;i++){

		bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
	}

document.getElementById("txtjs").innerHTML = "faire une todolist";

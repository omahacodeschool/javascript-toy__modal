window.addEventListener("load", function(argument) {

	//button that brings up window
	var openButton = document.getElementById('openbutton');

	//button that submits note 
	var addButton = document.getElementById('addbutton');

	//button that cancels submission
	var cancelButton = document.getElementById('cancelbutton');

	//modal window to hide/unhide
	var modalWindow = document.getElementById('modalwrapper');

	openButton.addEventListener('click', function(){
		modalWindow.style.display = "block";
	})

	cancelbutton.addEventListener('click', function(){
		modalWindow.style.display = "none";
		document.getElementById('modal__text').value = null;
	})

	addButton.addEventListener('click', function(){
		modalWindow.style.display = "none";
		document.getElementById('displaynotes').innerHTML = document.getElementById('modal__text').value;
		document.getElementById('modal__text').value = null;
	})


});
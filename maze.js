window.onload;

let boundaryOver = document.getElementById("boundary1");

boundaryOver.addEventListener("mouseover", function warning() 
	{
		boundaryOver.classList.add("youlose");
	}
)

			


for ( var count = 0; count < document.getElementsByClassName("boundary").length - 1; count++)
		{

			document.getElementsByClassName("boundary")[count].addEventListener("mouseover", function control()
					{
						for (var n = 0; n < document.getElementsByClassName("boundary").length - 1; n++)
						{
		
						document.querySelectorAll("div.boundary")[n].classList.add("youlose");

						}

							let newElement = document.createElement("h2");
							newElement.textContent = "You Lose Bredda!";
						    document.body.append(newElement);
						    var status = document.createAttribute("id");
							status.value = "status";
							newElement.setAttributeNode(status);	

						 
					})
		}



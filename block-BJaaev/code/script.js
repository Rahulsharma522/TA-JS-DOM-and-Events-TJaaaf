function todolist(event) {
	if(event. keyCode === 13) {
		var ul = document.querySelector("ul");
		var li = document.createElement("li");
		var todocheck = document.createElement("input");
		todocheck.type = "checkbox";
		var p = document.createElement("p");
		p.textContent = document.querySelector("input").value;
		var del = document.createElement("button");
		del.innerText = "X";
		ul.appendChild(li);
		li.appendChild(todocheck);
		li.appendChild(p)
		li.appendChild(del);
		document.querySelector("input").value="";
		del.addEventListener("click", () => li.style.display="none");

	}
}
document.querySelector("input").addEventListener("keyup", todolist);
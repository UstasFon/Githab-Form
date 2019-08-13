const menu = document.querySelectorAll(".navi__image a");
console.dir(menu)

const arr = [4,52,3]

for (let i=0; i<menu.length; i=i+1){
	menu[i].onclick=function(event){
		console.log(event)
		event.preventDefault();
		menu[i].style.color="green";
		window.location="vk.com"
	}

}
const button = document.getElementsByClassName("button");
const block = document.getElementsByClassName("block");

for (let i = 0; i<button.length; i++) {
	button[i].onclick = function() {
		for (let j = 0; j < block.length; j++){
			block[j].classList.add("d-none");
		}
		block[i].classList.remove("d-none");
	}
}







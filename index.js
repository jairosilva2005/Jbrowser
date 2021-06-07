let showMenu = false;
let menu = document.getElementById('menu');

document.getElementById('show').onclick = () => {
	if(showMenu == false) {
		menu.style.display = 'flex';
		showMenu = true;
	} else {
		menu.style.display = 'none';
		showMenu = false;
	}
}
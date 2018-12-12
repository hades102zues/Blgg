const hamburger= document.querySelector('.hamburger');
const sideDrawer = document.querySelector('.side-drawer');


const hamburgerClickHandler = ()=>{
	
	sideDrawer.style.transform='translateX(0)';
	console.log(sideDrawer);
}

hamburger.addEventListener('click', hamburgerClickHandler);
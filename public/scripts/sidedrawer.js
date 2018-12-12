const hamburger= document.querySelector('.hamburger');
const sideDrawer = document.querySelector('.side-drawer');
const backdrop = document.querySelector('.backdrop');

console.log(sideDrawer, " ", backdrop);
const hamburgerClickHandler = ()=>{
	
	sideDrawer.style.transform='translateX(0)';
	backdrop.style.display='block';

	
};

const backdropClickHandler = ()=>{
	backdrop.style.display='none';
	sideDrawer.style.transform='translateX(-100%)';
};

hamburger.addEventListener('click', hamburgerClickHandler);
backdrop.addEventListener('click', backdropClickHandler);
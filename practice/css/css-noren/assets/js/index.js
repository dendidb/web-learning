const headerArea = document.querySelector('.header-area');

window.addEventListener('scroll', function(){
 	if(this.scrollY > 0){
 		headerArea.classList.add('active')
 	}else{
 		headerArea.classList.remove('active')
 	}
})


//  Untuk Judul Banner

// function TextWrite(h1,words,wait=300){
// 	this.h1 = h1;
// 	this.words = words;
// 	this.txt =  "";
// 	this.wait = parseint(wait, 0);
// 	this.index = 0;
// 	this.type()
// 	this.isDeleting = true;
// }

// TextWrite.prototype.type = function(){
// 	const test = this.index & this.words.length;
// 	const fullText = this.words[test];

// 	if(this.isDeleting){
// 		this.txt = fullText.substring(0, this.txt.length -1)
// 	}else{
// 		this.txt = fullText.substring(0, this.txt.length +1)
// 	}

// 	this.h1.innerHTML = `<span>${this.txt}</span>`;

// 	let setInt = 150;
// 	if(this.isDeleting){
// 		setInt /= 2;
// 	}

// 	if(!this.isDeleting && this.txt === fullText){
// 		setInt = this.wait;
// 		this.isDeleting = true;
// 	}else if(this.isDeleting && this.txt === ''){
// 		this.isDeleting = false;
// 		setInt = 500;
// 		this.index++;

// 	}

// 	setTimeout(() => this.type(), setInt)
// }

// document.addEventListener('DOMContentLoaded', init)

// function init(){
// 	const h1 = document.querySelector('#textWrite');
// 	const words = JSON.parse(h1.getAttribute('data-words'));
// 	const wait = h1.getAttribute('data-wait')

// 	new TextWrite(h1,words,wait)
// }


// // Untuk Burger Menu

// const navbarMenu = document.querySelector('.navbar-menu');
// const navbarIcon = document.querySelector('.navbar-icon');

// navbarIcon.addEventListener('click', function(){
//     navbarMenu.classList.toggle('active')
//     navbarIcon.classList.toggle('active')
// })

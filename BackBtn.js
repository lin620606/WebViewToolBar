(()=>{  
	document.body.innerHTML +=`
	<div onclick = '(()=>location.href='uniwebview://return-menu')()' id = 'bk_btn'>
		<div id = 'bk_btn_triangle'></div>
		<div id = 'bk_btn_bar' ></div>
	</div>
	<style>
		#bk_btn 
		{ 
			z-index:500; 
			position: fixed;  
			bottom:40px;  
			left:40px;  
			background-color: #0C9;  
			border-radius: 50%;
		}
		#bk_btn_triangle 
		{  
			position: relative;  
			width:0;  
			height:0;  
			background-color: #0C9;  
			border-radius: 50%;
		}
		#bk_btn_bar 
		{  
			position: relative;  
			background-color: white;
		}
	</style>`;
	let bkBtnSize = 52;
	let bkBtn=document.getElementById('bk_btn');
	bkBtn.onclick=()=>{location.href='uniwebview://return-menu'};
	bkBtn.style.height = bkBtnSize+'px';bkBtn.style.width = bkBtnSize+'px';
	let bkBtnTriangle = document.getElementById('bk_btn_triangle');
	bkBtnTriangle.style.borderTop = bkBtnSize*0.25+'px solid transparent';
	bkBtnTriangle.style.borderBottom = bkBtnSize*0.25+'px solid transparent';
	bkBtnTriangle.style.borderRight = bkBtnSize*0.25+'px solid white';
	bkBtnTriangle.style.top=bkBtnSize*0.25+'px';
	bkBtnTriangle.style.left= bkBtnSize*0.2+'px';
	let bkBtnBar = document.getElementById('bk_btn_bar');
	bkBtnBar.style.height = bkBtnSize*0.15 + 'px';
	bkBtnBar.style.width= bkBtnSize*0.25+'px';
	bkBtnBar.style.top= bkBtnSize*-0.07+'px';
	bkBtnBar.style.left= bkBtnSize*0.44+ 'px';
})();
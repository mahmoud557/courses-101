function cheek_input(value){
	if(value.length>5){
		console.log('valed')
	}else{
		console.log('not_valie')
	}
}

function listen_to_click_enter(){
	var input_0=document.getElementById('input_0');
	input_0.addEventListener('keyup',(e)=>{
	    if (event.key === 'Enter') {
	    	var value = e.currentTarget.value
	    	cheek_input(value)
	    }
	})
}

listen_to_click_enter()


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

	var input_1=document.getElementById('input_1');
	input_1.addEventListener('keyup',(e)=>{
	    if (event.key === 'Enter') {
	    	var value = e.currentTarget.value
	    	cheek_input(value)
	    }
	})

	var input_2=document.getElementById('input_2');
	input_2.addEventListener('keyup',(e)=>{
	    if (event.key === 'Enter') {
	    	var value = e.currentTarget.value
	    	cheek_input(value)
	    }
	})

}

listen_to_click_enter()


// PORTABILIDADE

$('#copiarTextoPort').on("click", e=>{
	var inputs = $('.htmlOutputPort')

	var valores = ""
	inputs.each((a,b)=>{
		valores+=(b.value)+"\n\n"
	})

	htmlOutputPort.value = valores
	htmlOutputPort.focus()
	htmlOutputPort.select()
	document.execCommand("copy")
})

// SISTEMAS

$('#copiarTextoSist').on("click", e=>{
	var inputs = $('.htmlOutputSist')

	var valores = ""
	inputs.each((a,b)=>{
		valores+=(b.value)+"\n\n"
	})

	htmlOutputSist.value = valores
	htmlOutputSist.focus()
	htmlOutputSist.select()
	document.execCommand("copy")
})

// INFRAESTRUTURA

$('#copiarTextoInf').on("click", e=>{
	var inputs = $('.htmlOutputInf')

	var valores = ""
	inputs.each((a,b)=>{
		valores+=(b.value)+"\n\n"
	})

	htmlOutputInf.value = valores
	htmlOutputInf.focus()
	htmlOutputInf.select()
	document.execCommand("copy")
})

// RESET

$('#copiarTextoRes').on("click", e=>{
	var inputs = $('.htmlOutputRes')

	var valores = ""
	inputs.each((a,b)=>{
		valores+=(b.value)+"\n\n"
	})

	htmlOutputRes.value = valores
	htmlOutputRes.focus()
	htmlOutputRes.select()
	document.execCommand("copy")
})

//BOTÃO COPIAR

function clicar(){
	alert("Dados copiados!");
}
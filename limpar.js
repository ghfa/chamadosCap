const btn = document.querySelectorAll("[type=reset]")


for( let b of btn )
{
	b.addEventListener("click", e => {

		if ( !confirm("Deseja limpar o campo digitado?") )
		{
			e.preventDefault();
		}

	})
}
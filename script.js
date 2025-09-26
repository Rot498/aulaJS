// alert('Hello Senac');
// console.log('Meu nome é Robert');

// for (let a = 0; a < 1000; a++) 
//     {
//      if(a == 1)   
//     {
//         alert('Estou te monitorando');
//     }
//      else if (a == 2)
//     {
//         alert('Faça o pix!');
//     }
//      else if (a == 3)
//     {
//         alert('Faça logo que vou divulgar suas fotos');
//     }
//      else
//     {
//         console.log(a);
//     }
// }        

document.addEventListener("DOMContentLoaded", () => {
    alert('Funcionou 1');
    const selectTipo = document.getElementById('slctipoCampo');
    const labelPrincipal = document.getElementById('lblPrincipal');
    const grupoOutros = document.getElementById('grupoOutros');
    const inputPrincipal = document.getElementById('campoPrincipal');
    const inputOutros = document.getElementById('descricaoOutros');
    const btnEnviar = document.getElementById('btnEnviar');
    const btnLimpar = document.getElementById('btnLimpar');
    const feedback = document.getElementById('feedback');


    function aplicarRegras() {
        
        if(selectTipo.value == "nome")
        {
            labelPrincipal.textContent = "Nome";
        }
        else
        {
            labelPrincipal.textContent = "Razão Social";
        }

        if(selectTipo.value == "outros")
        {
            grupoOutros.classList.remove("oculto");
        }
        else{
            grupoOutros.classList.add("oculto");
            inputOutros.value = "";
        }
    }
    
    selectTipo.addEventListener("change", aplicarRegras);

}
);
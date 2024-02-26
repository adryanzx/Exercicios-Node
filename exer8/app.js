function obterDataHoraAtual() {
    const dataAtual = new Date();
    
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); 
    const ano = dataAtual.getFullYear();
    
    const hora = String(dataAtual.getHours()).padStart(2, '0');
    const minuto = String(dataAtual.getMinutes()).padStart(2, '0');
    
    return `${dia}/${mes}/${ano} ${hora}:${minuto}`;
  }
  
  console.log(`Data e hora atual no Brasil: ${obterDataHoraAtual()}`);
  
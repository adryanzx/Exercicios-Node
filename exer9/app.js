function obterDiaSemana(diaSemana) {
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return diasSemana[diaSemana];
  }
  
  function obterMes(mes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return meses[mes];
  }
  
  function obterDataAtualPorExtenso() {
    const dataAtual = new Date();
    
    const diaSemana = obterDiaSemana(dataAtual.getDay());
    const dia = dataAtual.getDate();
    const mes = obterMes(dataAtual.getMonth());
    const ano = dataAtual.getFullYear();
    
    return `Hoje é ${diaSemana}, dia ${dia} de ${mes} de ${ano}`;
  }
  
  console.log(obterDataAtualPorExtenso());
  
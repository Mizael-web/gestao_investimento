const prompt = require ("prompt-sync")();
const {criarInvestimento} = require ("./investimentos/criarInvestimento")
const {editarInvestimento} = require ("./investimentos/editarInvestimento")
const {excluirInvestimento} = require ("./investimentos/excluirInvestimento")
const {listarInvestimento} = require ("./investimentos/listarInvestimento")


    criarInvestimento("1", "", "R$. 1.000,00", "R$. 1.500,00", "10/01/2020 ", "baixo");
    criarInvestimento("2", "CDB","R$. 2000,00", "R$. 5.000,00", "05/10/2005", "medio");
    criarInvestimento("3", "dolar","R$. 5000,00", "R$. 10.000,00", "25/10/2010", "alto");    
    listarInvestimento()


    editarInvestimento ("4","ouro","R$. 3.000,00", "R$. 3.500,00","15/08/2015", " alto" );
    

    //exluir o aluno 192123
    // depois listaralunos
    // excluirInvestimento("2");
    // excluirInvestimento ( "1");
    listarInvestimento ();
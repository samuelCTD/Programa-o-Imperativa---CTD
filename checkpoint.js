function microondas(opcao, tempo){
    // Prato Pronto
   return opcao == 1 && tempo >= 10 && tempo <= 20 || opcao == 2  && tempo >= 8 && tempo <= 16 
   || opcao == 3 && tempo >= 15 && tempo <= 30 || opcao == 4 && tempo >= 12 && tempo <= 24
   || opcao == 5 && tempo >= 8 && tempo <= 16? "Prato pronto, bom apetite!!!"
    // Tempo insuficiente 
    : opcao == 1 && tempo < 10 || opcao == 2 && tempo < 8 || opcao == 3 && tempo < 15 
    || opcao == 4 && tempo < 12 || opcao == 5 && tempo < 8? "Prato pronto, bom apetite!!! (Tempo insuficiente!)"
    // Prato Queimou
    : opcao == 1 && tempo > 20 && tempo < 30 || opcao == 2 && tempo > 16 && tempo < 24
    || opcao == 3 && tempo > 30 && tempo < 45 || opcao == 4 && tempo > 24 && tempo < 36
    || opcao == 5 && tempo > 16 && tempo < 24? "Prato pronto, bom apetite!!! (A comida queimou!)"
    // Kabumm
    : opcao == 1 && tempo >= 30 || opcao == 2 && tempo >= 24 || opcao == 3 && tempo >= 45
    || opcao == 4 && tempo >= 36 || opcao == 5 && tempo >= 24? "Prato pronto, bom apetite!!! (Kabumm!!)"
    // Prato Inexistente
    : "Prato inexistente!!!";
}
console.log(microondas(5, 17))

/*
      MENU
   Opções{
       1- Pipoca
       2- Macarrão
       3- Carne
       4- Feijão
       5- Brigadeiro
   }
 
*/
let  quantidadePecas  = 10 ;
let  listaDePecas  =  [ 'abxo' ,  'abhn' ,  'avnm' ,  'aklm' ,  'asec' ] ;
let  peso  =  101 ;

if ( quantidadePecas  > 10 )  {
    console . log ( 'impossivel cadastrar - capacidade maxima atingida' ) ;
    }  else  if ( listaDePecas . comprimento  <=  3 )  {
    console . log ( 'impossivel cadastrar - nome com menos de 3 caracteres' ) ;
    }  else  if ( peso  <=  100 )  {
    console . log ( 'impossivel cadastrar - peso inferior a 100g' ) ;
    }
        else  {
        console . log ( 'cadastro efetuado' )
}
function Inverte( str )
{
  let rev_str = "";
  for( let i = str.length-1 ;i >= 0 ;i--)
  {
    rev_str+= str[i];
  }
  return rev_str;
}

function is_palindrome( Inverte )
{
  reverse_str = reverse(Inverte);
  if( reverse_str === Inverte)
  {
    console.log("essa palavra é um palindromo");
  }
  else
  {
    console.log("essa palavra nao é um palindromo")
  }
}
var Palindromo = prompt("Coloque sua palavra para verificar se é um palindromo:");
is_palindrome(Palindromo);
//alert("Olá mundo");

//prompt("Digite o seu nome");

//resp = confirm("será que vai chover ?")

//var a = 5;
//var b = "5 Kg de açucar";

//document.write("O valor de variavel a é: "+ a);
//document.write("<p>"+"O valor da variável B é: "+b+"</p>");
//document.write("<p>"+"O valor de variável A dividido por 2 é: "+a/2+"</p>");
//document.write("<p>"+"O valor da variável B dividido por 2 é:"+b/2+"</p>");

// var a = "45.78 Kg de açucar";
// inteiro = parseInt(a);
// flutuante = parseFloat(a);
// document.write("O valor da variável A é:"+a);
// document.write("<p>"+"O valor numérico inteiro da variável é: "+inteiro+"</p>");
// document.write("<p>"+"O valor da variável A dividido por 2 é: "+inteiro+"</p>");
// document.write("<p>"+"O valor da variável decumal variável é: "+flutuante+"</p>");
// document.write("<p>"+"O valor da variável decumal variável é: "+flutuante/2+"</p>");

// var a = "olá pessoal ";
// var b = "sejam bem vindos ao JavaScript";
// var c = a+b;
// document.write(c);

// var a = 6;
// var b = 3;

// // document.write((a>b) && (b>c));


// var hoje = new Date();
// var xDia = hoje.getDay();

// diaSemana = new Array(7);
// diaSemana[0]= "domingo";
// diaSemana[1]= "Segunda-feira";
// diaSemana[2]= "Teceira-feira";
// diaSemana[3]= "Quarta-feira";
// diaSemana[4]= "Quinta-feira";
// diaSemana[5]= "Sexta-feira";
// diaSemana[6]= "sábado";

// pratoDoDia = new Array(7);

// pratoDoDia[0]= "Pizaa";
// pratoDoDia[1]= "Virada paulista";
// pratoDoDia[2]= "Bife a rolê";
// pratoDoDia[3]= "feijoada";
// pratoDoDia[4]= "Macarrão";
// pratoDoDia[5]= "Peixe frito";
// pratoDoDia[6]= "Feijoada";

// valorDoPrato = new Array(7);

// valorDoPrato[0]= "R$: 60,00";
// valorDoPrato[1]= "R$: 40,00";
// valorDoPrato[2]= "R$: 70,00";
// valorDoPrato[3]= "R$: 20,00";
// valorDoPrato[4]= "R$: 80,00";
// valorDoPrato[5]= "R$: 35,00";
// valorDoPrato[6]= "R$: 70,00";


// // document.write("o numero da semana é: "+""+(xDia+1));
// // document.write("<p><b>"+"hoje é: "+diaSemana[xDia]);

// document.write("Hoje é: "+diaSemana[xDia]+" O prato do dia é: "+pratoDoDia[xDia]+" O preço é: "+valorDoPrato[xDia]);


// var a = 5;
// alert(++a+2); adiciona
// alert("a= "+a);

// alert(a++ +2);
// alert("a="+a);

// var a = 5;
// var b = --a + 2;

// document.write("a="+a);
// document.write("a="+b);

// b = a-- + 2;

// var a = 2 //mudar o sinal para negativo - o b
// var b = -a;

// var c = -3; //muda o sinal de negativo para positivo, d recebá 3.
// d = -c;

document.write("<p><b>"+ "usando o método ToUppCase"+"</p><b>");

A = new String ("Olá pessoal!");
b = new String ("Sejam bem vindo ao JavaScript");

document.write(A.toUpperCase());
document.write(b.toUpperCase());
document.write("<p><b>"+"voce poderá usar: "+"</p></b>");
document.write("<p><b>"+"Usando o método toLowerCase"+"</p><b>");

document.write(A.toUpperCase());
document.write(b.toLowerCase());
document.write("<p><b>"+"voce pode usar: "+ "</p></b>");
document.write("<p>"+A.toLowerCase()+b.toLowerCase()+"</p>");

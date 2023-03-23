//alert("Hello world")
/*
//zadanie 3
let a = 10;
let b = 20;
let c = 23.2;
let mnozenie = a*b*c;
let dzielenie = (a*b)/c;
let dodawanie = a+b+c;
let odejmowanie = c-b-a;
alert("a*b*c="+mnozenie+"\n(a*b)/c="+dzielenie+"\na+b+c="+dodawanie+"\nc-b-a="+odejmowanie);
//zadanie 3.1
document.getElementById("wmnozenie").innerHTML="a*b*c="+mnozenie;
document.getElementById("wdzielenie").innerHTML="(a*b)/c="+dzielenie;
document.getElementById("wdodawanie").innerHTML="a+b+c="+dodawanie;
document.getElementById("wodejmowanie").innerHTML="c-b-a="+odejmowanie;
//zadanie 4
let osoba=prompt("podaj swoje imie","");
alert("witaj "+osoba);
//zadanie 5
let ba=parseFloat(prompt("podaj bok a",""));
let bb=parseFloat(prompt("podaj bok b",""));
let bc=parseFloat(prompt("podaj bok c",""));
let p=((ba+bb+bc)/2);
let pole=Math.sqrt(p*(p-ba)*(p-bb)*(p-bc))
document.getElementById("pole").innerHTML="pole trójkąta a,b,c wynosi: "+pole;
//zadanie 6
let szukana=Math.floor(Math.random() * 6);
let podana=parseFloat(prompt("zgadnij liczbe",""));
if(szukana==podana){
    alert("Dobra robota");
} else{
    alert("Nie pasuje");
}
*/
//zadanie 7
let x=parseFloat(prompt("podaj x: "));
let y=parseFloat(prompt("podaj y: "));
let z=parseFloat(prompt("podaj z: "));
let najwieksza;
if(x>z)
{
    if(x>y)
    {
        najwieksza=x;
    } 
    else
    {
        najwieszka=y;
    } 
}
else
{
    if(y>z)
    {
        najwieksza=y;
    }
    else
    {
        najwieksza=z;
    }
}
alert("najwieksza spośród podanych liczb jest "+najwieksza)

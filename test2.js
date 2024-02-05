/*
function summe(a, b) {
    return a + b;
  }
  
  function produkt(a, b) {
    return a * b;
  }
  
  function rechner(zahl1, zahl2, operation) {
    let ergebnis;
  
    if (operation === 'summe') {
      ergebnis = summe(zahl1, zahl2);
    } else if (operation === 'produkt') {
      ergebnis = produkt(zahl1, zahl2);
    } else {
      console.log("ERROR");
      return;
    }
  
    console.log('Das Ergebnis lautet: ' + ergebnis);
  }
  
  //rechner(3, 5, 'summe');      // Ausgabe: Das Ergebnis lautet: 8
  //rechner(3, 5, 'produkt');    // Ausgabe: Das Ergebnis lautet: 15
  //rechner(3, 5, 'subtraktion'); // Ausgabe: Ungültige Operation. Bitte wählen Sie "summe" oder "produkt".

*/
//startApp();

rechner(3, "Summe", 5);      // Ausgabe: Das Ergebnis lautet: 8
rechner(3, "Produkt", 5);

function startApp() {
    output(rechner(getNum1(), op(), getNum2()));
}

function getNum1(){
    return parseFloat(prompt("Zahl 1: "));
}
function getOp(){
    if (op == "Summe") {
        return 
    } else {
        
    }
    }
}

function getNum2(){
    return parseFloat(prompt("Zahl 2: "));
}

function rechner(a)

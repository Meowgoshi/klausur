rechner(3, 5, "summe");
rechner(3, 5, "produkt");

function summe(a, b) {
    return a + b;
  }
  
  function produkt(a, b) {
    return a * b;
  }
  
  function rechner(zahl1, zahl2, operation) {
    let ergebnis;
  
    if (operation === "summe") {
      ergebnis = summe(zahl1, zahl2);
    } else if (operation === "produkt") {
      ergebnis = produkt(zahl1, zahl2);
    }
  
    console.log('Das Ergebnis lautet: ' + ergebnis);
  }

const sum = add(3, 9); // 
function add(a, b) {// paramètres
  {
    const j = 12;
  }

  return a + b;
}

const test = add; // copie par référence
/* console.log(`test : `, test);
console.log(`sum : `, sum);
console.log(`appel de test : `, test(6, 8)); */


let i = 1;
function a() {
  let j = 2;
  b();
  function b(){
    {
      let k = 3;
      console.log("i : ", i);
      k = l;
      console.log("k : ", k);
    }
    var l = 4;
    console.log("l : ", l);
  }
}
a();
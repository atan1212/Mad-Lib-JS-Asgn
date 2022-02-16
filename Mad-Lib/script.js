// Event Listenter
document.getElementById("mad-lib-btn").addEventListener("click", buildMadLib);

// Event Function
function buildMadLib() {
  // Input
  let noun = document.getElementById("noun").value;
  let pluralNoun = document.getElementById("plural-noun").value;
  let action = document.getElementById("action").value;
 
  // Process
 let result = '"My ' + noun + ' loves to eat ' + pluralNoun +
  ' and then ' + action + '"';

 // Output
 document.getElementById("result").innerHTML = result;
}


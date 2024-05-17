window.onload = function() {
  //write your code here
  
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let part1 = math.floor(math.random() * who.length);
  let part2 = math.floor(math.random() * action.length);
  let part3 = math.floor(math.random() * what.length);
  let part4 = math.floor(math.random() * when.length);

  let excuse = document.write(`${who[part1]}${action[part2]}${what[part3]}${when[part4]}`);

  let sentence = document.getElementById("excuse");
  sentence.innerHTML = excuse;

  onload()
};



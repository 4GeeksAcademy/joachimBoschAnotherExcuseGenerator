window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed on", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class.",
    "when I was sleeping.",
    "while I was exercising.",
    "during my lunch.",
    "while I was praying."
  ];

  let part1 = Math.floor(Math.random() * who.length);
  let part2 = Math.floor(Math.random() * action.length);
  let part3 = Math.floor(Math.random() * what.length);
  let part4 = Math.floor(Math.random() * when.length);

  let excuse = document.write(
    `${who[part1]} ${action[part2]} ${what[part3]} ${when[part4]}`
  );

  let sentence = document.getElementById("excuse");
  sentence.innerHTML = excuse;
};

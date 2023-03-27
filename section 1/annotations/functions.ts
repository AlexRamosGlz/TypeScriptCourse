function add(a: number, b: number): number {
  return a + b;
}

//desctructuring with type annotation
const human = {
  name: "Alex",
  age: 20,
};

function getHuman({ name, age }: { name: string; age: number }): void {
  console.log(name, age);
}

function logPiramide(rows: number): void {
  let piramide: string = "";
  let count: number = rows;

  let odd: number = 1;

  for (let i = 1; i <= rows; i++) {
    for (let j = count - 1; j > 0; j--) {
      piramide += " ";
    }

    if (i === 1) {
      piramide += "*";
    }

    if (i != 1)
      for (let z = 0; z < odd; z++) {
        piramide += "*";
      }

    piramide += "\n";
    count--;
    odd += 2;
  }

  console.log(piramide);
}

logPiramide(2);

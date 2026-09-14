import {Friend, Colleague } from './myTypes'
//not importing the arrays from 01-basics.ts gave me an error that said "Cannot find name 'friends'. Did you mean 'Friend'?" so I imported it and now it works fine
import { colleagues, friends } from './01-basics'

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}

function addColleague(
  cs: Colleague[],
  name: string,
  department: string,
  email: string
): void {
  const nextExtension = highestExtension(cs).contact.extension + 1;

  cs.push({
    name,
    department,
    contact: {
      email,
      extension: nextExtension,
    },
  });
}

console.log(highestExtension(colleagues.current));

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(
  colleagues.current.filter((c) => c.name === "Sheild O Connell")
);

import { Friend, Colleague, EmailContact } from './myTypes'
//not importing the arrays from 01-basics.ts gave me an error that said "Cannot find name 'friends'. Did you mean 'Friend'?" so I imported it and now it works fine
import { colleagues, friends } from './01-basics'

function older(f: Friend) {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) { // Inferred return type
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

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number,
  max?: number
): EmailContact[] {
  let end = colleagues.length;
  if (max !== undefined) {
    end = max < 2 ? 1 : max;
  }
  const sorted = colleagues.sort(sorter);
  const fullResult = sorted.map((ce) => ({
    name: ce.name,
    email: ce.contact.email,
  }));
  return fullResult.slice(0, end);
}

console.log(
  sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension, 3)
);
console.log(
  sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length, 1)
);
console.log(
  sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length)
);

function findFriends(
  items: Friend[],
  criterion: (friend: Friend) => boolean
): Friend[] {
  return items.filter(criterion);
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));

function addInterest(friend: Friend, interest: string): string[] {
  if (friend.interests === undefined) {
    friend.interests = [];
  }

  friend.interests.push(interest);
  return friend.interests;
}

console.log(addInterest(friends[1], 'Politics'));
console.log(addInterest(friends[0], 'Politics'));

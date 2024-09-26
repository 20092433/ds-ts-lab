import { colleagues, friends } from './01-basics'
import {Friend, Colleague, EmailContact} from './myTypes'

interface Contact{
    extension: number;
}


// function older(f: Friend) : string {
//     f.age += 1
//     return `${f.name} is now ${f.age}`
// }

// function allOlder(f: Friend) : string{
    
// }

//console.log(older(friends[0]))

function allOlder(friends: Friend[]) : string[] {  //take array on friends instead of just one
    return friends.map (friend => {
    friend.age += 1 //increment age
    return `${friend.name} is now ${friend.age}`;  //use the correct variable for the return value
});
}

console.log(allOlder(friends)) //print out every friend in the array


//Find the colleahue with the highest extension number
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(                        //it sorts the array of colleagues in ascending order
        (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];   //then picks the last entry in the sorted array.
}
console.log(highestExtension(colleagues.current));

interface Contact {
    extension: number;
}
//add a colleague to array, setting their extension to the highest plus 1
// function addColleague(cs: Colleague[], name: string, department: string, email: string): void {
//     const highestColleague = highestExtension(cs);
//     const newExtension = highestColleague ? highestColleague.contact.extension + 1 : 1; //start at 1 if empty array

//     const newColleague: Colleague = {
//         name: name,
//         contact: {extension: newExtension}
//     };

//     cs.push(newColleague); //add the new colleague to the array
// }


function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max? : number   //CHANGED
  ): EmailContact[] {
    let end = colleagues.length;
  if (max !== undefined) {
     end = max < 2 ? 1 : max
  }
  const sorted = colleagues.sort(sorter);
  const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return fullResult.slice(0,end)
  }
  
  console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW

  //a function to find friends based on a criterion specified by a callback
  function findFriends(friends: Friend[], criterion: (friend: Friend) => boolean): Friend[] {
    return friends.filter(criterion); //Filter friends based on the provided criterion 
  }

  //Testing the findFriends function
  console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
  console.log(findFriends(friends, (friend) => friend.age < 35));
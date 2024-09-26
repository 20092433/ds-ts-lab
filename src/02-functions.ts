import { colleagues, friends } from './01-basics'
import {Friend, Colleague} from './myTypes'

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
function addColleague(cs: Colleague[], name: string, department: string, email: string): void {
    const highestColleague = highestExtension(cs);
    const newExtension = highestColleague ? highestColleague.contact.extension + 1 : 1; //start at 1 if empty array

    const newColleague: Colleague = {
        name: name,
        contact: {extension: newExtension}
    };

    cs.push(newColleague); //add the new colleague to the array
}
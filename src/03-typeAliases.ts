import {
    ColleagueV2,
    Friend,
    Buddy,
    BuddyList,
    Administrator,
} from "./myTypes";

import {friends} from "./01-basics";

const colleague1: ColleagueV2 = {
    name: "Ralph Graham",
    department: "Engineering",
    contact: {
      email: "rgraham@company.com",
      extension: 121,
    },
  };
  
  const colleague2:  ColleagueV2 = {
    name: "Patti Burke",
    department: "Finance",
    contact: {
      email: "pburke@company.com",
      extension: 132,
    },
  };
  
  const colleague3:  ColleagueV2 = {
    name: "Dean Sullivan",
    department: "HR",
    contact: {
      email: "dos@company.com",
      extension: 125,
    },
  };



  function makeBuddyList(
    name: string,
    buddies: Buddy[],
    admin?: Administrator
  ): BuddyList {
    return {
      name,
      members: buddies,
      administrator: admin,
    } as BuddyList;
    // The as operator above casts an object to a specific type.
  }
  // Tests for makeBuddyList
  const myFootballBuddies = makeBuddyList(
    "Football team",
    [colleague1, friends[0], colleague2],
    colleague1
  )
  
  const myBandBuddies = makeBuddyList(
      "Band name",
      [colleague1, friends[1]]
      // No administrator
    )
  
  console.log(myFootballBuddies)
  console.log(myBandBuddies)
  //--------------------------------------

  //interates over members of a BuddyList looking for a Buddy with a speicified name.
  function findBuddyContact(list: BuddyList, name: string): string | undefined {
    for (const buddy of list.members) {
      if (buddy.name === name) {   //if found it determines buddy type and returns info
        if ("phone" in buddy) {
          return buddy.phone;
        }
        else {
          return buddy.contact.email;
        }
      }
      return undefined;
    }
  }
  // Test for findBuddyContact.
  console.log("Contact buddy at: ", findBuddyContact(myFootballBuddies, "Ralph Graham"));

  //function to return all friends in a buddy list 
  function getBuddyListFriends(list: BuddyList): Friend[] {
    //used the reduce method to iterate over the members of the Buddylist
  return list.members.reduce<Friend[]>((friends, buddy) => {
   //return a new array that includes the current buddy if they're a friend
   return 'phone' in buddy ? [...friends, buddy] : friends;
  }, []);
}
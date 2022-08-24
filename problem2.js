
let friendEven = (friends) => {
    let even = [];
    for(let i = 0; i<friends.length; i++){
        
        let friend = friends[i];
        // console.log(friend);
        if(friend.length % 2 === 0){
            // console.log(friend.length);
            // console.log(friend);
          even.push(friend);
        }

        
    }
    return even;
};
let friends = ['Gazi Ashiq', 'Fh tusher', 'Tanvir', 'antor', 'salaheen'];
console.log(friendEven(friends));


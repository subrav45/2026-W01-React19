// function add(a,b){
//     return a+b;
// }
let user = {
    profile :[
        {name:"subrav"},
        {name:"vinod"},
        {name:"mohit"},
    ],
    rating:[
        {count : 145},
        {count : 189},
        {count : 144}
    ]
}
//get the following format of the output
// output = {
//     "subrav":{rating:145},
//     "vinod":{rating:189},
//     "mohit":{rating:144}
        
//     }
// }
// console.log(user.profile[0].name);
// console.log("{ " + user.profile[0].name + ": {rating: " + user.rating[0].count + "}}");
// console.log("{ " + user.profile[1].name + ": {rating: " + user.rating[1].count + "}}");
// console.log("{ " + user.profile[2].name + ": {rating: " + user.rating[2].count + "}}");

for(let i=0; i<user.profile.length; i++){
    console.log("{ " + user.profile[i].name + ": {rating: " + user.rating[i].count + "}}");
}
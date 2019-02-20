// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

//=================================================================
// LOAD DATA
//=================================================================
var friendsData = require("../data/friends");


//=================================================================
// ROUTING
//=================================================================

module.exports = function(app){

    app.get("/api/friends", function(req, res){
        console.log("GET /api/friends--------------")
        res.json(friendsData);
    });
    
    app.post("/api/friends", function(req, res){
        console.log("POST /api/friends----------------------")
        var newFriend = req.body;
        //console.log(newFriend);
        var friendID = matchFriend(newFriend, friendsData);

        
        console.log("friendsData[friendID] : "+friendsData[friendID].name);
        console.log("New Friend : "+ newFriend);
        res.json(friendsData[friendID]);
        friendsData.push(newFriend);
    });
};
var questionLength = 10;
function matchFriend(input, dataArr){
    // console.log(""+dataArr[0].scores[])
    var results = [0, 100];
    for(var i=0; i< dataArr.length; i++){
        var result = 0;
        for(var j=0; j<questionLength; j++){
            result += Math.abs(parseInt(input.scores[j])-parseInt(dataArr[i].scores[j]));
        };
        if(results[1] > result){
            results[0]=i;
            results[1]=result;
        }
    };
    return results[0];


}


var friends = require("../data/friends");


module.exports = function(app) {
 
   app.get("/api/friend", function(req, res) {
    res.json(friends);
   });

  app.post("/api", function(req, res) {
    
    
    var resDifference=[];
    

    for(i=0;i<friends.length;i++){
      //console.log(friends[i].response);
      var difference=0;
      for(j=0;j<10;j++){

      //abs value of difference between responses for elements in array and new req
        difference+=(Math.abs(parseInt(req.body.response[j])-parseInt(friends[i].response[j]))); 
         //array containing difference in responses
      }
     resDifference.push(difference);
    }
    // console.log(resDifference);
    // console.log(Math.min(...resDifference))

    //    console.log(resDifference.indexOf(Math.min(...resDifference))); 
    
    res.json(friends[resDifference.indexOf(Math.min(...resDifference))]);
   
    friends.push(req.body);
    
  });

 
};

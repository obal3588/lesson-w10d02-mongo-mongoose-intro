// PostgreSQL port 5432
// Mongodb port 27017

const mongoose = require("mongoose");
const Tweet = require("./tweet");
const mongoURI = "mongodb://127.0.0.1:27017/tweets";
const db = mongoose.connection;
mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("the connection with mongod is established");
  }
);

/*run it once to write in database than comment it   */


// const myFirstTweet = {
//   title: "Hello",
//   body: "I am the Body",
//   author: "Mansour"
// };
// Tweet.create(myFirstTweet, (error, tweet) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(tweet);
//   }
//   db.close();
// });

// const manyTweets = [
//   {
//     title: "Deep Thoughts",
//     body: "Friends, I have been navel-gazing",
//     author: "Karolin"
//   },
//   {
//     title: "Sage Advice",
//     body: "Friends, I am vegan and so should you",
//     author: "Karolin",
//     likes: 20
//   },
//   {
//     title: "Whole Reality",
//     body:
//       "I shall deny friendship to anyone who does not exclusively shop at Whole Foods",
//     author: "Karolin",
//     likes: 40
//   },
//   {
//     title: "Organic",
//     body:
//       "Friends, I have spent $2300 to be one of the first people to own an organic smartphone",
//     author: "Karolin",
//     likes: 162
//   },
//   {
//     title: "Confusion",
//     body:
//       "Friends, why do you just respond with the word `dislike`? Surely you mean to click the like button?",
//     author: "Karolin",
//     likes: -100
//   },
//   {
//     title: "Vespa",
//     body:
//       "Friends, my Vespa has been upgraded to run on old french fry oil. Its top speed is now 11 mph",
//     author: "Karolin",
//     likes: 2
//   },
//   {
//     title: "Licensed",
//     body:
//       "Friends, I am now officially licensed to teach yogalates. Like this to get 10% off a private lesson",
//     author: "Karolin",
//     likes: 3
//   },
//   {
//     title: "Water",
//     body:
//       "Friends, I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how",
//     author: "Karolin"
//   }
// ];
// Tweet.insertMany(manyTweets, (err, tweets) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(tweets);
//   }
//   db.close();
// });

/*   first practice to return all * */
// Tweet.find({}, (err, tweets) => {
//   console.log(tweets)
//   db.close();
// })


/*   first practice to return all * */
// 'title body -_id' to not show the id
// Tweet.find({},'title body', (err, tweets) => {
//   console.log(tweets )
//   db.close();
// })


/*find all  with condition title */
// Tweet.find({title: 'Water'}, (err,tweets) => {
//   console.log(tweets)
//   db.close();
// })

/** find all with condition like greater than 20 */
// Tweet.find({likes: {$gte: 20}},  (err, tweets) => {
//   console.log(tweets)
//   db.close();
// })

/*
  * Priority .sort higher than limit it will execute sort() than limit
  *.sort({title: -1})  ## -1 for descending or 1 for other
*/
// Tweet.find({likes: {$gte: 1}})
// .limit(2)
// .sort({title: -1})
// .exec((err, tweets) => {
//     console.log(tweets)
//     db.close();
// })


/*findOneAndRemove and findOneAndDelete both are  same */
// Tweet.findOneAndRemove({title: 'Deep Thoughts'}, (err, tweet) => {
//   if(err){
//       console.log(err)
//   }else{
//       console.log("This Tweet has been deleted", tweet)
//   }
//   db.close();
// })
/*
  *update a tweet 
  *{new: true} used to return the new data.without it will return old value 
*/
// Tweet.findOneAndUpdate({title: 'Vespa'}, {sponsored: true}, {new: true} ,(err, tweet) => {
//   console.log(tweet)
//   db.close();
// })

/* count all the field that likes>20*/
// Tweet.countDocuments({likes: {$lt: 20}}, (err,count) => {
//   console.log(count)
//   db.close();
// })


db.on("error", err => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));

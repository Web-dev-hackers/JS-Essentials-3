console.log("Tasks.js is linked, happy coding Hackers ;)");
//0. create a variable 'myName' give it the value of your name & create an array called 'myFriends' contains 3 names
var myName ="osama"
var myFriends = ["Ali","Ahmed","Fathi"]
/** Arrays */
//1. create an array called 'days' that contains the days of the week starting from 'Monday' to 'Sunday'
var days = ["monday","tuseday","wednsday","thursday","friday","saturday"];
//2. create a function called 'getLastElement' that receives an array
function getLastElement(array){
    return [array.lenght-1]
}
//& return the last element of the array

//after that uncomment the next next Line
console.log(getLastElement(days)) // Sunday

//3. you have array called 'marks' use this array to make the next tasks
var marks = [5, 9, 20];
//3.a print the length of the array
console.log(marks.length)

//3.b print the index of number 23 in the array
console.log(marks[23])
//3.c add a number 13 to the end of the array
marks.push(13)
//3.d add number 1 to the beginning of the array
marks.unshift(1)
//3.e check if the array contains number 1 & print the result
console.log(marks.includes(1))
/**objects */
//4. create an object called 'person' that has these keys(name, age, favorites[], power{speed, strong}) with value of your choice
var person ={
  name:"Osama",
  favorites:["haha"],
  power:{speed:100,strong:00},



}
//after that uncomment the next lines
console.log(person.name) //person name
console.log(person.favorites[0]) //the first favorite thing
console.log(person.power.speed) //his speed value

//5. use this object to do the next tasks
var post = {
  author: myName,
  title: "Memes",
  content: "memes are funny",
  isPublished: true,
  likes: 15,
  tags: myFriends,
  comments: [{}, {}, {}],
};

//5.a print the value of post's author
console.log(post.author)
//5.a print the value of post's likes
console.log(post.likes)
//5.a print the value of post's tags
console.log(post.tags)
//5.a print the value of post's comments length
console.log(post.comments.length)
/**Loops */

var posts = [
  {
    author: myName,
    title: "Memes",
    content: "memes are funny",
    isPublished: true,
    likes: 15,
    tags: myFriends,
    comments: [
      {
        author: "Walid",
        content: "sksdkfkfd",
        likes: 3,
      },
    ],
  },
  {
    author: myFriends[0],
    title: "Geo",
    content: "Geo are funny",
    isPublished: false,
    likes: 12,
    tags: myFriends,
    comments: [
      {
        author: "Walid",
        content: "sksdkfkfd",
        likes: 3,
      },
    ],
  },
  {
    author: myFriends[1],
    title: "Math",
    content: "Math are Sucks",
    isPublished: true,
    likes: 19,
    tags: myFriends,
    comments: [
      {
        author: "Walid",
        content: "sksdkfkfd",
        likes: 3,
      },
    ],
  },
  {
    author: myFriends[2],
    title: "Essam's Course",
    content: "Essam's course is....",
    isPublished: true,
    likes: 15,
    tags: myFriends,
    comments: [
      {
        author: "Walid",
        content: "sksdkfkfd",
        likes: 3,
      },
    ],
  },
];
for (var i = 0; i <posts.length; i++) {
    console.log(posts[i].author)
    console.log(posts[i].content)
    console.log(posts[i].likes)
    console.log(posts[i].title)
    console.log('---------------')
  }
   

//6. create a loop on the above 'posts' array
//& print the 'author', 'title', 'content' & 'likes' of each post & print '----' between each post

/**I'm proud of you My Ninja, keep it up :) */

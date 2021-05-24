/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/
let test = "This is a test string"
/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/
let sum = 10 + 20
/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

let random = Math.floor(Math.random()*20)
/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
let me = {name: "Tomas", surname:"Berhane",age:25}
/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
delete me.age

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/
me.skills = ['javascript','python','java']

/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/
delete me.skills[2]

// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/
function dice(min,max){
    return random = Math.floor(Math.random()*(max-min)+min)
}
/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/
function whoIsBigger(x,y){
    return x>y? `${x} is Bigger`:`${y} is Bigger` 
}
/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
const a ="strive school is the best bootcamp ever"
function splitMe(a){
    
    return a.split(" ")
    
}

/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
function deleteOne(a,b){
    return a===true? b.substring(1) : b.substring(0,b.length -1)
 }
/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/
function onlyLetters(a){
    return a.replace(/\d+/g,'')
} 

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/
function isThisAnEmail(){

}

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/
function whatDayIsToday(){
    let today = new Day()
    let day = today.getDay()
    let daysOfWeeks = ['Sunday','Monday','tuesday', 'Wednsday','Thursday','Friday','Saturday']
    return daysOfWeeks[day]
}

/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }

    function dice(a){
    
    for(i = 0;i<a.length;i++){
    return random = Math.floor(Math.random()*(6-1)+1)
        
    }
}

*/

/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/
function howManyDays(date){

}
/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/

function isTodayMyBirthday(){
    const now = new Date();
    const MyBithday = new Date(2022, 3, 25);
        
    
    let untilMybirthday = MyBithday- now;
    let millisecondsDay = 1000 * 60 * 60 * 24;
    let daysToMybirthday = Math.ceil(untilMybirthday/ millisecondsDay);
    return MyBithday === now?'true':'false'
    
    }

// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/
function deleteProp(a,b){

}
/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/
function olderMovie(){
    let lowest = Number.POSITIVE_INFINITY
    let highest = Number.NEGATIVE_INFINITY
    movies.sort((a, b) => a.Year - b.Year)
        for (let i = 0; i <movies.length;i++) {
           
            return movies[i].Year < lowest? `${lowest = "the oldest movies is " +" "+ movies[i].Title  +" from "+  movies[i].Year }`:` ${highest = "the most recent movie released is" + movies[i].Title +" from "+ movies[i].Year}`
        
        }
        
        }


/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/
function countMovies(){
  
  for(i = 0; i<movies.length;i++){
      
  }
    return sum = i 
  }
 

/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/
function onlyTheTitles(){
  movies.push( "Avengers: Endgame")

}
/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/
function olderMovie(){
  let lowest = 3000
  let highest = 2000
  let n = 0
  movies.sort((a, b) => a.Year - b.Year)
      for (let i = 0; i <movies.length;i++) {
          if(movies[i].Year <= lowest && movies[i].year >=highest){
            `${movies[i].Title  +" from "+  movies[i].year }`
             n++
           } 
      }
      return n
   }

/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/
function getMovieById(a){
  switch(a){
      case "tt0120737": console.log(movies[0]); break;
      case "tt0167260": console.log(movies[1]); break;
      case "tt0167261": console.log(movies[2]); break;
      case "tt0399295": console.log(movies[3]); break;
      case "tt0355702": console.log(movies[4]); break;
      case "tt0077869": console.log(movies[5]); break;
      case "tt0100054": console.log(movies[6]); break;
      case "tt1731697": console.log(movies[7]); break;
      case "tt0087365": console.log(movies[8]); break;
      case "tt0057261": console.log(movies[9]); break;
      case "tt0848228": console.log(movies[10]); break;
      case "tt4154756": console.log(movies[11]); break;
      case "tt2395427": console.log(movies[12]); break;
      case "tt4154796": console.log(movies[13]); break;  
      default:console.log(`No movie available with id of  ${a}!`)
  }

}
  


/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/
function sumAllTheYears(){
  let total = 0;
  movie.forEach(item => { 
      total += parseInt(item.year);
  })
  return total
    
  }
/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/
function searchByTitle(a){
  switch(a){
      case "The Lord of the Rings: The Fellowship of the Ring": console.log(movies[0]); break;
      case "The Lord of the Rings: The Return of the King": console.log(movies[1]); break;
      case "The Lord of the Rings: The Two Towers": console.log(movies[2]); break;
      case "Lord of War": console.log(movies[3]); break;
      case "Lords of Dogtown": console.log(movies[4]); break;
      case "The Lord of the Rings": console.log(movies[5]); break;
      case "Lord of the Flies": console.log(movies[6]); break;
      case "The Lords of Salem": console.log(movies[7]); break;
      case "Greystoke: The Legend of Tarzan, Lord of the Apes": console.log(movies[8]); break;
      case "Lord of the Flies": console.log(movies[9]); break;
      case "The Avengers": console.log(movies[10]); break;
      case "Avengers: Infinity War": console.log(movies[11]); break;
      case "Avengers: Age of Ultron": console.log(movies[12]); break;
      case "Avengers: Endgame": console.log(movies[13]); break;  
      default:console.log(`No movie available with id of  ${a}!`)
  }

}

/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/

/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/
function removeIndex(a){
  delete movie[a]
  return movie
  }
// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/
function halfTree(height) {
   
  let arr;
 for (let i = 1; i <= height; i++) {
     arr = [];
     for (var j = 1; j <= i; j++) {
         arr.push('*');            
     }
     console.log(arr.join(" ") + "\n");
 }
}


/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

// function tree(height) {
//   for (let i = 0; i < h; i++) { 
//       let str = ''; 
//       for (let j = 1; j < h-i; j++) { 
//         str = str + ' '; 
//       } 
//       for (let k = 1; k <= (2*i+1); k++) { 
//         str = str + '*'; 
//       } 
//       console.log(str); 
//     } 
  
// }

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/

/* This movies array is used throughout the exercises. Please don't change it :)  */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
]







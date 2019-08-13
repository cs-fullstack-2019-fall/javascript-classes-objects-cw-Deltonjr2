// JavaScript-classes_objects-cw
// Problem 1:
//
// Create a GitHubRepository class with properties userName, fileName, descriptionOfRepository, and code. Create a function that prints all properties. Create an object of the class and use the function.
//
// Problem 2:
//
// Create a Movie class with the following properties: movieName, rating, and yearReleased. Create a method to change the rating and another one to change the yearReleased properties. Create an object of the class and use the two methods you created.
//
//     Challenge 1:
//
// Create a Person class with three properties: name, weight, and height. Create a method that can calculate the BMI of a person using the formula below. Create an object of the class and use the function.
//
// BMI is (weight / (height * height)) x 703. Weight is in pounds and height is in inches.
//
//     Challenge 2:
//
// Create a Bank class with the the name and balance properties. Afterwards, create an object of the class and follow the instructions below:
//
//     Creates an account named "Matt's account" with the balance of 1000
// Creates an account named "My account" with the balance of 0
// Withdraws 100.0 from Matt's account
// Deposits 100.0 to My account
// Prints both accounts


//1
class GitHubRepository {
    constructor(username, filename, descriptionofRepository, code) {

        this.username_prop = username;
        this.filename_prop = filename;
        this.descriptionOfRepository_prop = descriptionofRepository;
        this.code_prop = code;
    }

    printProps() {
        console.log(this.username_prop);
        console.log(this.filename_prop);
        console.log(this.descriptionOfRepository_prop);
        console.log(this.code_prop);
    }

}
 let myGitHubRepository = new GitHubRepository("Clone","codeSchool", "book", "javascript");
myGitHubRepository.printProps();

//2.
class movies {
    constructor(moviename, rating, yearreleased) {


        this.moviename_prop = moviename;
        this.rating_prop = rating;
        this.movie_prop = yearreleased;
    }
    changerating() {

    }



}
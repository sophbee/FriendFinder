# FriendFinder

Friend Finder is an application that matches users to each other based on a compatibility algorithm. All users must supply a name and a picture then answer 10 questions. Based on those questions, he or she will be matched with the person who has the least amount of total differences. 

For this application, I used:
- Heroku to deploy
- JavaScript and jQuery
- HTML & CSS
- NPM packages: Express, Path, Body-Parser

All dependencies are listed in package.json so users will need to install the listed NPM packages above. Also, the project is modularized so you will find that all of the routing scripts for both the API, which also holds the logic portion for matching users with the best person, and HTML directories are in one folder, the dummy data for app users are in the data folder, and finally, the public folder holds all of the HTML files.

You can also find the working app here: https://friendfinderinrva.herokuapp.com/

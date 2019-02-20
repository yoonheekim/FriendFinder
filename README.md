# FriendFinder

## Overvies
1. Compatibility-based `FriendFinder` application : dating app. 
2. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. 
3. The app will then display the name and picture of the user with the best overall match.

## Technologies
> Node.js, github, Heroku, npm packages(Express, Path), Html, Javascript, Jquery, Bootstrap

## Node.js
1. `server.js`
2. `htmlRoutes.js`
    * `GET` Route to survey, home page
3. `apiRoutes.js`
    * A `GET` route with the url /api/friends. This will be used to display a JSON of all possible friends.
    * A `POST` routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

## home page
    ![alt text](https://raw.githubusercontent.com/yoonheekim/FriendFinder/master/app/images/home.jpg)

## survey page
1. Survey have 10 questions of choosing. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
2. Each question should be filled out.
    ![alt text](https://raw.githubusercontent.com/yoonheekim/FriendFinder/master/app/images/survey.jpg)
    
## result
 1. Once found the current user's most compatible friend, display the result as a modal pop-up.
    ![alt text](https://raw.githubusercontent.com/yoonheekim/FriendFinder/master/app/images/result.jpg)






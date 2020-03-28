# All Practice Codes of Udemy NodeJS Course

I am completing Udemy NodeJS course. 

## How to inspect the code? 
This course goes week by week. So, my codes are divided in weekly folders too. There might be overlaps in different weeks but it's easy to maintain and recap later this way. After completing the full project (with database and everything) I will publish it in a different repository as a full project too. If you are already experienced in Node JS, you can skip this repo and look into that repo.

# How to run this project? 
Go in every folder and run below commands serially.
## Basic npm Commands
```$xslt
1. npm init
-> This command creates a package.json file in the folder

2. npm start
-> The 'start' is a special command for npm which is defined in package.json file
We wrote 'node app.js' as start's value. 

3.npm run start-server-rumman
-> This is a custom command made by us to do something. It works the same way but the command needs to be changed.
so we have to add 'run' before 'start-server-rumman'.
```

---
## Third party package install
```$xslt
1. npm install nodemon --save
-> nodemon is a package to auto restart the server everytime we make some change to the code.
'--save' means it will go to production code and dev code.
But nodemon is needed for debugging purposes. So, we don't need it in production code.

2. npm install nodemon --save-dev
-> '--save-dev' installs it just for dev. 

3. npm install -g nodemon
-> '-g' means install globally. You can use it anywhere.

4. npm install
-> If the package-lock.json file is there but 'Node Module' folder is not there, 
run this command. It will check the package.json and package-lock.json file and download it from the internet. 
```
---
## Basic Commands
```$xslt
1. npm start
-> every time we will run the project by this command from now on. 
It runs according to the package.jason file.
```

## Necessary Packages Installation
```$xslt
1. sudo npm install --save ejs pug express-handlebars
-> These are 3 alternatives of template engines.
```

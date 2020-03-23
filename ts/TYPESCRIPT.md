## TypeScript:
The first thing that I consider important to learn is TypeScript since it's a 'fork' of JavaScript which means that there's no learning curve whatsoever (considering that I already know how to code in JavaScript... more or less xD)<br>

<strong>NOTE: </strong> To execute this commands you must already have installed NodeJS and npm!<br><br>
So the very first thing to do is to install the typescript support, to do so you have to enter the following command:<br>
` $ sudo npm i -g typescript `

When we compile it generates a new javascript file which shares the name of the typescript original file, to compile we must use the following command:<br>
` $ tsc (file_name.ts) ` 

When using asycn await or other functions from newer versions of Javascript it's necessary to use this command and configure the .json that it generates so that it uses the newest version of Javascript:  
` $ touch tsconfig.json `  
__Once the tsconfig.json is created, you must specify which files will be used, and the libraries so that it compiles them correctly.__

## tsconfig.json:
Use this object in the .json file to __use the newest version of Javascript__ and be able to compile the __async await__ without any problems.  
Also use watch so that the compiler seeks for changes and builds the .js file automatically.  
Use lib array to signal which libraries are used on the file.  
  
{
    "compilerOptions": {
        "target": "ESNext",
        "lib": ["DOM","ESNext"]
    },
    "include": ["files_folder"]
} 
 <div align='center'>
<p align="center"> 
        <img src="https://github.com/Sanzhanov/Newman-Collection-Run-Reporter-on-CRM-Project-example/blob/main/assets/header1.png" alt="header" 
   align="center"/> 
 </p></div>
<br/>

## Newman Collection Run Reporter (on CRM Project example)

Hi everyone,

Here I'd like to show how I implemented automated running my test collections and getting quality reports with NPM packages <a rel="Newman" href="https://www.npmjs.com/package/newman">"Newman"</a> and <a rel="NewmanReporter" href="https://www.npmjs.com/package/newman-reporter-htmlextra">"Newman Reporter htmlextra"</a>.

Of course, you can run your collections by Postman CLI or Newman as a pure command-line Collection Runner and get the output in the terminal. However, you can get a much more informative and user-friendly report with a dashboard style summary landing page and a set of different tabs which contain the detailed request information. Moreover, as a user, you are able to create better custom templates just for your needs.

I implemented the same on the example of the CRM Project "ClientBase v5". Used collection contains several dozen requests and more than 400 tests and in some cases also pre-request-scripts. When writing tests I included inside them assertions based on Chai Assertion Library BDD syntax (expect). My full collection for this project you can find <a rel="checklist" href="https://github.com/Sanzhanov/Postman-full-collection-for-CRM-ClientBase-v5">here</a> (still growing). 
> However, you can use this project for your own collections (follow below).

---
### Report Example

![Default Report](./examples/Default_Report.gif)

---
<img align="right" width="300" src="https://github.com/Sanzhanov/Newman-Collection-Run-Reporter-on-CRM-Project-example/blob/main/examples/fork.png" alt="fork this repository" />

### How to install

- First of all fork this repository by clicking on the `fork` button on the top of this page. This will create a copy of this repository in your account.

<img align="right" width="300" src="https://github.com/Sanzhanov/Newman-Collection-Run-Reporter-on-CRM-Project-example/blob/main/examples/copy-to-clipboard1.png" alt="copy URL to clipboard" />

- Clone the forked repository to your computer. Go to your GitHub account, open the forked repository, click on the `code` button and then click the copy to clipboard icon.

- Open IDE (Visual Studio Code, Webstorm or another code editor) on your computer and create new project from version control using copied link (paste copied URL). Here you're copying the contents of the forked repository to your computer.

<img align="right" width="300" src="https://github.com/Sanzhanov/Newman-Collection-Run-Reporter-on-CRM-Project-example/blob/main/examples/apireport.png" alt="apireport" />

- Install the required node modules in the project. Open a built-in terminal in your IDE and run the following command: `npm i`. Though Newman may already be installed globally on your computer.

- After the packages are installed, run the collection using command: `npm run apitest`. 

- After a few seconds, you will see that a new directory `report` has appeared in the sidebar, with an attached file `apireport.html` inside it.

- Next, go to the root folder of the project on your computer and open this file with a browser. The path to the project's root folder will also be shown in the terminal after running the collection.

---
> ### If you want to run your own collections:

- Follow the first four steps above.

- Next, open the project's root folder on your computer and find the`collection` folder inside the `src` folder. Delete the nested json file and paste the Json with your collection there. 

- Go to the `environment` folder inside the `src` folder and do the same for the json containing the environment variables.

- Go back to the code editor and open the `src/runner/runner.js` file inside it. On the third line, inside the `const collectionName`, replace the name of the collection with the name of your json file. Do the same on the fourth line for the `const environmentName`. Also in `iterationCount` field you can set the number of iterations. Don't forget to save your changes by pressing `Crtl+S`.

- Run the collection using command: `npm run apitest`. Congratulations, your own report is ready! 

- To enable the functionality of a given feature, uncomment any of the options within the `htmlextra` object in `runner.js` file. For example, you can change the name of the title in the browser tab or a main title in the center of the report, etc. 
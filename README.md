[![Header](https://github.com/Sanzhanov/Postman-full-collection-for-CRM-ClientBase-v5/blob/main/assets/header.png)](https://clientbase.us/v5)

### Postman full collection for CRM ClientBase v5
---

I have tryed to put in this collection some of the most likely API requests for the <a rel="CRM" href="https://clientbase.us/v5">CRM project "ClientBase v5"</a> . Here you will also find a set of environment variables, the values ​​of most of which are filled automatically during the running of requests.

When I was making collection, I used this <a rel="checklist" href="https://github.com/Sanzhanov/API-Tests-Check-List">API Tests checklist</a>. Validation of data in the fields was not performed.

In addition inside most requests, you will find some scripts and tests. When I was writing tests, I deliberately used <a rel="Chai" href="https://www.chaijs.com/api/bdd/">Chai Assertion Library</a> BDD syntax (expect) to make it easier to develop automated tests based on them. All that's left is to adjust the tests according to the syntax of the HTTP client you plan to use. Moreover, <a rel="checklist" href="https://github.com/Sanzhanov/API-Automation-Tests-for-CRM-ClientBase-v5">here</a> you can see my collection of automated API tests for the same project.

Some tests contain the same checks but use slightly different syntax. The point is that the syntax of Postman and Chai Library allows us to implement the desired check in many ways, which is certainly great. By discovering different ways to write tests, you can design new checks, because of course, this is not a complete set of tests. Also you may notice that some requests contain subrequests (for example, verification of the user's email).

This collection is not final. Make your corrections, improvements, I will be glad to your future requests for a merge.
const newman = require('newman');

const collectionName = 'CRM_Project_ClientBase_v5_collection.json'
const environmentName = 'ClientBase_v5_environment.json'

newman.run({
    collection: `src/collection/${collectionName}`,
    environment: `src/environment/${environmentName}`,
    reporters: ['htmlextra'],
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: "report"+"/apireport.html",
            // template: './template.hbs'
            // logs: true,
            // showOnlyFails: true,
            // noSyntaxHighlighting: true,
            // testPaging: true,
            browserTitle: "My Newman report",
            title: "My Newman Report",
            titleSize: 4,
            // omitHeaders: true,
            // skipHeaders: "Authorization",
            // omitRequestBodies: true,
            // omitResponseBodies: true,
            // hideRequestBody: ["Login"],
            // hideResponseBody: ["Auth Request"],
            showEnvironmentData: true,
            // skipEnvironmentVars: ["API_KEY"],
            // showGlobalData: true,
            // skipGlobalVars: ["API_TOKEN"],
            // skipSensitiveData: true,
            // showMarkdownLinks: true,
            showFolderDescription: true,
            // timezone: "Australia/Sydney",
            // skipFolders: "folder name with space,folderWithoutSpace",
            // skipRequests: "request name with space,requestNameWithoutSpace",
            displayProgressBar: true
        }
    }
});
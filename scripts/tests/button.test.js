/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

/*
first aproach is to add  chunks of HTML to Jest's mock DOM for testing
*/
// beforeAll(() => {
//     document.body.innerHTML = "<p id='par'></p>";
// });

/*
second aproach is to load the entire HTML page and attach it to the mock DOM. 
*/
beforeAll(() => {
    // add the Node fs(file system) module built into Node,
    //    that allows us to open, read and write files
    let fs = require("fs"); //don't need to install fs with npm, because it's part of Node standard library

    //read the index.html file using the utf - 8 character set
    let fileContents = fs.readFileSync("index.html", "utf-8");  // and store the contents in the fileContents variable
    
    //attach the content to the  DOM
    document.open();
    document.write(fileContents);  // Loading the entire HTML page into Jest so that we can run tests against it
    document.close();
});

// create test
describe("DOM tests", () => {
    test("Expects content to change", () => {
        buttonClick();
        expect(document.getElementById("par")
            .innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});

// to run a jest test use a terminal, type command 'npm test' and press Enter
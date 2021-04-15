//Automated script to click screenshot from the specifed website URL
const puppeteer = require("puppeteer");

let browser;
let page;
puppeteer
.launch({
    headless: false, // without opening browser it will click screenshot
    defaultViewport: null,
    args: ["--start-maximized"],
}) // When Launch promise will get resolved, "then' will execute

//chaining of functions
.then(function (b){ // Instance of browser will come in b
    browser = b;
    return browser.pages(); // promise return kr rha browser me jitne bhi pages h wo array me store krega
})

 // When Above will get reolved then it will come down 
.then(function (pages){
    page = pages[0];

    return page.goto("https://www.google.com/");
})

.then(function () {
    return Promise.all([ // it has array containing promises
    page.waitForNavigation(),
    page.click("[data-pid='2']"), // css element class
    ]);
})

    .then( function() {
        return page.type(".gLFyf.gsfi","dog"); // css element class
    })
.then( function() {
    return Promise.all([page.waitForNavigation(),page.click(".Tg7LZd")]); // css element class
})
.then(function (){
    return page.screenshot({path : "dog.png"});
})
.then(function (){
    return browser.close();
})
.catch(function (err){
    console.log(err);
});
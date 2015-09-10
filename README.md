# Homework

*   Write code using `readFileSync()` to count the number of new line characters in a given file. The user should supply the file name as an argument when running the script. For example:

    Given the following `test.txt` file:

        hello
        blah blah
        goodbye

    Running `node newLineCount.js test.txt` should print out 2.

*   Rewrite the above code using `readFile()`

*   Use the HTTP module to make a request to "[http://omdbapi.com/?i=tt0241527](http://omdbapi.com/?i=tt0241527)" and store the data in an array. Once the first request is finished, make another request to "[http://omdbapi.com/?i=tt0295297](http://omdbapi.com/?i=tt0295297)" and add the data to the same array. When the second request is finished, console.log the array with the data. Callbacks!!!
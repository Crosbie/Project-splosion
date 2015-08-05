# Project-splosion
what happens when you merge the cells

## Getting Started
### Prerequisites
- Install node (https://nodejs.org/)
- Install git (https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Install npm (http://blog.npmjs.org/post/85484771375/how-to-install-npm)


## Using git
- clone this project onto your machine `git clone <sshURL>`
- Make code changes
- Add your changes to a git commit `git add -a`
- Commit your changes to git `git commit -m "my commit description"`
- Try pull incase someone has updated the remote repo `git pull origin master`
- Manually resolve any merge conflicts
- If any merge conflicts exists you will need to add and commit these extra changes
- Push your changes back to remote repo `git push origin master`


## Local Development
### Prerequisites (*from within project root*)
- Install Bower `npm install -g bower`
- Install Browserify `npm install browserify`
- Install local Grunt `npm install grunt`
- Run `npm install` to install all dev dependancies

### First steps
- Run `grunt prepare:debug` to install all bower components and browserify the source code
- Run `grunt serve` to start the client code runnning locally and watch all files for changes
- All development is done in _www_dev_ folder

### Adding new Model/View/Collection/Service
- Add file to relevant folder in www_dev/js/
- Add reference to file in index.js file in that folder 
- Eg. Create controller _Test.js_ in the _controllers_ folder. Then add `'Test':require('./Test');` to _controllers/index.js_.
- To ensure that the correct code formatting/JSHint has been obeyed, run `grunt format`

### Testing
- Add a new test file to _tests/&lt;component type&gt;/_
- In the test file instantiate the file you are testing
- Write a test suite...
- Eg.
    ```
    describe('<component name>', function(){
        describe('#<function name>', function(){
            it('<test behaviour>', function(){
                ...
            });
        });
    });
    ```

- Run `grunt build` as the tests are only run against the built app code (www/), not the development code (www_dev/)
- Run `grunt test`

### Build
- To package the app into the _www_ folder, run `grunt build`
- Build relies on the passing of all tests and formatting checks
- To run tests or format check individually, run `grunt test` or `grunt format`

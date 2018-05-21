# Project

## Approaching a Project

Developing a large project is hard. Don't just dive in and try to tackle the entire thing all at once. As the famous saying goes:

> A goal without a plan is just a wish.

Start with a plan! Here are some steps that I like to follow when building a project:

- Outline the steps needed to build the project
- Draw the application
    - What individual screens would look like
    - How the Components are connected to each other
- Write down the architecture
- Develop the app piece by piece

And just before submitting:

- Squash all bugs
- Check the rubric and make sure that your project meets all requirements

Take it slow and practice your newly acquired skills.

## Project Overview

In the MyReads project, you'll create a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

### Starter Code

Your Workspace is a development environment integrated into the Udacity Classroom and comes preconfigured with the MyReads project starter repository. You can both develop your entire in your Workspace as well as submit your project to be reviewed. For more information about your Workspace, check out the Your Project Workspace page.

If you'd like to work locally on your own computer, fork and clone the [starter repository](https://github.com/udacity/reactnd-project-myreads-starter).

The code in both your Workspace and the starter repo contains all the CSS and HTML markup that may be used but omits the React code that is required to complete the project. This can save you some time if you don't wish to write all the CSS and HTML from scratch. The provided code will demonstrate a static HTML page of the finished application, but with no interactive functionality.

### App Functionality
In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

- Currently Reading
- Want to Read
- Read

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is in.

The main page also has a link to /search, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. To keep the interface consistent, you may consider re-using some of the code you used to display the books on the main page.

When a book is on a bookshelf, it should have the same state on both the main application page and the search page.

The search page also has a link to / (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.

### Submission Requirements
Your submission should include all of the files necessary to install and launch your web application on a local web server. For files that include JSX, please refrain from using the .jsx extension (you can prefer .js). You can assume that your reviewer will have npm installed on their machine.

### Considerations
The focus of this project is on writing functional React code, not on making the page beautiful. Feel free to spend some time working on your layout and CSS if you want to, but the goal for this project is correct functionality.

## Project Instructions
### Before Submittiing
Make sure your code adheres to our HTML, CSS, JavaScript, and Git style guidelines.

- [Udacity's HTML Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/index.html)
- [Udacity's CSS Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/css.html)
- [Udacity's JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)
- [Udacity's Git Style Guide](https://udacity.github.io/git-styleguide/)

We recommend using Git from the very beginning. Make sure to commit often and to use well-formatted commit messages that conform to our guidelines.

### How will this project be evaluated
Your project will be evaluated by a Udacity Code Reviewer according to the [rubric](https://review.udacity.com/#!/rubrics/918/view). Be sure to review it thoroughly before you submit. All criteria must "meet specifications" in order to pass.

The project rubric is your source of truth while building this project. Save it to your browser bookmarks so you can access it easily!

### Submission Instructions

If you choose to develop on your local machine (by either starting with the starter project or starting from scratch with Create React App), you will need to:

1. Push your project to GitHub, making sure to push the master branch.
2. On the project submission page choose the option "Submit with GitHub"
3. Select the repository for this project (you may need to connect your GitHub account first).
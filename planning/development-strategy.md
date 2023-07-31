<!--

  There will be different types of tasks for each user story:
    `type: components`
    `type: css`
    `type: logic`
    `type: handlers`
    ...

-->

# Project Name
TodoList
## Setup
- Create a new repository from the template
- Protect the `main` branch to ensure code quality and stability.
## Tasks
### Input to Create Tasks
- As a user, I want to be able to add my tasks to the to-do list.
### HTML
- Add an input field for task descriptions.
- Add a button to submit the task.
### JS
- Implement a function to handle the click event of the submit button.
- Capture the task description from the input field.
- Store the task in memory or in a data structure.
### Display Created Tasks
- As a user, I want to see the tasks I have added to my to-do list.
### HTML
- Add a section to display the list of tasks.
### JS
- Update the function to display the tasks on the page after adding them.
- Render each task as a list item.
### Buttons to Change and Delete Tasks
- As a user, I want to be able to change and delete my tasks.
### HTML
- Add buttons for “Edit” and “Delete” for each task in the list.
### JS
- Implement functions for the “Edit” and “Delete” buttons.
- When the “Edit” button is clicked, allow the user to modify the task description and update it.
- When the “Delete” button is clicked, remove the task from the list.
### Button to Remove All Tasks
- As a user, I want to be able to remove all tasks from my to-do list at once.
### HTML
- Add a “Clear All” button.
### JS
- Implement a function to handle the click event of the “Clear All” button.
- Remove all tasks from the list and update the display.
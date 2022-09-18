# NestJS todo

## Documentation

[API Doc](https://documenter.getpostman.com/view/5368091/2s7Ymz8gyb#67d6b30c-e265-4223-97f9-d50cc6773975)


## resource and roles

- resource:
  - user
  - todo

- roles:
  - admin
  - member
  - manager

## Role Based Access Control Todo App

- admin：
	- /users、/todos are all allowed (The first created user is default as admin)
- member：
	- allow read for /todos & /users 
	- allow update for /todos/:id
- manager：
	- inherit member's right
	- allow create /todos 
	- delete /todos/:id for
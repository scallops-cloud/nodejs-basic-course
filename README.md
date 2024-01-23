# Node.js Basic Course

The course was designed for the [Generation Thailand](https://thailand.generation.org/) JSD Program.
It is a one-week course for the students to learn the basic of Node.js and Express.js.

## How to use this course?

1. Clone this repository to your local machine.

```sh
git clone git@github.com:scallops-cloud/nodejs-basic-course.git
```

2. Checkout a new branch to work on, to avoid the conflict with the new workshop update. (You may use other branch name you prefer.)

```
cd nodejs-basic-course
git checkout -b exercise-work
```

3. Check the slide if available for the exercise, then try to work on the code in the exercise folder.

4. Commit once you are done to save the changes. Check the solution to compare the result.

## Content

### 01 - Node.js Basic

#### 📽️ Slides:

- [Node-0: Node.js Introduction](https://snappify.com/view/521817e9-e344-47f0-a84b-1bfd6f7803c5)
- [Node-1: NodeJS Read & Write File](https://snappify.com/view/c9044b04-2c4a-44cd-aff3-817ed80fc66f) for exercise 01-01
- [Node-2: NodeJS Arguments](https://snappify.com/view/2e732ca7-cf84-437a-ba03-103e3b51ca48) for exercise 01-02 & 01-03

#### 🧪 Workshop

https://github.com/scallops-cloud/nodejs-basic-course/tree/main/01-node-intro/exercises

### 02 - Project Todo CLI

#### 🧪 Workshop

https://github.com/scallops-cloud/nodejs-basic-course/tree/main/02-project-todo-cli/exercises

### 03 - Express Basic

#### 📽️ Slides:

- [Express-1: Express.js Introduction](https://snappify.com/view/9cfd2202-f570-47c8-ba11-a5126a5ce2a6) for exercise 03-01
- [Express-2: Basic Router](https://snappify.com/view/9a91cd83-009a-4501-8d94-7635874a267a) for exercise 03-02 & 03-03
- [Express-3: Middleware](https://snappify.com/view/da273be5-7ced-4a9a-93ce-fda4c2670e36) for exercise 03-06

#### 🧪 Workshop

https://github.com/scallops-cloud/nodejs-basic-course/tree/main/03-express-intro/exercises

### 04 - Project Todo API

#### 🧪 Workshop

https://github.com/scallops-cloud/nodejs-basic-course/tree/main/04-project-todo-api-v1/exercises

### 05 - CRUD & Rest API

#### 📽️ Slides:

- [REST-1: REST API Introduction](https://snappify.com/view/888e678f-01de-43fd-a79c-e92ff9a07d97)

#### 🧪 Workshop

https://github.com/scallops-cloud/nodejs-basic-course/tree/main/05-crud-rest-api/exercises

### 06 - Authentication

#### 📽️ Slides:

- [AUTH-1: Encryption & Hashing](https://snappify.com/view/8923e6d8-59de-4941-b4f6-eab8bcce45fe)
- [AUTH-2: Intro to Express.js Authentication](https://snappify.com/view/0bd6802a-c2b2-4b1b-890d-385f4fc9fe32) for exercise 06-01 & 06-02
- [AUTH-3: JWT & Protected Routes](https://snappify.com/view/b53fd2ec-082a-457f-b65e-234c2b09ef6a) for exercise 06-03 & 06-04

#### 🧪 Workshop

https://github.com/scallops-cloud/nodejs-basic-course/tree/main/06-authentication/exercises

## How to update the content

1. Ensure we are at the working branch ex. `exercise-work`. And no uncommitted changes.

```sh
git status
```

Expected result:

```sh
On branch exercise-work
nothing to commit, working tree clean
```

2. If the branch is not clean, commit all existing uncommitted changes first.

```sh
git add .
git commit -m "Day 1's work"
```

3. Checkout main branch.

```sh
git checkout main
```

4. Pull the new changes

```sh
git pull
```

5. Switch back to working branch (can be other branch name you used).

```sh
git checkout exercise-work
```

6. Merge the new change to the `exercise-work` branch.

```sh
git merge main
```

## How to push working branch to your own repository?

1. Fork this repository to your own account.

2. Check the remote repository.

```sh
git remote -v
```

Expected result:

```sh
origin  git@github.com:scallops-cloud/nodejs-basic-course.git (fetch)
origin  git@github.com:scallops-cloud/nodejs-basic-course.git (push)
```

3. Add your own repository as a remote repository.

```sh
git remote add myrepo YOUR_GITHUB_REPO_URL
```

For example:

```sh
git remote add myrepo git@github.com:turboza/nodejs-basic-course.git
```

4. Push the working branch to your own repository.

```sh
git push myrepo exercise-work
```

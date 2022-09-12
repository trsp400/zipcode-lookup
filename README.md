# This project is a monorepo and was set up using lerna to bootstrap and run all packages (frontend and backend)

## First of all, we need to bootstrap all the dependencies of all packages, so to make it, just run:
```
npx lerna bootstrap
```
- If you don't have lerna, the terminal will ask you to install it

## After this, you should have all the dependencies installed (it probably might take a while)
## Now, we want to run all the packages, to make it, run:
```
npx lerna run dev
```

- This will run the ```dev``` commands of all package.json files at the same time

## You can also see the packages in a more graphical way, to make it, just run:

```
npx nx graph
```

## After the project is running, you can access the package links on:

- frontend: ```http://localhost:3000```
- backend: ```http://localhost:4000```

# Testing the project
## You can test the API, there are two relevant tests, to see them, just run:

```
npx lerna run test
```

- This will run test for the API

#### Then you should see the success messages
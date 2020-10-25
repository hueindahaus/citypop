![CityPop](docs/images/citypop.png)


## `Backgroound`
Citypop is a web-application that enables searching for population by city or the most populated cities in a country. It was built with [ReactJS](https://reactjs.org/) and initiated with [Create React App](https://github.com/facebook/create-react-app). [NodeJS](https://nodejs.org/en/) was heavily used with it's package manager to install libraries as [GreenSock](https://greensock.com/react/) and [React Router](https://reactrouter.com/).

## `Architecture`
The structure of the code is heavily influenced by the standards of ReactJS. The application is based on components. The components are then divided into two groups, functional and class based. The functional components are simple components that doesn't rely on states, while the opposite for class based components. The application has a heavy front-end but also includes back-end processing in the form of a data-handler. The data-handler's purpose is to query data, parse, process it, and then provide it in the wanted format.

## `Open development environment`
Make sure latest version of NodeJS, npm and npx is installed with the commands:
```bash
node -v
npm -v
npx -v
```
Navigate to the top-directory of the project:
```bash
cd <path>/citypop
```
Start a local server with the command:
```bash
npm start
```
It should open a window in your browser with the running application.

If you use visual studio code as integrated development environment, you can open a new command-prompt, navigate to the top-directory and write:
```bash
code .
```
It will open visual studio in the right directory. If you use another ide, please open the folder citypop to open the project.


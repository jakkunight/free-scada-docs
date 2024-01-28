---
title: Setup your dev environment
sidebar:
    order: 0
author: "@jakkunight"
---
If you want to collab with the Free SCADA project, you have to install [Git](https://git-scm.com/). 
Then open a terminal on your system and run the following command to clone the repo:


```shell
git clone https://github.com/israelpaniaguadev/free-scada
```

Next, you have to intall the development tools. Install [NodeJS](https://nodejs.dev) for your system. 
Make sure to install the LTS (Long Term Support) version to ensure the project stability. Next, you can 
install another package manager, if you don't like NPM. We prefer Bun over NPM because its speed, but 
we are going to keep NPM as main standard.

Once you have installed the setup, go to your project folder and run the following command to install all 
project dependencies:

```shell
npm install # Or npm i

```

Or if you use Bun:
```shell
bun install # Or bun i
```

Then run the project with the following command:
```shell
npm start # Or `bun start` if using Bun.
```

Congratulations! You already mounted your development setup!

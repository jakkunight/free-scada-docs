---
title: "Adding into a new feature"
sidebar:
    order: 1
author: "@jakkunight"
---
To work into a new feature, **NEVER** commit your changes directly into the "main" branch unless you 
have the rights to do so. 

## Updating your local repo with the latest changes
Open a terminal into your project folder. You should be located into the "main" branch. 
To update your main branch with the latest changes, run:
```shell
git pull origin main
```

## Creating a new branch
To create a new branch, run:
```shell
git checkout -b <my-github-username>/<my-new-feature>
```

## Creating a merge request
Once you finished, push your changes to the remote repo by running:
```shell
git push origin <my-github-username>/<my-new-feature>
```
Then, go to the GitHub page and open a new merge request.

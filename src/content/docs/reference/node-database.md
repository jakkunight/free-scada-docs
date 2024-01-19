---
title: "Node components: The Terminal"
sidebar:
    order: 3
author: jakkunight
---
The terminal is the frontend application. The user interacts with it to perform some actions:
* Send commands to an IED
* See a real-time overview of the station components
* Access to more specific data, which is not exposed in the above mentioned overview
* See events on real-time and "alarm" if needed

With those functional requirements, the terminal should be able to provide an easy-to-use UI 
to help the operators with their daily tasks.

## Modules
Following the SOLID principles, the terminal must to be separated into modules that performs 
a single task. These modules are:
* Authentication module
* Data fetching module
* Command sending module
* Event visualizer module
* Alarm viewer module

Let's dive into them.

### The 


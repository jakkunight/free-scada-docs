---
title: SOLID
sidebar:
    order: 1
author: jakkunight
---

## The SOLID principles.
This is a set of principles, reunited into a beautyfull acromin to make the code more 
mantainable, scalable and decoupled. The acronim stands for:
* Single Responsability
* Open-Close
* Liskov Substitution
* Interface Segregation
* Dependency Inversion

Let's dive into each one.

### S: Single Responsability Principle
This principle says that a part of the system should do only one job, and only 
that job. The traditional SCADA architecture voids this by assigning too 
much responsabilities to the data layer and the processing layer. 

### O: Open-Close Principle
This is a simple rule: Once you have a module that performs a task, but 
you want it to do more things, you must not modify it directly, it is *"closed"*  
for internal modifications once is working, but you can extend it via 
external modules, so it's *"open"*  for modifications from the outside. 
The traditional SCADA voids it because when a new device needs to be *"added"*, 
is necessary to modify the data and processing layers from the inside, which 
can result into a broken acquisition, or not processed commands.

### L: The Liskov Substitution Principle
This is more a logical principle, but can be applied to this case. 
This principle states that a father object can be substituted by its child 
object. In the traditional SCADA system this principle is violated because 
the devices or parts of the system can't be substituted by newer versions, 
so the system needs to be modified from the inside to manage the new devices.

### I: The Interface Segregation Principle
This principle is a little bit tricky. This principles says that if two 
objects communicates between them, they must do it via an interface object. 
This is usefull because if you want to replace a module, you can do it without 
worrying about other modules, because the interface will expose the functionalities 
to the other modules. The traditional SCADA systems does not acomplishes this 
because there's no an standard interface. Not all the gateways performs the 
same tasks in the same way, so this is why is needed a software pice that 
can get the job done.

### D: The Dependency Inversion Principle
This principle states that all dependencies should perform their tasks without 
depending on **how their pair dependency works internally**. This is specially 
usefull in a SCADA context, where the components should be replaced and 
mantained constantly. The traditional SCADA systems doesn't respect this 
because if a component fails, all the dependencies fails in consequence 
because of the lack of isolation.

## Conclusion
We saw that the SOLID principles are powerfull enough to make any project more 
mantainable, scalable and reliable. Let's see how Free SCADA uses this to 
deal with the problem.



---
title: General architecture of a SCADA system.
sidebar:
    order: 0
author: jakkunight
---
## Classic SCADA architecture
A traditional SCADA system is composed by:
1. Client layer
2. Processing layer
3. Data acquisition layer.

These layers performs an specific task in the data acquisition process, 
which corresponds with a component in the Model-View-Controller (MVC) 
architecture.

### Client layer (View)
It allows to the operators to interact with the SCADA system. It is called 
**HMI** (Human-Machine Interface). It should be able to show the state of 
the system, the metrics in real time, the events that requires a human 
intervention, perform some commands, etc. 

There are two main kinds of clients:
1. Local
2. Remote

The local client is the local operator of this station. He has to be able 
to view all the available data, meanwhile the remote client, aka the 
control operator, only needs to see the most relevant data, but still 
having some access to the more specific informations if required.

### Processing layer (Controller)
This layer decides what to send to the Local and Remote clients. This 
is tradionally called RTU (Remote Unit Terminal) which processes all the 
data collected from the IEDs (Intelligent Electronic Devices) and normalize 
their format and transmission protocols, among other things. Generally, 
this should be a dedicated equip, but it also can provide other services, 
as we're going to propose in this project.

### Data acquisition layer (Model)
This layer must collect the data from the different meters and sensors in the 
station. This job is tipically done via a *"gateway"*, which normalizes the 
data formats and performs the normalization of the communication protocols.

## Conclusion
Now that we know more about the general SCADA architectures, let's dive into 
the Free SCADA fundamentals.



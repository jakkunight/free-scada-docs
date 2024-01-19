---
title: The Free SCADA Architecture
sidebar:
    order: 2
author: jakkunight
---
## The same pattern, but better organized
The traditional SCADA, propossed by the IEC in different ocations, 
lacks something important: the scalability. This model, as it is, is not 
scalable, because the system is too much coupled to the hardware. To avoid 
those problems, we are going to use the SOLID principles, by using nodes, 
which are a more abstract representation of what we want to describe.

## The Free SCADA architecture: Nodes.
Let's define what is a node for the Free SCADA perspective. Each node has 
a terminal, which represents the HMI, a backend, that provides an API to 
the station database, and a database server, which stores the acquired data.

The backend has to acquire the data from one of this sources:
+ Devices on field (IEDs, meters, sensors, etc)
+ Other backend servers (if it's a remote node)

Also, the backend should be able to send the data to one of the following 
receptors:
+ The local terminal (the HMI of the station operator)
+ Other backend server (if it's a local node)

The terminal is only a client for the backend server. It just renders a 
user-friendly interface based on the backend server API.

The database is the place where the data acquired by the backend, and the executed commands
 results are stored. The database also reflects the SCADA model that solves the problem itself.

Let's dive into each of the components of a node.


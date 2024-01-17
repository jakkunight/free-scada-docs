---
title: General architecture of a SCADA system.
author: jakkunight
---

Every SCADA system is composed by a set of nodes that communicates between them. Every 
node consists into a terminal, a backend, and a database server.

## The terminal
The terminal is the part of the node that lets the operator to command and control 
the devices attached to the backend. The terminal doesn't perform the task directly, 
but 

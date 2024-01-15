---
title: Design Philosophy
author: jakkunight
---

Do you need an easy way to manage your devices on your station, 
but feel like the actual SCADA is too complicated?

Do you actually work with different device brands and it's painfull to 
deal with standarizations and protocols?

Do you know technical support for your software, but you can't be 
satisfied because you don't really know what exactly the program does?

If your answer is YES, you're lucky. We made the solution for all your pain.

## Why Free SCADA?
Free SCADA is a project that aims to deal with all the posibles scenarios, at 
every scale. It's a complete abstraction of a SCADA system to give you the 
total control over your equipments.

It is built to be scalable, fully customizable, easy to use, and fully documented.

### Modeling: *"Model once, extend everywhere."*
Following the SOLID principles, the system is easy to mantain and scales with 
your requirements. The "Open-Close" principle states that any module should be 
"closed" for modifications "by hand", but "open" to extensions, compositions, and 
inheritance.

By this principle, you can take a generic device and *extend* it by adding 
more data or relating it with other models, like the model of a protocol that 
is specific for the device's brand. This gives you the power to learn from 
past devices and build and environment that fits youre requirements.

### Architecture: Local-first and decentralized.
When is needed to preserve records about metrics, or alerts, it's known that 
a broken connection makes a "hole" in your records. This is fatal when 
you have to take statics, so we implemented a local-data-driven architecture. 

The data is stored into a cache and then saved to a local database, like SQLite. 
then, if available, you can sync your data with a control server, which will 
handle them for the administrative team or the technical team.

### User experience: Intuitive interface.
The UI is always a headache. Always users complains about ugly styling, 
too much options and buttons, or too few config settings, etc. This 
is why we will take an entirely different aproach: The system UI 
will be drawn itself following a web-like design.

### Relaiability: Easy to integrate with any kind of reliability strategy.


### Freedom: What the freedom really means.



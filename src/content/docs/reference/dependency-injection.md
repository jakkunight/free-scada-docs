---
title: "Dependency Injection Pattern"
sidebar: 
    order: 2
author: "@jakkunight"
---

## The pattern that solves almost everything
Dependency injection is a powerfull design pattern that allows us to 
create decoupled software modules by using the [SOLID](/free-scada-docs/reference/solid-principles) 
principles. Let's dive into it with an example:
```typescript
class Intelx64CoreI312thCPU {
    cores: 4;
    arch: "x64";
    model: "Intel Core i3";
    manufacturer: "Intel";
    gen: "12";
    // ...
    constructor(){}
}

class CrucialDDR4RAM {
    capacity: "16GB";
    speed: "32GT/s";
    manufacturer: "Crucial",
    type: "DDR4"
    // ...
    constructor(){}
}

class Computer {
    cpu: Intelx64CoreI312thCPU;
    ram: CrucialDDR4RAM;
    // ...
    constructor(
        cpu: Intelx64CoreI312thCPU,
        ram: CrucialDDR4RAM
        // ...
    ){
        this.cpu = cpu;
        this.cpu = ram;
        // ...
    }
}

```
This computer has to create a CPU and a RAM to operate correctly, but 
we all know that we can change the CPU model, or the RAM model. 
In this case, we say that the computer is "coupled" to the CPU and the RAM. 
To avoid this, we can stablish a kind of contract that will allow us 
to change th RAM and CPU if the contract is fullfiled.
```typescript
// The interfaces represents the "contract":
interface CompatibleCPU {
    arch: "x64",
    manufacturer: "Intel",
    gen: "12" | "13" | "14"
}

interface CompatibleRAM {
    type: "DDR4"
}

class IntelCoreI5 implements CompatibleCPU {
    arch: "x64";
    manufacturer: "Intel";
    gen: "12" | "13" | "14";
    model: "Intel Core i5";
    cores: 6;
    freq: "3.4GHz";
    constructor(){}
}

class CrucialBeast implements CompatibleRAM {
    type: "DDR4";
    freq: "5.0GHz";
    manufacturer: "Crucial";
    model: "Crucial Beast 5.0";
    speed: "32GT/s";
    constructor(){}
}

class Computer {
    cpu: CompatibleCPU;
    ram: CompatibleRAM;
    constructor(cpu: CompatibleCPU, ram: CompatibleRAM){
        this.cpu = cpu;
        this.ram = ram;
    }
}

const myPC = new Computer(new IntelCoreI5(), new CrucialBeast());
```
This code could look more verbose, (it actually IS more verbose, because there's no 
modularization) but for far more flexible than the previous one. We can create as 
many models of CPUs and RAMs and, while satisfying the contract, they can be used 
by the computer no matter what.

This is the **Dependency Injection**, a way to use the dependency inversion, since 
it makes the computer, in this case, independant from the CPU and RAM implementations; 
the interface segregation, since it makes all the classes to talk each other via interfaces, 
instead of references or by creating new objects; the Liskov substitution, because it 
a CPU can be substuted by another class that fits the interface; the Open-Close principle, 
because it lets us to extendend the behavior of the computer from the outside by changing 
components; and the single responsability principle, since every class just perform one 
responsability at a time.

## Why to use Dependency Injection into Free-SCADA?
Because the system is agnostic to the devices that are connected to it. While the devices 
acomplishes the interface contract, it can be used by the system. Also, it can be easily 
extended by simply creating a new extended object that fits the interface.

Also, the DI improves the testing process, because it can not only reduce the amount of 
unit tests, but lets us to "moke" a dependency easily without compromising other parts 
of the code.

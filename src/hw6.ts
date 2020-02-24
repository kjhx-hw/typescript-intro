export function sayHello(name:string):void {
    console.log(`Hello, ${name}!`);
}

export function doubleAll(nums:number[]):number[] {
    let out:number[] = nums;

    out = out.map(function (n:number):number {
        return n* 2;
    });

    return out;
}

export function mapSum(arr:string[], fun:(s:string) => number):number {
    let out = 0;

    arr.map(function (s:string):void {
        out += fun(s);
    });

    return out;
}

interface Location {
    x:number;
    y:number;
}

export class Circle {
    radius:number = 0;
    x:number = 0;
    y:number = 0;

    constructor(rad:number) {
        this.radius = rad;
    }

    toString():string {
        return "Circle";
    }

    area():number {
        return Math.PI*(this.radius*this.radius);
    }

    moveTo(obj:Location):void {
        this.x = obj.x;
        this.y = obj.y;
    }
}

export class Spaceship {
    x:number = 0;
    y:number = 0;
    hitPoints:number = 100;

    constructor(obj:Location) {
        this.x = obj.x;
        this.y = obj.y;
    }

    toString():string {
        return 'Spaceship';
    }

    damage(n:number):number {
        this.hitPoints -= n;
        return this.hitPoints;
    }

    moveTo(obj:Location):void {
        this.x = obj.x;
        this.y = obj.y;
    }
}

interface Movable {
    x:number;
    y:number;
    moveTo(obj:Location):void;
}

export function tour(obj:Movable, arr:Location[]):void {
    arr.forEach(location => {
        obj.moveTo(location);
        console.log('Moved ' + obj.toString() + ' to (' + location.x + ', ' + location.y + ')');
    });
}
# typescript-intro

- [x] Write a function named sayHello. This function should take one string parameter: a name. It should print "Hello, name", where name is the parameter. It should not return anything.
- [x] Write a function named doubleAll. This function should take an array of numbers, and should return a new array that is a copy of the original except that each element is doubled.
- [x] Write a function called mapSum. This function should take an array of strings, and a function that maps a string to a number. It should call the function on all of the strings, then return the sum of the result.
- [x] Write an interface named Location. The interface should have two properties: x and y, both numbers.
- [x] Write a class named Circle. It should have three properties: x (the x-position of the center), y (the y-position of the center), and radius.
        * The constructor should take one parameter: the initial value of the radius. The x and y coordinates should be set to zero.
        * The toString() method should return the string "Circle"
        * The area method should return the area of the circle. Use Math.PI for π.
        * The moveTo method should take one parameter: a Location. It should adjust the x and y properties of the circle so that its location matches the parameter.
- [x] Write a class named Spaceship. It should have three properties: x (the x-position of the spaceship), y (the y-position of the spaceship), and hitPoints.
        * The constructor should take one parameter: a location object. It should initialize the x and y properties of the spaceship based on the location. The hitPoints property should be initialized to 100.
        * The toString() method should return the string "Spaceship"
        * The damage method should take a number. It should reduce the spaceship's hitPoints by the specified amount. It should return the spaceship's new hitPoints value.
        * The moveTo method should take one parameters: a Location. It should adjust the x and y properties so that the circle is located at the parameter.
- [x] Write a function named tour. It should take something with a moveTo method and an array of Locations. It should call moveTo on the object for each Location in the array; each time it moves the object it should print the message "Moved object to (x, y)", where object is what is returned by the object's toString() method, and x and y are the x- and y-coordinates to which the object was moved.
// 1. Create a function that swaps the values of two variables and returns them.
function swapValues(a, b) {
    let swapsArray = [b, a]
    return swapsArray
}

// 2. Create a function that greets a person using their first and last name.
function greet(firstName, lastName) {
    return `Hello, ${firstName} ${lastName}`.trim();
}

// 3. Create a function that calculates the area of a triangle.
function triangleArea(base, height) {
    return (base * height) / 2;
}

// 4. Create a function that converts Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius) {
    let Fahrenheit = (celsius * 9 / 5) + 32
    return Fahrenheit
}

// 5. Create a function that returns the remainder of dividing two numbers.
function getRemainder(a, b) {
    return a % b
}

// 6. Create a function that checks if a number is positive, negative, or zero.
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else if (num === 0) {
        return "Zero";
    }
}

// 7. Create a function that determines if a number is even or odd.
function isEven(num) {
    if (num % 2 === 0) {
        return "Even";
    } else (num % 2 == 1)
    return "Odd"
}
// 8. Create a function that returns the greater of two numbers.
function maxOfTwo(a, b) {
    if (a > b) {
        return a;
    } else {
        return b
    }
}

// 9. Create a function that classifies a person’s age category.
/*
 Age categories (used by the tests):
 - "Child": 0 - 12
 - "Teen": 13 - 17
 - "Adult": 18 - 64
 - "Senior": 65+
*/
function ageCategory(age) {
    if (age <= 12) {
        return "Child";
    } else if (age >= 13 && age <= 17) {
        return "Teen";
    } else if (age >= 18 && age <= 64) {
        return "Adult";
    } else (age >= 65)
    return "Senior";
}
// 10. Create a function that validates a password.
function checkPassword(password) {
    if (password === 1234) {
        return "Access granted"
    } else (password !== 1234)
    return "Access denied"
}

// 11. Create a function that counts the number of characters in a text.
function countChars(text) {
    return text.length;
}

// 12. Create a function that returns a text in uppercase and lowercase.
function formatText(text) {
    const textoMinusculas = text.toLowerCase();
    const textoMayusculas = text.toUpperCase();
    return { upper: textoMayusculas, lower: textoMinusculas };
}

// 13. Create a function that returns the first character of a text.
function firstChar(text) {
    return text.charAt(0)

}

// 14. Create a function that returns the last character of a text.
function lastChar(text) {
    return text.charAt(text.length - 1)

}

// 15. Create a function that formats a name as "LastName, FirstName".
function formatName(firstName, lastName) {
    return `${lastName}, ${firstName}`
}

// 16. Create a function that determines if a person can drive based on their age.
function canDrive(age) {
    if (age >= 18) {
        return "Can drive"
    } else
        return "Cannot drive"

}


// 17. Create a function that applies a 10% discount if the price is greater than 100.
function applyDiscount(price) {
    if (price > 100) {
        return price - (price * 0.10)
    } else
        return price
}

// 18. Create a function that checks if a number is between 10 and 50.
function isInRange(num) {
    return num >= 10 && num <= 50

}

// 19. Create a function that validates a login with username and password.
function validateLogin(user, pass) {
    if (user === `admin` && pass === `1234`) {
        return true
    } else {
        return false
    }

}

// 20. Create a function that returns the type of a given value.
function showType(value) {
    return typeof value

}

// BONUS 21. Create a function that returns the first element of an array.
function firstElement(array) {
    return array[0]

}

// BONUS 22. Create a function that returns the last element of an array.
function lastElement(array) {
    return array[array.length - 1]

}


// BONUS 23. Create a function that sums two elements of an array based on their indexes.
function sumArrayElements(array, index1, index2) {
    return array[index1] + array[index2]


}

// BONUS 24. Create a function that returns an object representing a person.
function createPerson(name, age, profession) {
    return {
        name: name,
        age: age,
        profession: profession
    }

}

// BONUS 25.  Create a function that returns the value of an object’s property using its key.
function getProperty(obj, key) {
    return obj[key]


}

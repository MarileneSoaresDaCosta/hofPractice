// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var result = 0;
  _.each(numbers, function(number) {
    // console.log(number);
    if (number % 5 === 0) {
      result += 1;
    }
  });
  return result;
};


/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {

  fruits = _.filter(fruits, function(fruit) {
    return fruit === targetFruit;
  });
  return fruits;
};


// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  fruits = _.filter(fruits, function(fruit) {
    return fruit.startsWith(letter);
  });
  return fruits;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  desserts = _.filter(desserts, function(dessert) {
    return dessert.type === 'cookie';
  });
  return desserts;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(groceries) {
  // console.log(Number(groceries[0].price.slice(1)));
  var total = _.reduce(groceries, function(total, product) {
    product = Number(product.price.slice(1));
    return total + product;
  }, 0);
  return total;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var total = _.reduce(desserts, function(total, dessert) {
    var category = dessert.type; // dessert is an obj in an array
    if (total[category] === undefined) {
      total[category] = 1;
    } else {
      total[category] += 1;
    }
    return total;
  }, {});
  return total;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  // releaseYear
  var ninetyMovies = _.reduce(movies, function(acc, movie) {
    var year = movie.releaseYear;
    if (year >= 1990 && year <= 2000) {
      acc.push(movie.title);
    }
    return acc;
  }, []);
  return ninetyMovies;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  var isShorter = _.reduce(movies, function(acc, movie) {
    var time = movie.runtime;
    if (time < timeLimit) {
      // console.log('time and time limit :', time, timeLimit);
      acc = true;
    }
    return acc;
  }, false);
  return isShorter;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {

};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {

};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {

};

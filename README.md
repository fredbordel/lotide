# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @fredbordel/lotide`

**Require it:**

`const _ = require('@fredbordel/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`:        Finds first element of an array.
* `tail(array)`:        Finds tail of a given array. (Everything except firts element)
* `assertEqual(actual, excepted)`: test
* `assertArraysEqual(actual, excepted)`: test
* `assertObjectEqual(actual, excepted)`: test
* `countLetters(str)`: Counts letters of a giving string.
* `countOnly(number)`: Take in a collection of items and return counts for a specific subset of those                      items.
* `eqArrays(array)`:
* `eqObjects(object)`: Take in two objects and returns true or false, based on a perfect match.
* `findKey(object, callback)`: Scan the object and return the first key for which the callback                                     returns a truthy value
* `findKeyByValue(object, value)`: Scan the object and return the first key which contains the given                                   value
* `letterPositions(sentence)`: Return all the indices in the string where each                                                     character is found.
* `map(array, callback)`: Perform a chosen callback to an array.
* `middle(array)`: Finds middle element (elements if array is even) of an array.
* `takeUntil(array, callback)`: Will return slice of array with elements taken from the beginning                                   until callback returns true
* `without(array, itemsToRemove)`: removes specific items from an array
* `flatten(arrayOfArrays)`: transforms multiple-level array into one-level array
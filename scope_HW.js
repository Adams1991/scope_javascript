// # Scope Homework: Who Dunnit
//
// ### Learning Objectives
//
// - Understand function scope
// - Know the difference in between the let and const keywords
//
// ## Brief
//
// Using your knowledge about scope and variable declarations in JavaScript, look at the following code snippets and predict what the output or error will be and why.
//
// ### MVP
//
// #### Episode 1

//
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

// ANSWER BEFORE CHECK
// This will print out `The murderer is Miss Scarlet.` The constant "screnario" scope covers all of the other methods.

// RESULT
// The murderer is Miss Scarlet.



// #### Episode 2#
//

// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// ANSWER BEFORE CHECK
// This will cause an error as const changeMurderer is try to reassign a constant.

// RESULT
// Already declared error caused.


//
// #### Episode 3
//

// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// ANSWER BEFORE CHECK
// The first verdict will print out but the second verdict will throw an error as murderer is only in declareMurderer scopes.

// RESULT
// murderer not defined error


//
// #### Episode 4
//

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// ANSWER BEFORE CHECK
// Suspects will print with Colonel Mustard as suspect three and the second print will produce Miss Peacock as suspectThree is only changed within the confines of declareAllSuspects method.

// RESULT
// As described above.

//
// #### Episode 5
//

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// ANSWER BEFORE CHECK
// This will print out The weapon is the Revolver. This is because the value of an object can be reassigned even if the object itself is a constant.

// RESULT
// As described above.

//
// #### Episode 6

//
// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// ANSWER BEFORE CHECK
// This will print out `The murderer is Mrs. White`. This is because the murderer variables scope covers all the functions and change murderer calls plotTwist within it last which reassigns murderer to Mrs. White

// RESULT
// As described above.

//
// #### Episode 7
//

// let murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//   let murderer = 'Colonel Mustard';
//
//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }
//
//     unexpectedOutcome();
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// ANSWER BEFORE CHECK
// This will print out `The murderer is Miss. Scarlet`. This is because the murderer variables scope covers all the functions and the change in unexpectedOutcome is the last change to that variable.

// RESULT
// The murderer is Mr. Green.

// REASON FOR BEING WRONG
// The let murderer in plotTwist actually means that any changes to murderer made in that function only exist within that functions block.

//
// #### Episode 8
//

// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };
//
// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
//
//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }
//
//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }
//
//     unexpectedOutcome('Colonel Mustard');
//   }
//
//   plotTwist('Dining Room');
// }
//
// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }
//
// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// ANSWER BEFORE CHECK
// This will print out `The weapon is Candle Stick`. This is because both conditionals above are true within their methods due to the arguements passed and thus the value of that key is changed.

// RESULT
// The weapon is Candle Stick.

//
// #### Episode 9

// 
// let murderer = 'Professor Plum';
//
// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

// ANSWER BEFORE CHECK
// This will print out `The weapon is Professor Plum`. This is because although the if statements conditional is true the change to the murder variable is only visible within the if statesments

// RESULT
// `The weapon is Professor Plum`.

//
// ### Extensions
//
// Make up your own episode!

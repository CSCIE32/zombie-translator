*Zombie Translator*
But we can prepare. In this assignment we will begin preparing for the end by creating a simple zombie translator. This can be used by the living for either concealment or bartering and the living impaired will have an easier time asking for brains. 

The translator can be done as a series of regular expressions (Links to an external site.) or you can step through it character by character. You get a string and you transform that string. 

## The Rules

There are some sample rules contained in the skeleton source code and are as follows:

lower-case "r" at the end of words replaced with "rh".
an "a" or "A" by itself will be replaced with "hra".
the starts of sentences are capitalized (the "start of a sentence" is any occurrence of ".!?", followed by a space, followed by a letter.)
"e" or "E" is replaced by "rr"
"i" or "I" is replaced by "rrRr"
"o" or "O" is replaced by "rrrRr"
"u" or "U" is replaced by "rrrrRr"
"r" or "R" is replaced by "RR"
 
*There should be 10 rules total. So make 2 rules up. Each rule should be a separate function. Edited out. Unnecessary*

Make use of 3 different jasmine "expect" methods per rule. http://jasmine.github.io/2.3/introduction.html (Links to an external site.) Zombies are known to be able to repeat the same statements over and over. We want to make sure the rules are not written by the undead and aren't just a list of expect(myFunc('i')).toBe('rrRr');

For example:
```
expect(30).toBe(30);
expect(undefinedVariable).toBeUndefined();
expect('30').toContain('0');
expect(callback).not.toHaveBeenCalledWith(jasmine.stringMatching(/^bar$/));
```
 
What really matters is the structure. The last thing the resistance needs is for zombies to write false translators to trick us. We need to make sure a human, professional developer created the zombie translator. We all know zombies don't know how to write modular code, and they never test. 

Each of the rules needs to be modular enough to test separately. There should also be a test for the entire function. 

## Starting point

You can use this repository for a starting point. 

## Submission

Zip up the project when you're done and submit the zip file. 

## Have to use

You have to use RequireJS and Jasmine and Karma. 

Tests need to be run with Karma. Jasmine Tests. On RequireJS modules.

## Extra credit
*20pts*

If you correctly "unzombify" (with tests).

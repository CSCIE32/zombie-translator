# Zombie Translator
The Zombie Translator app is the last hope for the resistance! This app encapsulates carefully thought out rules that separates them from us.
This translator is a series of regular expressions executed in a specific order to convert from english to zombie or vise versa .

## The Rules

Below are the rules implemented by this translator

1. lower-case "r" at the end of words replaced with "rh".
2. an "a" or "A" will be replaced with "hra".
3. the starts of sentences are capitalized (the "start of a sentence" is any occurrence of ".!?", followed by a space, followed by a letter.)
4. "e" or "E" is replaced by "rr"
5. "i" or "I" is replaced by "rrRr"
6. "o" or "O" is replaced by "rrrRr"
7. "u" or "U" is replaced by "rrrrRr"
8. "r" or "R" is replaced by "RR"
10. "t" or "T" is replaced by "TH"
11. "p" or "P" is replaced by "fhh"

All rules are mutually exclusive of each other, except rule #3. That is the first letter of the sentence will be captitalized even if if the first char is the result of other rules.
For example, zombify('.!? r') would be '.!? Rh' after applying rules #1 and #3.  
 
## The Modules
The app is composed of the following modules.

### ZombieTranslator
This module consists of the business logic to zombify or unzombify. The rules for translation is separated out into another module.  

### ZombieTranslatorView
This module has the DOM functions for the Zombie Translator UI.

### ZombifyRules
This module has all the rules that the translator would use to zombify sentences in english. The translator should excute the rules in the same order as provided by this module.
Provides interfaces to get all rules currently defined and add more rules. 

### ZombieRule
This module is used to represent a zombie rule which consinsts of a regexValue and replaceValue. The translator would use each rule to find a match for the regex and replace. 

 
## The Tests or Specs 

Below is the testing approach for this app. Most of the tests verify one rule at a time (as if the translator had just that one rule).
There a few tests that tests all the rules together.
 
### Verifying Rule 1 
* should replace lower-case "r" at the end of words  with "rh"
    + expect(zombify('errr erR purr')).toBe('errrh erR purrh'); // Test ends with caps and lower
    + expect(zombify('r')).toBe('rh'); // Just r
* should not replace Upper Case "r" at the end of words with "rh"
    + expect(zombify('faR and neaR')).toBe('faR and neaR');
* should not replace Upper or Lower Case "r" not at the end of words with "rh"'
    + expect(zombify('Errors in Report')).toBe('Errors in Report');
    
    
### Verifying Rule 2
* should replace an "a" or "A" with "hra"
    + expect(zombify('Apple a day keeps the doctor away.')).toBe('hrapple hra dhray keeps the doctor hrawhray.');
    + expect(zombify('Wanna be startin\' somethin\'')).toBe('Whrannhra be sthrartin\' somethin\'');
    + expect(zombify('Arizona')).toBe('hrarizonhra');

### Verifying Rule 3
* should capitalize first char of a sentence
    + expect(zombify('.!? howdy partner!!!')).toBe('.!? Howdy partner!!!');
    + expect(zombify('.!? game is over! .!? what do you think?')).toBe('.!? Game is over! .!? What do you think?');
    + expect(zombify('.!? wait till its over.')).toBe('.!? Wait till its over.');

### Verifying Rule 4
* should replace an "e" or "E" with "rr"
    + expect(zombify('Teen')).toBe('Trrrrn');
    + expect(zombify('TEEVEE')).toBe('TrrrrVrrrr');
    + expect(zombify('TeE Shirts')).toBe('Trrrr Shirts');

### Verifying Rule 5
* should replace an "e" or "E" with "rr"
    + expect(zombify('Diving')).toBe('DrrRrvrrRrng');
    + expect(zombify('Ice Ice Baby')).toBe('rrRrce rrRrce Baby');
    + expect(zombify('DIning in Boston')).toBe('DrrRrnrrRrng rrRrn Boston');


### Verifying Rule 6
* should replace an "o" or "O" with "rrrRr"
    + expect(zombify('oxygen')).toBe('rrrRrxygen');
    + expect(zombify('Octopus')).toBe('rrrRrctrrrRrpus');
    + expect(zombify('October Holidays are cOol')).toBe('rrrRrctrrrRrber HrrrRrlidays are crrrRrrrrRrl');


### Verifying Rule 7
* should replace an "u" or "U" with "rrrrRr"
    + expect(zombify('This is unreal')).toBe('This is rrrrRrnreal');
    + expect(zombify('Uptown girl!')).toBe('rrrrRrptown girl!');
    + expect(zombify('upcoming US soccer games')).toBe('rrrrRrpcoming rrrrRrS soccer games');

### Verifying Rule 8
* should replace an "r" or "R" with "RR"
    + expect(zombify('Are we there yet?')).toBe('ARRe we theRRe yet?');
    + expect(zombify('Rare pictures')).toBe('RRaRRe pictuRRes');

* should not replace lower case"r" at the end of the words
    + expect(zombify('Don\'t Fear The Reaper')).toBe('Don\'t Fear The RReaper');

* should replace upper case "r" at the end of the words
    + expect(zombify('JaguaR Land Rover Engineering')).toBe('JaguaRR Land RRover EngineeRRing');

### Verifying Rule 9
* should replace an "p" or "P" with "fhh"
    + expect(zombify('patriots game live')).toBe('fhhatriots game live');
    + expect(zombify('Pub crawl!')).toBe('fhhub crawl!');
    + expect(zombify('Pick Your Own Apples')).toBe('fhhick Your Own Afhhfhhles');



### Verifying Rule 10
* should replace a "t" or "T" with "TH"
    + expect(zombify('This is it!')).toBe('THhis is iTH!');
    + expect(zombify('Downtown Shopping')).toBe('DownTHown Shopping');
    + expect(zombify('It takes Two to Tango')).toBe('ITH THakes THwo THo THango');


### Verifying All Rules
* should be mutually exclusive and should not interfere
    + expect(zombify('JaguaR Land Rover Engineering')).toBe('JhragrrrrRrhraRR Lhrand RRrrrRrvrrrh rrngrrRrnrrrrRRrrRrng');
    + expect(zombify('Peter Piper picked a peck of pickled peppers.')).toBe('fhhrrTHrrrh fhhrrRrfhhrrrh fhhrrRrckrrd hra fhhrrck rrrRrf fhhrrRrcklrrd fhhrrfhhfhhrrRRs.');


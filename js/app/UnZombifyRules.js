define(['ZombieRule'], function(ZombieRule){

    var UnZombifyRules = function(){
        var _unZombifyRules = new Array();

        // 3. the starts of sentences are capitalized (the "start of a sentence" is any occurrence of ".!?",
        // followed by a space, followed by a letter.)
        _unZombifyRules.push(new ZombieRule(/\.\!\?\s./g, function(a){
            return(a.toLowerCase());
        }));

        // 7. "u" or "U" is replaced by "rrrrRr"
        _unZombifyRules.push(new ZombieRule(/rrrrRr/g, 'u'));

        // 6. "o" or "O" is replaced by "rrrRr"
        _unZombifyRules.push(new ZombieRule(/rrrRr/g, 'o'));

        // 5. "i" or "I" is replaced by "rrRr"
        _unZombifyRules.push(new ZombieRule(/rrRr/g, 'i'));

        // 4. "e" or "E" is replaced by "rr"
        _unZombifyRules.push(new ZombieRule(/rr/g, 'e'));

        //8. "r" or "R' is replaced by "RR"`
        _unZombifyRules.push(new ZombieRule(/(R|r)R/g , 'r'));

        // 1. lower-case "r" at the end of words replaced with "rh".
        _unZombifyRules.push(new ZombieRule(/rh\b/g, 'r'));

        // 2. an "a" or "A" will be replaced with "hra".
        _unZombifyRules.push(new ZombieRule(/hra/gi, 'a'));


        // Couple of custom rules
        // 9. "p" or "P" will be replaced with "fhh".
        _unZombifyRules.push(new ZombieRule(/fhh/g, 'p'));

        // 10. an "t" or "T" will be replaced with "TH".
        _unZombifyRules.push(new ZombieRule(/(T|t)H/g, 't'));


        UnZombifyRules.prototype.getRules = function(){
            return _unZombifyRules;
        };

        UnZombifyRules.prototype.addRule = function(matchValue, replaceValue){
            _unZombifyRules.push(new ZombieRule(matchValue, replaceValue));
        };

    };
    return new UnZombifyRules();

});

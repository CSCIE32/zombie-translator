define(['ZombieRule'], function(ZombieRule){

    var ZombifyRules = function(){
        var _zombifyRules = new Array();

        // //8. "r" or "R' is replaced by "RR"`
        _zombifyRules.push(new ZombieRule(/r(?!\b)|R/g , 'RR'));

        // 1. lower-case "r" at the end of words replaced with "rh".
        _zombifyRules.push(new ZombieRule(/r\b/g, 'rh'));

        // 2. an "a" or "A" will be replaced with "hra".
        _zombifyRules.push(new ZombieRule(/a/gi, 'hra'));

        // 3. the starts of sentences are capitalized (the "start of a sentence" is any occurrence of ".!?",
        // followed by a space, followed by a letter.)
        _zombifyRules.push(new ZombieRule(/\.\!\?\s./g, function(a){
            return(a.toUpperCase());
        }));

        // 4. "e" or "E" is replaced by "rr"
        _zombifyRules.push(new ZombieRule(/e/gi, 'rr'));

        // 5. "i" or "I" is replaced by "rrRr"
        _zombifyRules.push(new ZombieRule(/i/gi, 'rrRr'));

        // 6. "o" or "O" is replaced by "rrrRr"
        _zombifyRules.push(new ZombieRule(/o/gi, 'rrrRr'));

        // 7. "u" or "U" is replaced by "rrrrRr"
        _zombifyRules.push(new ZombieRule(/u/gi, 'rrrrRr'));

        // Couple of custom rules
        // 9. "p" or "P" will be replaced with "fhh".
        _zombifyRules.push(new ZombieRule(/p/gi, 'fhh'));

        // 10. an "t" or "T" will be replaced with "TH".
        _zombifyRules.push(new ZombieRule(/t/gi, 'TH'));


        ZombifyRules.prototype.getRules = function(){
            return _zombifyRules;
        };

        ZombifyRules.prototype.addRule = function(matchValue, replaceValue){
            _zombifyRules.push(new ZombieRule(matchValue, replaceValue));
        };

    };
    return new ZombifyRules();

});

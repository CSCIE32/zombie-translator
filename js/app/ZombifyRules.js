define(['ZombieRule'], function(ZombieRule){

    var ZombifyRules = function(){
        var _zombifyRules = [];

        // 1. lower-case "r" at the end of words replaced with "rh".
        _zombifyRules.push(new ZombieRule(/r\b/g, 'rh'));

        // 2. an "a" or "A" by itself will be replaced with "hra".
        _zombifyRules.push(new ZombieRule(/\ba\b/gi, 'hra'));

        // 3. the starts of sentences are capitalised (the "start of a sentence" is any occurrence of
        //   ".!?", followed by a space, followed by a letter.)
        // TODO:
        //_zombifyRules.push(new ZombieRule());

        // 4. "e" or "E" is replaced by "rr"
        _zombifyRules.push(new ZombieRule(/e/gi, 'rr'));

        // 5. "i" or "I" is replaced by "rrRr"
        _zombifyRules.push(new ZombieRule(/i/gi, 'rrRr'));

        // 6. "o" or "O" is replaced by "rrrRr"
        _zombifyRules.push(new ZombieRule(/o/gi, 'rrrRr'));

        // 7. "u" or "U" is replaced by "rrrrRr"
        _zombifyRules.push(new ZombieRule(/u/gi, 'rrrrRr'));

        // 8. "r" or "R' is replaced by "RR"`
        _zombifyRules.push(new ZombieRule(/r(?![^r]\b)/gi, 'RR'));

        //TODO: ADD 2 CUSTOM RULES
        //_zombifyRules.push(new ZombieRule());

        //_zombifyRules.push(new ZombieRule());


        ZombifyRules.prototype.getRules = function(){
            return _zombifyRules;
        };

    };
    return new ZombifyRules();

});

define(['jquery','ZombifyRules', 'underscore'], function($, ZombifyRules, _){

    var ZombieTranslator = function(rules){

        // init
        this.zombifyRules = rules || ZombifyRules.getRules();
    };

    ZombieTranslator.prototype.zombify = function(english){
        console.log('zombifying --> ', english);
        var zombified = english;


        _.each(this.zombifyRules, function(zombieRule){
            console.log("zombified is -->", zombified, "current rule is -->", zombieRule);

            if(zombified.match(zombieRule['matchValue'])){
                console.log("Found a match for _zombieRule -->", zombieRule['matchValue'], zombieRule['replaceValue'], "  matches -->", zombified.match(zombieRule['matchValue']));
                //console.log("zombified as -->", zombified);
            }
            zombified = zombified.replace(zombieRule['matchValue'], zombieRule['replaceValue']);
        });

        // Apply Complex rules

        // Rule #3 - the starts of sentences are capitalized (the "start of a sentence" is any occurrence of ".!?",
        // followed by a space, followed by a letter.)
        //zombified = zombified.replace(/\.\!\?\s./g,function(a){
        //    return(a.toUpperCase());
        //});

        console.log("Finally zombified as -->", zombified);
        return zombified;
    };

    ZombieTranslator.prototype.unZombify = function(zombie){
        var english = zombie;
    };

    return ZombieTranslator;

});
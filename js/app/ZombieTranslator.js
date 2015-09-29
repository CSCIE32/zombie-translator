define(['jquery','ZombifyRules','UnZombifyRules', 'underscore'], function($, ZombifyRules, UnZombifyRules, _){

    var _DEBUG = false;
    var ZombieTranslator = function(rules){
        // init
        this.zombifyRules = rules || ZombifyRules.getRules();
        this.unZombifyRules = rules || UnZombifyRules.getRules();
    };

    ZombieTranslator.prototype.zombify = function(english){
        if(_DEBUG){
            console.log('zombifying --> ', english);
        }

        var zombified = english;

        _.each(this.zombifyRules, function(zombieRule){
            zombified = zombified.replace(zombieRule['matchValue'], zombieRule['replaceValue']);
        });

        if(_DEBUG) {
            console.log("Finally zombified as -->", zombified);
        }
        return zombified;
    };

    ZombieTranslator.prototype.unZombify = function(zombie){
        var english = zombie;

        _.each(this.unZombifyRules, function(zombieRule){
            english = english.replace(zombieRule['matchValue'], zombieRule['replaceValue']);
        });

        if(_DEBUG) {
            console.log("Finally zombified as -->", zombified);
        }
        return english;
    };

    return ZombieTranslator;

});
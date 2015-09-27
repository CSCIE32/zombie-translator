define(['jquery','ZombifyRules'], function($, ZombifyRules){

    var ZombieTranslator = function(){

        // init
        this.zombifyRules = ZombifyRules.getRules();
    };

    ZombieTranslator.prototype.zombify = function(english){
        var zombified = english;
        $.each(this.zombifyRules, function(index, zombieRule){
            console.log('index -->', index , '; zombieRule -->', zombieRule);
            zombified = zombified.replace(zombieRule.matchValue, zombieRule.replaceValue);
        });
        return zombified;
    };

    ZombieTranslator.prototype.unZombify = function(zombie){
        var english = zombie;
    };

    return ZombieTranslator;


});
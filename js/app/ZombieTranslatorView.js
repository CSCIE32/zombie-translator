define(['jquery', 'ZombieTranslator'],function($, ZombieTranslator){

    var ZombieTranslatorView = function(){
        this.zombieTranslator = new ZombieTranslator();
        this.init(this.zombieTranslator);
    };

    ZombieTranslatorView.prototype.init = function(zombieTranslator){
        $('#e2z_english').on("keyup", function(){
            $('#e2z_zombie').val(zombieTranslator.zombify($('#e2z_english').val()));
        });

        $('#z2e_zombie').on("keyup", function(){
            $('#z2e_english').val(zombieTranslator.unZombify($('#z2e_zombie').val()));
        });

    };

    return ZombieTranslatorView;

});
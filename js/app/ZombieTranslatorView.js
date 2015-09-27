define(['jquery', 'ZombieTranslator'],function($, ZombieTranslator){

    var ZombieTranslatorView = function(){
        this.zombieTranslator = new ZombieTranslator();
        this.init();
    };

    ZombieTranslatorView.prototype.init = function(){
        $('#english').on("keyup", function(){
            $('#zombie').val(new ZombieTranslator().zombify($('#english').val()));
        });
    };

    return ZombieTranslatorView;

});
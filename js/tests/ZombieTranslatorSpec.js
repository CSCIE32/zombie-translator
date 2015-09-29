define(['ZombieTranslator', 'ZombifyRules', 'ZombieRule'], function(ZombieTranslator, ZombifyRules, ZombieRule){


    describe('ZombieTranslator test unZombify', function(){
        it('should have zombify rules not empty', function(){
            var newZombieTranslator = new ZombieTranslator();
            expect(newZombieTranslator.zombifyRules).not.toBe(0)
        });

        //Rule #1
        describe('Verify Rule #1: lower-case "r" at the end of words replaced with "rh"', function(){
            var ruleToBeTested = [new ZombieRule(/r\b/g, 'rh')];
            var newZombieTranslator = new ZombieTranslator(ruleToBeTested);
            it('should replace lower-case "r" at the end of words  with "rh"', function(){
                expect(newZombieTranslator.zombify('errr erR purr')).toBe('errrh erR purrh'); // Test ends with caps and lower
                expect(newZombieTranslator.zombify('r')).toBe('rh'); // Just r
            });

            it('should not replace Upper Case "r" at the end of words with "rh"', function(){
                expect(newZombieTranslator.zombify('faR and neaR')).toBe('faR and neaR');
            });

            it('should not replace Upper or Lower Case "r" not at the end of words with "rh"', function(){
                expect(newZombieTranslator.zombify('Errors in Report')).toBe('Errors in Report');
            });

        });

        //Rule #2
        describe('Verify Rule #2: an "a" or "A" is replaced with "hra"', function(){
            var ruleToBeTested = [new ZombieRule(/a/gi, 'hra')];
            var newZombieTranslator = new ZombieTranslator(ruleToBeTested);
            it('should replace an "a" or "A" with "hra"', function(){
                expect(newZombieTranslator.zombify('Apple a day keeps the doctor away.')).toBe('hrapple hra dhray keeps the doctor hrawhray.');
                expect(newZombieTranslator.zombify('Wanna be startin\' somethin\'')).toBe('Whrannhra be sthrartin\' somethin\'');
                expect(newZombieTranslator.zombify('Arizona')).toBe('hrarizonhra');
            });

        });

        //Rule #3
        describe('Verify Rule #3: capitalize first char of a sentence', function(){
            var ruleToBeTested = [new ZombieRule(/\.\!\?\s./g, function(a){
                return(a.toUpperCase());
            })];
            var newZombieTranslator = new ZombieTranslator(ruleToBeTested);
            it('should capitalize first char of a sentence', function(){
                expect(newZombieTranslator.zombify('.!? howdy partner!!!')).toBe('.!? Howdy partner!!!');
                expect(newZombieTranslator.zombify('.!? game is over! .!? what do you think?')).toBe('.!? Game is over! .!? What do you think?');
                expect(newZombieTranslator.zombify('.!? wait till its over.')).toBe('.!? Wait till its over.');
            });

        });


        //Rule #4
        describe('Verify Rule #4: "e" or "E" is replaced by "rr"', function(){
            var ruleToBeTested = [new ZombieRule(/e/gi, 'rr')];
            var newZombieTranslator = new ZombieTranslator(ruleToBeTested);

            it('should replace an "e" or "E" with "rr"', function(){
                expect(newZombieTranslator.zombify('Teen')).toBe('Trrrrn');
                expect(newZombieTranslator.zombify('TEEVEE')).toBe('TrrrrVrrrr');
                expect(newZombieTranslator.zombify('TeE Shirts')).toBe('Trrrr Shirts');
            });
        });

        //Rule #5
        describe('Verify Rule #5: "i" or "I" is replaced by "rrRr"', function(){
            var ruleToBeTested = [new ZombieRule(/i/gi, 'rrRr')];
            var newZombieTranslator = new ZombieTranslator(ruleToBeTested);

            it('should replace an "e" or "E" with "rr"', function(){
                expect(newZombieTranslator.zombify('Diving')).toBe('DrrRrvrrRrng');
                expect(newZombieTranslator.zombify('Ice Ice Baby')).toBe('rrRrce rrRrce Baby');
                expect(newZombieTranslator.zombify('DIning in Boston')).toBe('DrrRrnrrRrng rrRrn Boston');
            });
        });


        //Rule #6
        describe('Verify Rule #6: "o" or "O" is replaced by "rrrRr"', function(){
            var ruleToBeTested = [new ZombieRule(/o/gi, 'rrrRr')];
            var newZombieTranslator = new ZombieTranslator(ruleToBeTested);

            it('should replace an "o" or "O" with "rrrRr"', function(){
                expect(newZombieTranslator.zombify('oxygen')).toBe('rrrRrxygen');
                expect(newZombieTranslator.zombify('Octopus')).toBe('rrrRrctrrrRrpus');
                expect(newZombieTranslator.zombify('October Holidays are cOol')).toBe('rrrRrctrrrRrber HrrrRrlidays are crrrRrrrrRrl');
            });
        });


        //Rule #7
        describe('Verify Rule #7: "u" or "U" is replaced by "rrrrRr"', function(){
            var ruleToBeTested = [new ZombieRule(/u/gi, 'rrrrRr')];
            var newZombieTranslator = new ZombieTranslator(ruleToBeTested);

            it('should replace an "u" or "U" with "rrrrRr"', function(){
                expect(newZombieTranslator.zombify('This is unreal')).toBe('This is rrrrRrnreal');
                expect(newZombieTranslator.zombify('Uptown girl!')).toBe('rrrrRrptown girl!');
                expect(newZombieTranslator.zombify('upcoming US soccer games')).toBe('rrrrRrpcoming rrrrRrS soccer games');
            });
        });

        //Rule #8
        describe('Verify Rule #8: "r" or "R" is replaced by "RR"', function(){
            var ruleToBeTested = [new ZombieRule(/r(?!\b)|R/g, 'RR')];
            var newZombieTranslator = new ZombieTranslator(ruleToBeTested);

            it('should replace an "r" or "R" with "RR"', function(){
                expect(newZombieTranslator.zombify('Are we there yet?')).toBe('ARRe we theRRe yet?');
                expect(newZombieTranslator.zombify('Rare pictures')).toBe('RRaRRe pictuRRes');
            });

            it('should not replace lower case"r" at the end of the words', function(){
                expect(newZombieTranslator.zombify('Don\'t Fear The Reaper')).toBe('Don\'t Fear The RReaper');
            });

            it('should replace upper case "r" at the end of the words', function(){
                expect(newZombieTranslator.zombify('JaguaR Land Rover Engineering')).toBe('JaguaRR Land RRover EngineeRRing');
            });
        });


        //Rule #9
        describe('Verify Rule #9: an "p" or "P" is replaced by "fhh".', function(){
            var ruleToBeTested = [new ZombieRule(/p/gi, 'fhh')];
            var newZombieTranslator = new ZombieTranslator(ruleToBeTested);

            it('should replace an "p" or "P" with "fhh"', function(){
                expect(newZombieTranslator.zombify('patriots game live')).toBe('fhhatriots game live');
                expect(newZombieTranslator.zombify('Pub crawl!')).toBe('fhhub crawl!');
                expect(newZombieTranslator.zombify('Pick Your Own Apples')).toBe('fhhick Your Own Afhhfhhles');
            });
        });


        //Rule #10
        describe('Verify Rule #10: "t" or "T" is replaced by "TH"', function(){
            var ruleToBeTested = [new ZombieRule(/t/gi, 'TH')];
            var newZombieTranslator = new ZombieTranslator(ruleToBeTested);

            it('should replace a "t" or "T" with "TH"', function(){
                expect(newZombieTranslator.zombify('This is it!')).toBe('THhis is iTH!');
                expect(newZombieTranslator.zombify('Downtown Shopping')).toBe('DownTHown Shopping');
                expect(newZombieTranslator.zombify('It takes Two to Tango')).toBe('ITH THakes THwo THo THango');
            });
        });


        // Test all Rules
        describe('Verify All Rules:', function(){
            var newZombieTranslator = new ZombieTranslator();
            it('should be mutually exclusive and should not interfere', function(){
                expect(newZombieTranslator.zombify('JaguaR Land Rover Engineering')).toBe('JhragrrrrRrhraRR Lhrand RRrrrRrvrrrh rrngrrRrnrrrrRRrrRrng');
                expect(newZombieTranslator.zombify('Peter Piper picked a peck of pickled peppers.')).toBe('fhhrrTHrrrh fhhrrRrfhhrrrh fhhrrRrckrrd hra fhhrrck rrrRrf fhhrrRrcklrrd fhhrrfhhfhhrrRRs.');
            });

        });

    });


    //Unzombify related tests

    describe('Zombie Translator - test unzombify', function(){

        it('should have unzombify rules not empty', function(){
            var newZombieTranslator = new ZombieTranslator();
            expect(newZombieTranslator.unZombifyRules).not.toBe(0)
        });

        //Rule #1
        describe('Verify unzombify of Rule #1: lower-case "r" at the end of words replaced with "rh"', function(){
            var ruleToBeTested = [new ZombieRule(/rh\b/g, 'r')];
            var newZombieTranslator = new ZombieTranslator(ruleToBeTested);
            it('should replace lower-case "r" at the end of words  with "rh"', function(){
                expect(newZombieTranslator.unZombify('errrh erR purrh')).toBe('errr erR purr'); // Test ends with caps and lower
                expect(newZombieTranslator.unZombify('rh')).toBe('r'); // Just r
            });

            it('should not replace Upper Case "r" at the end of words with "rh"', function(){
                expect(newZombieTranslator.unZombify('faR and neaR')).toBe('faR and neaR');
            });

            it('should not replace Upper or Lower Case "r" not at the end of words with "rh"', function(){
                expect(newZombieTranslator.unZombify('Errors in Report')).toBe('Errors in Report');
            });

        });

        //Rule #2
        describe('Verify unzombify of Rule #2: an "a" or "A" is replaced with "hra"', function(){
            var ruleToBeTested = [new ZombieRule(/hra/gi, 'a')];
            var newZombieTranslator = new ZombieTranslator(ruleToBeTested);
            it('should replace an "a" or "A" with "hra"', function(){
                expect(newZombieTranslator.unZombify('hrapple hra dhray keeps the doctor hrawhray.')).toBe('apple a day keeps the doctor away.');
                expect(newZombieTranslator.unZombify('Whrannhra be sthrartin\' somethin\'')).toBe('Wanna be startin\' somethin\'');
                expect(newZombieTranslator.unZombify('hrarizonhra')).toBe('arizona');
            });

        });

        //Rule #3
        describe('Verify unzombify of Rule #3: capitalize first char of a sentence', function(){
            var ruleToBeTested = [new ZombieRule(/\.\!\?\s./g, function(a){
                return(a.toLowerCase());
            })];
            var newZombieTranslator = new ZombieTranslator(ruleToBeTested);
            it('should capitalize first char of a sentence', function(){
                expect(newZombieTranslator.unZombify('.!? Howdy partner!!!')).toBe('.!? howdy partner!!!');
                expect(newZombieTranslator.unZombify('.!? Game is over! .!? what do you think?')).toBe('.!? game is over! .!? what do you think?');
                expect(newZombieTranslator.unZombify('.!? Wait till its over.')).toBe('.!? wait till its over.');
            });

        });

        //Rule #4
        describe('Verify unzombify of Rule #4: "e" or "E" is replaced by "rr"', function(){
            var ruleToBeTested = [new ZombieRule(/rr/g, 'e')];
            var newZombieTranslator = new ZombieTranslator(ruleToBeTested);

            it('should replace an "e" or "E" with "rr"', function(){
                expect(newZombieTranslator.unZombify('Trrrrn')).toBe('Teen');
                expect(newZombieTranslator.unZombify('TrrrrVrrrr')).toBe('TeeVee');
                expect(newZombieTranslator.unZombify('Trrrr Shirts')).toBe('Tee Shirts');
            });
        });

        //Rule #5
        describe('Verify unzombify of Rule #5: "i" or "I" is replaced by "rrRr"', function(){
            var ruleToBeTested = [new ZombieRule(/rrRr/g, 'i')];
            var newZombieTranslator = new ZombieTranslator(ruleToBeTested);

            it('should replace an "e" or "E" with "rr"', function(){
                expect(newZombieTranslator.unZombify('DrrRrvrrRrng')).toBe('Diving');
                expect(newZombieTranslator.unZombify('rrRrce rrRrce Baby')).toBe('ice ice Baby');
                expect(newZombieTranslator.unZombify('DrrRrnrrRrng rrRrn Boston')).toBe('Dining in Boston');
            });
        });


        //Rule #6
        describe('Verify unzombify of Rule #6: "o" or "O" is replaced by "rrrRr"', function(){
            var ruleToBeTested = [new ZombieRule(/rrrRr/g, 'o')];
            var newZombieTranslator = new ZombieTranslator(ruleToBeTested);

            it('should replace an "o" or "O" with "rrrRr"', function(){
                expect(newZombieTranslator.unZombify('rrrRrxygen')).toBe('oxygen');
                expect(newZombieTranslator.unZombify('rrrRrctrrrRrpus')).toBe('octopus');
                expect(newZombieTranslator.unZombify('rrrRrctrrrRrber HrrrRrlidays are crrrRrrrrRrl')).toBe('october Holidays are cool');
            });
        });


        //Rule #7
        describe('Verify unzombify of Rule #7: "u" or "U" is replaced by "rrrrRr"', function(){
            var ruleToBeTested = [new ZombieRule(/rrrrRr/g, 'u')];
            var newZombieTranslator = new ZombieTranslator(ruleToBeTested);

            it('should replace an "u" or "U" with "rrrrRr"', function(){
                expect(newZombieTranslator.unZombify('This is rrrrRrnreal')).toBe('This is unreal');
                expect(newZombieTranslator.unZombify('rrrrRrptown girl!')).toBe('uptown girl!');
                expect(newZombieTranslator.unZombify('rrrrRrpcoming rrrrRrS soccer games')).toBe('upcoming uS soccer games');
            });
        });

        //Rule #8
        describe('Verify unzombify of Rule #8: "r" or "R" is replaced by "RR"', function(){
            var ruleToBeTested = [new ZombieRule(/(R|r)R/g , 'r')];
            var newZombieTranslator = new ZombieTranslator(ruleToBeTested);

            it('should replace an "r" or "R" with "RR"', function(){
                expect(newZombieTranslator.unZombify('ARRe we theRRe yet?')).toBe('Are we there yet?');
                expect(newZombieTranslator.unZombify('RRaRRe pictuRRes')).toBe('rare pictures');
            });

            it('should not replace lower case"r" at the end of the words', function(){
                expect(newZombieTranslator.unZombify('Don\'t Fear The RReaper')).toBe('Don\'t Fear The reaper');
            });

            it('should replace upper case "r" at the end of the words', function(){
                expect(newZombieTranslator.unZombify('JaguaRR Land RRover EngineeRRing')).toBe('Jaguar Land rover Engineering');
            });
        });


        //Rule #9
        describe('Verify unzombify of Rule #9: an "p" or "P" is replaced by "fhh".', function(){
            var ruleToBeTested = [new ZombieRule(/fhh/g, 'p')];
            var newZombieTranslator = new ZombieTranslator(ruleToBeTested);

            it('should replace an "p" or "P" with "fhh"', function(){
                expect(newZombieTranslator.unZombify('fhhatriots game live')).toBe('patriots game live');
                expect(newZombieTranslator.unZombify('fhhub crawl!')).toBe('pub crawl!');
                expect(newZombieTranslator.unZombify('fhhick Your Own Afhhfhhles')).toBe('pick Your Own Apples');
            });
        });


        //Rule #10
        describe('Verify unzombify of Rule #10: "t" or "T" is replaced by "TH"', function(){
            var ruleToBeTested = [new ZombieRule(/(T|t)H/g, 't')];
            var newZombieTranslator = new ZombieTranslator(ruleToBeTested);

            it('should replace a "t" or "T" with "TH"', function(){
                expect(newZombieTranslator.unZombify('THhis is iTH!')).toBe('this is it!');
                expect(newZombieTranslator.unZombify('DownTHown Shopping')).toBe('Downtown Shopping');
                expect(newZombieTranslator.unZombify('ITH THakes THwo THo THango')).toBe('It takes two to tango');
            });
        });
        // Test all Rules
        describe('Verify Unzombify of All Rules:', function(){
            var newZombieTranslator = new ZombieTranslator();
            it('should be mutually exclusive and should not interfere', function(){
                expect((newZombieTranslator.unZombify('JhragrrrrRrhraRR Lhrand RRrrrRrvrrrh rrngrrRrnrrrrRRrrRrng'))).toBe('Jaguar Land rover engineering');
                expect((newZombieTranslator.unZombify('fhhrrTHrrrh fhhrrRrfhhrrrh fhhrrRrckrrd hra fhhrrck rrrRrf fhhrrRrcklrrd fhhrrfhhfhhrrRRs.'))).toBe('peter piper picked a peck of pickled peppers.');
            });

        });
    });


});
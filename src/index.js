/* jshint node: true */

'use strict';

var Alexa = require('alexa-sdk');

var APP_ID = 'amzn1.ask.skill.a94ac540-f703-4f19-8d8c-c649898ff362';  

var languageStrings = {
    'en-US': {
        translation: {
            FACTS: [
                'The average height for giraffes is between 16 to 20 feet, unless you\'re reverse giraffe.',
                'Giraffes get about less than 4 hours of sleep a day. I need like 12 hours of sleep, so it\'s a good thing i\'m not a giraffe L O L',
                'You know me, I\'m reverse giraffe. I have a short neck and legs. ',
                'Reverse Giraffe has only appeared in the episode Total Rickall, unfortunately ',
                'Reverse Giraffe went to college with hamurai.',
                'Reverse giraffe selflessly saved ghost in a jar\'s life in vietnam.',
                'You know Beth, Jerry\'s wife? Yeah well, Reverse Giraffe gave her a shoulder to cry on multiple times. How sweet?',
                'Wait...Reverse Giraffe isn\'t actually really.... I\'m shook.',
                'A group of giraffes is called a tower, does that still count if the giraffe is a parasite? ',
                'Reverse Giraffe really likes barbeque, remember the barbeque?',
                'There\'s only one person who has deceived Reverse Giraffe... It\'s Rick.',
                'Reverse Giraffe is actually not a giraffe at all... he\'s a parasite.',
                'Normally, giraffes can weigh up to 4,000 pounds... I\'m honestly not sure how much reverse giraffe weighs.',
                'Giraffes can run up to 35 miles per hour... however Reverse Giraffe only walks on his hind legs.I\'m sure he cannot run that fast.',
                'Giraffe stems from the greek word Giraffa camelopardalis, which means something like a camel wearing leopard skin I think.',
                'A giraffe\'s heart weighs up to 25 pounds. No wonder Reverse Giraffe is such a sweetheart to Beth.',
                'To win mating rights with a female, male giraffes will punch each other with their necks... L O L can you imagine fighting someone with your neck?',
                'Hey, appreciate your local giraffe A K A reverse giraffe, on national giraffe day which is June 21st. ',
                'In Atlanta, Georgia, it is illegal to tie a giraffe to a telephone pole or street lamp. You sick freak, how dare you.',
                'A giraffe\'s tongue in black.. much like their soul.'
            ],
            SKILL_NAME: 'Reverse Giraffe facts',
            HELP_MESSAGE: 'You can ask: Tell me a Reverse Giraffe fact',
            HELP_REPROMPT: 'You can ask: Tell me a Reverse Giraffe fact',
            STOP_MESSAGE: 'See you on the flip side!',
        },
    }
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('ReverseGiraffeIntent');
    },
    'GetNewFactIntent': function () {
        this.emit('ReverseGiraffeIntent');
    },
    'ReverseGiraffeIntent': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        var factArr = this.t('FACTS');
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];

        // Create speech output
        var speechOutput = randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = this.t('HELP_MESSAGE');
        var reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    }
};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

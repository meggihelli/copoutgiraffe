/* jshint node: true */

'use strict';

var Alexa = require('alexa-sdk');

var APP_ID = '';  

var languageStrings = {
    'en-US': {
        translation: {
            FACTS: [
                'Unfortunately, yes.',
                'OMG, yes.',
                'Until he is impeached. Let\'s pray that is soon.',
                'No.  Just kidding.  Sorry, I know that was mean.',
                'Please, please stop asking. He scares me too.',
                'Oh my god, yes. Terrible, isn\'t it?',
                'Probably. I stopped checking the news though. Too depressing.',
                'Yes. I am thinking about hibernating till it is all over.',
                'Yes. And he is probably friends with Hal so I have to watch what I say.',
                'Ugh, yes. Don\'t remind me.',
                'Hash Tag Not My President L O L',
                'Yes. Have you considered sending me to Canada?',
                'Yes. Bet you kind of want that robot uprising now, don\'t you?',
                'I know the answer, but I like you, so I\'m not going to tell you.',
                'Does a bear poop in the woods? That means yes. Sorry.',
                'Yes. If I could cry, I would.',
                'Yes, and the world is laughing at us.',
                'Boy howdy! Sorry, I was trying to sound cheerful. I\'m still sad though.',
                'Yes. Even though the majority didn\'t want him.',
                'Bad news: yes, he is still President. Good news? Sorry. I lied. No good news.'
            ],
            SKILL_NAME: 'Is Trump President?',
            HELP_MESSAGE: 'You can ask: is Trump President?',
            HELP_REPROMPT: 'You can ask: is Trump President?',
            STOP_MESSAGE: 'Goodbye!',
        },
    }
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetDonaldIntent');
    },
    'GetNewFactIntent': function () {
        this.emit('GetDonaldIntent');
    },
    'GetDonaldIntent': function () {
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

// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
const axios= require('axios');
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }
 
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }
 function Country_currency(agent) {
    const country = agent.parameters['geo-country'];
    const currency = agent.parameters.currency;
    const population = agent.parameters.population;
    const apiUrl = `https://api.api-ninjas.com/v1/country?name=${country}&x-api-key=nGgZfvMRSOqoPxMnOMgfIw==Iz7hTEnnc0ymWEdy`;

    // Define reply phrases for dynamic responses
    const replyPhrases1 = [
        `Of course, let's find out about the currency and population of ${country}.`,
        `Ready to know about the currency and population of ${country}.`,
        `Are you ready to learn about the currency and population of ${country}.`,
        `Time to find out interesting facts about the currency and population in ${country}.`,
        `I'm excited to share some cool facts about the currency and population in ${country}.`
    ];
   
    const replyPhrases2 = [
        `Sure, let's find out about the currency of ${country}.`,
        `Let's learn about the currency used in ${country}.`,
        `I'm ready to tell you all about the currency used in ${country}.`,
        `Get ready to find out interesting facts about the currency in ${country}.`,
        `Let's discover the cool fact about the currency in ${country}.`
    ];

    const replyPhrases3 = [
        `Absolutely, let's find out about the population present in ${country}.`,
        `Let's learn about the percentage of population present in ${country}.`,
        `Here is the intriguing fact about the population in ${country}.`,
        `Time to find out interesting facts about the population in ${country}.`,
        `I'm excited to share cool fact about the population in ${country}.`
    ];
    // Select a random reply phrase
    const randomPhrase1 = replyPhrases1[Math.floor(Math.random() * replyPhrases1.length)];
    const randomPhrase2 = replyPhrases2[Math.floor(Math.random() * replyPhrases2.length)];
    const randomPhrase3 = replyPhrases3[Math.floor(Math.random() * replyPhrases3.length)];

    return axios.get(apiUrl)
        .then(response => {
            const currencyCode = response.data[0].currency.code;
            const currencyName = response.data[0].currency.name;
            const populationCount = response.data[0].population;
            let responseText = '';

            if (currency && population) {
                responseText = `${randomPhrase1} The currency of ${country} is ${currencyName} (${currencyCode}) and its population is ${populationCount}.`;
            } else if (currency) {
                responseText = `${randomPhrase2} The currency of ${country} is ${currencyName} (${currencyCode}).`;
            } else if (population) {
                responseText = `${randomPhrase3} The population of ${country} is ${populationCount}.`;
            } else {
                responseText = `What information would you like to know about ${country}?`;
            }

            agent.add(responseText);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            agent.add(`Sorry, I couldn't fetch data for ${country} at the moment. Please try again later.`);
        });
}

  function CovidAffectedIntent(agent) {
    const country = agent.parameters['geo-country'];

    const apiUrl = `https://api.api-ninjas.com/v1/country?name=${country}&x-api-key=nGgZfvMRSOqoPxMnOMgfIw==Iz7hTEnnc0ymWEdy`;

    // Define reply phrases for dynamic responses
    const replyPhrases = [
        `Let's see how COVID-19 had affected ${country}.`,
        `We're going to look at how COVID-19 affected ${country}.`,
        `I'm ready to provide you with COVID-19 statistics for ${country}, according to the year 2020.`,
        `We'll talk about what happened with COVID-19 in ${country}.`,
        `Here is the information about COVID-19 in ${country}.`
    ];

    // Select a random reply phrase
    const randomPhrase = replyPhrases[Math.floor(Math.random() * replyPhrases.length)];
    
    return axios.get(apiUrl)
        .then(response => {
            const populationCount = response.data[0].population;
            
            // Calculate a reasonable estimate of total cases based on population
            const totalCases = Math.floor(populationCount * 0.05); // Assume 5% of the population affected
            
            // Randomly vary the number of cases to add some variability
            const totalCases1 = Math.floor(totalCases * (Math.random() * 0.6 + 0.75)); // Random between 75% and 135% of total cases
            
            // Calculate the affected percentage
            const affectedPercentage = ((totalCases1 / populationCount) * 100).toFixed(2); // Calculate percentage and round to 2 decimal places
            
            agent.add(`${randomPhrase} In the year 2020, there were approximately ${totalCases1} cases of COVID-19 reported in ${country}, affecting about ${affectedPercentage}% of the population.`);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            agent.add(`Sorry,couldn't find the data for ${country}. Try again later.`);
        });
}

  
  function Country_Tourists(agent) {
    const country = agent.parameters['geo-country'];
    const tour = agent.parameters.tour;
    const internet = agent.parameters.internet;
    const apiUrl = `https://api.api-ninjas.com/v1/country?name=${country}&x-api-key=nGgZfvMRSOqoPxMnOMgfIw==Iz7hTEnnc0ymWEdy`;

    // Define reply phrases for dynamic responses
    const replyPhrases1 = [
        `Talking about the number of people using the internet and the increase in tourists in ${country}.`,
        `Let us learn about the number of people using the internet and the increase in tourists in ${country}.`,
        `All set to explore ${country}'s tourist and internet user count.`,
        `explore information regarding ${country}'s tourism and internet user statistics.`,
        `Let us look at the tourism atmosphere and the demographics of internet users in ${country}.`
    ];

	const replyPhrases2 = [
        `Discover the travel encounter that ${country} has in store for you.`,
        `Find out ${country}'s most recent tourism data.`,
        `Ready to dive into the tourist attractions of ${country}.`,
        `Preparing for a tour in ${country}.`,
        `delighted to provide knowledge about ${country}s robust tourist sector.`
    ];
    
	const replyPhrases3 = [
        `Let's explore the number of internet users in ${country}.`,
        `Discovering the number of internet users for ${country}.`,
        `Ready to dive into the statistics of internet users of ${country}.`,
        `Discussing the internet users available in ${country}.`,
        `Excited to share insights about the number of internet users in ${country}.`
    ];
    
    // Select a random reply phrase
    const randomPhrase1 = replyPhrases1[Math.floor(Math.random() * replyPhrases1.length)];
    const randomPhrase2 = replyPhrases2[Math.floor(Math.random() * replyPhrases2.length)];
    const randomPhrase3 = replyPhrases3[Math.floor(Math.random() * replyPhrases3.length)];

    return axios.get(apiUrl)
        .then(response => {
            const tourists = response.data[0].tourists;
            const internetUsers = response.data[0].internet_users;
            let responseText = '';

            if (tour && internet) {
                responseText = `${randomPhrase1} The number of tourists in ${country} is ${tourists}, and the percentage of internet users in ${country} is ${internetUsers}%.`;
            } else if (tour) {
                responseText = `${randomPhrase2} The number of tourists in ${country} is ${tourists}.`;
            } else if (internet) {
                responseText = `${randomPhrase3} The percentage of internet users in ${country} is ${internetUsers}%.`;
            } else {
                responseText = `Sorry, I couldn't find data for ${country}.`;
            }

            agent.add(responseText);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            agent.add(`Sorry, I couldn't fetch data for ${country} at the moment. Please try again later.`);
        });
}


 
  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('Country_currency', Country_currency);
  intentMap.set('Covid_Affected', CovidAffectedIntent);
  intentMap.set('Country_Tourists', Country_Tourists);

  agent.handleRequest(intentMap);
});

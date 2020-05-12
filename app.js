// const request = require('request');
// const url = "https://thevirustracker.com/free-api?countryTimeline=US";
// request.get(url, (error, res, body) => {
//     let th = JSON.parse(body);
//     console.log(th);
// });
// var wtf = require('wtfnode');
 
// wtf.setLogger('info', function (...) { ... });
// wtf.setLogger('warn', function (...) { ... });
// wtf.setLogger('error', function (...) { ... });
 
// wtf.resetLoggers(); // if you want to put them back for some reason


const covid = require('covid19-api');
//const lcd = require('./LCD_5110.js');

// lcd.PIN_SCK= "P23";
// lcd.PIN_SDIN = "P19";
// lcd.PIN_DC = "P16";
// lcd.PIN_SCE = "P24"; 
// lcd.PIN_RESET = "P18";

// lcd.setup();


let holdMiResult;

// console.log(covid.getUnitedStateCasesByStates);
setInterval(() => {
    fn();
}, 5000);


//const request = require('request');
async function fn() {
    stateResults = await Promise.resolve(covid.getUnitedStateCasesByStates());
    worldResults = await Promise.resolve(covid.getReports());
    
    holdWorldResult = worldResults[0][0];
    holdMiResult = stateResults[0][0].table;
    
    worldDeaths = holdWorldResult.deaths;
    worldCases = holdWorldResult.cases;
    worldRecovered = holdWorldResult.recovered;
    
    console.log( '---------------------Covid19 Statistics----------------------');
    console.log('  ' + new Date);
    console.log('  Confirmed Cases Worldwide: \t' + worldCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    console.log('  Deaths Worldwide: \t\t' + worldDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    // console.log('  Recovered Worldwide: \t\t' + worldRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    // console.log('  Realtime % Fatality: \t\t'+ ((worldDeaths/worldCases)*100).toFixed(2) + ' %');
    // console.log('  Realtime % Recovered: \t'+ ((worldRecovered/worldCases)*100).toFixed(2) + ' %');
    for(var i = 0; i < holdMiResult.length; i++){
        if(holdMiResult[i].state == "MI"){
            // console.log( '-Covid19 Michigan-------------------------------')
            // console.log('  Confirmed Positive in MI: \t'+ (holdMiResult[i].positive).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            console.log('  Deaths in MI: \t\t'+ (holdMiResult[i].death).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            // console.log('  Recovered in MI: \t\t'+ (holdMiResult[i].recovered).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            // console.log('  Realtime % Fatality in MI: \t'+ ((holdMiResult[i].death/holdMiResult[i].positive)*100).toFixed(2) + ' %');
            // console.log('  Realtime % Recovered in MI: \t'+ (((holdMiResult[i].recovered)/holdMiResult[i].positive)*100).toFixed(2) + ' %');
        }
    }
}





    
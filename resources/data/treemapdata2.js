const states = [
    { name: "Alabama", population: "5024279", area: "52420", isCommonweath: "true" },
    { name:"Alaska", population: "733391", area: "665384", isCommonweath: "true" },
    { name:"Arizona", population: "7151502", area: "113990", isCommonweath: "true" },
    { name:"Arkansas", population: "3011524", area: "53179", isCommonweath: "true" },
    { name:"California", population: "39538223", area: "163695", isCommonweath: "true" },
    { name:"Colorado", population: "5773714", area: "104094", isCommonweath: "true" },
    { name:"Connecticut", population: "3605944", area: "5543", isCommonweath: "true" },
    { name:"Delaware", population: "989948", area: "2489", isCommonweath: "true" },
    { name:"Florida", population: "21538187", area: "65758", isCommonweath: "true" },
    { name:"Georgia", population: "10711908", area: "59425", isCommonweath: "true" },
    { name:"Hawaii", population: "1455271", area: "10932", isCommonweath: "true" },
    { name:"Idaho", population: "1839106", area: "83569", isCommonweath: "true" },
    { name:"Illinois", population: "12812508", area: "57914", isCommonweath: "true" },
    { name:"Indiana", population: "6785528", area: "36420", isCommonweath: "true" },
    { name:"Iowa", population: "3190369", area: "56273", isCommonweath: "true" },
    { name:"Kansas", population: "2937880", area: "82278", isCommonweath: "true" },
    { name:"Kentucky", population: "4505836", area: "40408", isCommonweath: "true" },
    { name:"Louisiana", population: "4657757", area: "52378", isCommonweath: "true" },
    { name:"Maine", population: "1362359", area: "35380", isCommonweath: "true" },
    { name:"Maryland", population: "6177224", area: "12406", isCommonweath: "true" },
    { name:"Massachusetts", population: "7029917", area: "10554", isCommonweath: "true" },
    { name:"Michigan", population: "10077331", area: "96714", isCommonweath: "true" },
    { name:"Minnesota", population: "5706494", area: "86936", isCommonweath: "true" },
    { name:"Mississippi", population: "2961279", area: "48432", isCommonweath: "true" },
    { name:"Missouri", population: "6154913", area: "69707", isCommonweath: "true" },
    { name:"Montana", population: "1084225", area: "147040", isCommonweath: "true" },
    { name:"Nebraska", population: "1961504", area: "77348", isCommonweath: "true" },
    { name:"Nevada", population: "3104614", area: "110572", isCommonweath: "true" },
    { name:"New Hampshire", population: "1377529", area: "9349", isCommonweath: "true" },
    { name:"New Jersey", population: "9288994", area: "8723", isCommonweath: "true" },
    { name:"New Mexico", population: "2117522", area: "121590", isCommonweath: "true" },
    { name:"New York", population: "20201249", area: "54555", isCommonweath: "true" },
    { name:"North Carolina", population: "10439388", area: "53819", isCommonweath: "true" },
    { name:"North Dakota", population: "779094", area: "70698", isCommonweath: "true" },
    { name:"Ohio", population: "11799448", area: "44826", isCommonweath: "true" },
    { name:"Oklahoma", population: "3959353", area: "69899", isCommonweath: "true" },
    { name:"Oregon", population: "4237256", area: "98379", isCommonweath: "true" },
    { name:"Pennsylvania", population: "13002700", area: "46054", isCommonweath: "true" },
    { name:"Rhode Island", population: "1097379", area: "1545", isCommonweath: "true" },
    { name:"South Carolina", population: "5118425", area: "32020", isCommonweath: "true" },
    { name:"South Dakota", population: "886667", area: "77116", isCommonweath: "true" },
    { name:"Tennessee", population: "6910840", area: "42144", isCommonweath: "true" },
    { name:"Texas", population: "29145505", area: "268596", isCommonweath: "true" },
    { name:"Utah", population: "3271616", area: "84897", isCommonweath: "true" },
    { name:"Vermont", population: "643077", area: "9616", isCommonweath: "true" },
    { name:"Virginia", population: "8631393", area: "42775", isCommonweath: "true" },
    { name:"Washington", population: "7705281", area: "71298", isCommonweath: "true" },
    { name:"West Virginia", population: "1793716", area: "24230", isCommonweath: "true" },
    { name:"Wisconsin", population: "5893718", area: "65496", isCommonweath: "true" },
    { name:"Wyoming", population: "576851", area: "97813", isCommonweath: "true" },
];

let treemapdata = {
    name: "United States",
    areaChildren: states.map( state => {
        return {
            name: state.name,
            value: state.area
        }
    }),
    populationChildren: states.map( state => {
        return {
            name: state.name,
            value: state.population
        }
    })
  }; 
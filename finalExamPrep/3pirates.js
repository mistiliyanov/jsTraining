function pirates(inputArr) {
    //variables:
    let ports = {};
    let record = inputArr.shift();

    //functions:
    function plunderFunc(ports, town, people, gold) {
        console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
        ports[town][0] -= people;
        ports[town][1] -= gold;
        if (ports[town][0] <= 0 || ports[town][1] <= 0){
            delete ports[town];
            console.log(`${town} has been wiped off the map!`);
        }
        return ports;
    }

    function prosperFunc(ports, town, gold) {
        ports[town][1] += gold;
        console.log(`${gold} gold added to the city treasury. ${town} now has ${ports[town][1]} gold.`);
        return ports;
    }

    //control flow:
    while (record !== 'Sail') {
        const recordArr = record.split('||');
        const town = recordArr[0];
        const population = Number(recordArr[1]);
        const gold = Number(recordArr[2]);
        if (!ports.hasOwnProperty(town)){
            ports[town] = [0, 0];
        } 
        ports[town][0] += population;
        ports[town][1] += gold;
        record = inputArr.shift();
    }
    let commandLine = inputArr.shift();
    while (commandLine !== 'End') {
        if(commandLine.includes('Plunder')){
            const commandArr = commandLine.split('=>');
            let town = commandArr[1];
            let people = Number(commandArr[2]);
            let gold = Number(commandArr[3]);
            ports = plunderFunc(ports, town, people, gold);
        } else if (commandLine.includes('Prosper')){
            const commandArr = commandLine.split('=>');
            let town = commandArr[1];
            let gold = Number(commandArr[2]);
            if (gold < 0){
                console.log('Gold added cannot be a negative number!');
            } else {
                ports = prosperFunc(ports, town, gold);
            }
        }
        commandLine = inputArr.shift();
    }
    let citiesCount = Object.keys(ports).length;
    if (citiesCount === 0){
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    } else {
        console.log(`Ahoy, Captain! There are ${citiesCount} wealthy settlements to go to:`);
        for (const port in ports) {
            console.log(`${port} -> Population: ${ports[port][0]} citizens, Gold: ${ports[port][1]} kg`);
            }
        }
}
pirates(["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"]);
console.log('---------------------------------');
pirates(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"]);
console.log('---------------------------------');

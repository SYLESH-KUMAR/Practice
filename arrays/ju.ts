let arrayName: string[];
let skills: string[] = [];
skills[0] = "Problem Solving";
skills[1] = "Programming";
skills.push('Software Design');
let skill = skills[0];
console.log(typeof(skill));

let skillTuple: [string, number];
skillTuple = ['Programming', 5];

let skillTuple2: [number, string];
skillTuple2 = [5, 'Programming'];

let color: [number, number, number] = [255, 0, 0];
let bgColor: [number, number, number, number];
let headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255, 0.5];

enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
}

function isItSummer(month: Month): boolean {
    let isSummer: boolean;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}

console.log(isItSummer(Month.Jun));

const json = `{"latitude": 10.11, "longitude": 12.12}`;

const currentLocation = JSON.parse(json);
console.log(currentLocation);

console.log(currentLocation.latitude);
console.log(currentLocation.longitude);
function log(message: string): void {
    console.log(message);
}
let useless: void = undefined;





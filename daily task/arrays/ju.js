var arrayName;
var skills = [];
skills[0] = "Problem Solving";
skills[1] = "Programming";
skills.push('Software Design');
var skill = skills[0];
console.log(typeof (skill));
var skillTuple;
skillTuple = ['Programming', 5];
var skillTuple2;
skillTuple2 = [5, 'Programming'];
var color = [255, 0, 0];
var bgColor;
var headerColor;
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255, 0.5];
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
function isItSummer(month) {
    var isSummer;
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
var json = "{\"latitude\": 10.11, \"longitude\": 12.12}";
var currentLocation = JSON.parse(json);
console.log(currentLocation);
console.log(currentLocation.latitude);
console.log(currentLocation.longitude);
function log(message) {
    console.log(message);
}
var useless = undefined;
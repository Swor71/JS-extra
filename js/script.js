var avatar = faker.fake("<img src='{{image.avatar}}' alt='avatar'>");
var firstName = faker.fake("{{name.lastName}}");
var lastName = faker.fake("{{name.firstName}}");
var profile = faker.fake("{{lorem.lines}}");
var city = faker.fake("{{address.city}}, {{address.stateAbbr}}");
var date = faker.fake("{{date.month}}");

document.getElementById('photo').innerHTML = avatar;
document.getElementById('name').innerHTML = firstName + ' ' + lastName;
document.getElementById('email').innerHTML ='@' + firstName + lastName;
document.getElementById('profile').innerHTML = profile;
document.getElementById('city').innerHTML = city;
document.getElementById('website').innerHTML = firstName + lastName + '.com';
document.getElementById('button-inner').innerHTML = '  Tweet to ' + firstName + ' ' + lastName;
document.getElementById('date').innerHTML = 'Joined in ' + date;
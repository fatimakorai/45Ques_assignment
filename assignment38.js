"use strict";
function describe_cities(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_cities('Karachi');
describe_cities('Nairobi', 'Kenya');
describe_cities('Multan', 'Pakistan');

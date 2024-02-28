function describe_cities (city :string, country :string = "Pakistan"): void {

        console.log(`${city} is in ${country}`);

}

describe_cities('Karachi')
describe_cities('Nairobi', 'Kenya')
describe_cities('Multan', 'Pakistan')

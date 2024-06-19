const { faker } = require('@faker-js/faker');
const MongoClient = require("mongodb").MongoClient;
const _ = require("lodash");

async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const locationsCollection = client.db("trip-order").collection("locations");
        const categoriesCollection = client.db("trip-order").collection("categories");

        let categories = ['historical', 'cultural', 'natural', 'modern'].map((category) => { return { name: category } });
        await categoriesCollection.insertMany(categories);

        let locations = [];
        for (let i = 0; i < 10; i += 1) {
            let newLocation = {
                name: faker.location.city(),
                country: faker.location.country(),
                description: faker.lorem.sentence(),
                price: faker.commerce.price(),
                category: _.sample(categories),
                imageUrl: _.sample([
                    faker.image.urlLoremFlickr({ category: 'city', width: 640, height: 480 }),
                    faker.image.urlLoremFlickr({ category: 'nature', width: 640, height: 480 })
                ])
            };
            locations.push(newLocation);
        }
        await locationsCollection.insertMany(locations);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();

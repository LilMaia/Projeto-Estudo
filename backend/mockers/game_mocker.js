const { faker } = require('@faker-js/faker');

function generateGames(amount) {
  let games = [];
  for (let i = 0; i < amount; i++) {
    games.push({
      name: faker.commerce.productName(),
      company: faker.company.name(),
      website: faker.internet.url(),
      launchYear: faker.date.past(),
      genre: faker.commerce.department(),
    });
  }
  return games;
}

module.exports = { generateGames };
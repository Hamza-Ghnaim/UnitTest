const axios = require("axios");

async function getUsers() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = response.data.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        address: `${user.address.street}, ${user.address.city}, ${user.address.zipcode}`,
      };
    });
    return users;
  } catch (error) {
    console.error(error);
  }
}

module.exports = getUsers;

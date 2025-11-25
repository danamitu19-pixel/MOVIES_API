let objects = [
  { "id": 1, "title": "The Shawshank Redemption", "year": 1994, "genre": "Drama" },
  { "id": 2, "title": "The Dark Knight", "year": 2008, "genre": "Action" },
  { "id": 3, "title": "Inception", "year": 2010, "genre": "Sci-Fi" },
  { "id": 4, "title": "Interstellar", "year": 2014, "genre": "Sci-Fi" },
  { "id": 5, "title": "Pulp Fiction", "year": 1994, "genre": "Crime" },
  { "id": 6, "title": "Forrest Gump", "year": 1994, "genre": "Drama" },
  { "id": 7, "title": "The Matrix", "year": 1999, "genre": "Sci-Fi" },
  { "id": 8, "title": "Fight Club", "year": 1999, "genre": "Drama" },
  { "id": 9, "title": "Avatar", "year": 2009, "genre": "Sci-Fi" },
  { "id": 10, "title": "Avengers: Endgame", "year": 2019, "genre": "Action" }
];

// Get all objects
const getAllObjects = () => {
    return [...objects];
}

// Add object
const addObject = (object) => {
    const id = objects.length ? objects[objects.length - 1].id + 1 : 1; // Ensure the ID is unique by checking the length of the movies array
    const newObject = { id, ...object };
    objects.push(newObject);
    return newObject;
}

// Get object by id
const getObjectById = (id) => {
    id = parseInt(id);
    if (isNaN(id)) return null; // Return null if id is not a number
    return objects.find((object) => object.id === id); // // Ensure the id is a number with parseInt
}

// Delete object by id
const deleteObjectById = (id) => {
    id = parseInt(id); // Ensure the ID is a number
    if (isNaN(id)) return false; // Handle invalid IDs

    // makes index = id of movie
    const index = objects.findIndex((object) => object.id === id);

    // Check if index is not -1/does not exist | if it does exist, delete it by splicing. Splicing removes the element at the specified index
    if (index !== -1) {
        objects.splice(index, 1);
        return true;
    }
    return false;
}

// Update object by id
const updateObjectById = (id, updatedObject) => {
    id = parseInt(id); // Ensure the ID is a number
    if (isNaN(id)) return false; // Handle invalid IDs

    // makes index = id of object | check if id/object exists | if it does, update it.
    const index = objects.findIndex((object) => object.id === id);
    if (index !== -1) {
        objects[index] = { ...objects[index], ...updatedObject };
        return objects[index];
    }
    return null;
}


module.exports = {
    getAllObjects,
    addObject,
    getObjectById,
    deleteObjectById,
    updateObjectById
}
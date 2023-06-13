import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res)=>{
    console.log(users);
    res.send(users);
};

export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
};

export const createUser = (req, res)=> {
    const user = req.body;
    users.push({ ...user, id: uuidv4()});
    res.send(`User with username ${user.firstName} added to DB :)`);
};

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);
    res.send(`User with ID ${req.id} deleted from DB :(`);
};

export const updateUser = (req, res)=> {
    const { id } = req.params;
    const {firstName, lastName, age } = req.body;
    const user = users.find(user => user.id == id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with id ${user.id} has been updated`);
}
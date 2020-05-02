const users = [];

const addUser = ({id, username, room}) => {

    //clean the data 
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    //validate the data
    if(!username || !room) {
        return {
            error : 'username and room are required'
        }
    }

    //check for existing user

    const existingUser = users.find((user)=>{
        return user.username === username && user.room === room;
    })

    //validate username
    if(existingUser) {
        return {
            error : 'usename is already used'
        }
    }

    //store user
    const user = {id, username, room};
    users.push(user);
    return {user};
}

const removeUser = (id)=>{
    const index = users.findIndex((user)=>user.id === id);

    if(index != -1) {
        return users.splice(index,1)[0];
    }
}

const getUser = (id)=> {
    const user = users.find((user)=>user.id === id)
    return user;
}

const getUsersInRoom = (room)=>{
    let roomArray = [];
    roomArray = users.filter((user)=> user.room === room);
    return roomArray;
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}
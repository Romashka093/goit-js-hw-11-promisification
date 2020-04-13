// Перепиши функцию toggleUserState() так, 
// чтобы она не использовала callback-функцию callback,
// а принимала всего два параметра allUsers и userName
// и возвращала промис.

const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
];
// // before:

// const toggleUserState = (allUsers, userName, callback) => {
// const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
// );

//     callback(updatedUsers);
// };

// and now:
const toggleUserState = (allUsers, userName) => {

    return new Promise(resolve => {
        setTimeout(() => {
            const updatedUsers = allUsers.map(user =>
                user.name === userName ? { ...user, active: !user.active } : user,
            );
            resolve(updatedUsers);
        });

    }, 1000);
}

const logger = updatedUsers => console.table(updatedUsers);

// /*
//  * Работало так:
//  */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);

// /*
//  * Сейчас работать так:
//  */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);

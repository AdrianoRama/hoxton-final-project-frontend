export function displayOnlyFiveUsers(allUsers) {
    let peopleLeft = 0;
    let usersToReturn = []
    if (allUsers.length < 5) {
        usersToReturn = allUsers
        peopleLeft = 0;
    } else {
        for (let i = 0; i < 4; i++) {
            usersToReturn.push(allUsers[i])
            peopleLeft = allUsers.length - 4
        }
    }


    return { usersToReturn, peopleLeft }
}
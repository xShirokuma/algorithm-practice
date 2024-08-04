var countSeniors = function(people) {
    let seniorCount = 0;

    for (let age of people) {
        if (age >= 60) {
            seniorCount++;
        }
    }

    return seniorCount;
};

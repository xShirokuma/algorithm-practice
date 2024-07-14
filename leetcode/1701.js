var averageWaitingTime = function(customers) {
    let currentTime = 0;
    let totalWaitingTime = 0;

    for (let [arrival, timeToComplete] of customers) {
        if (currentTime < arrival) {
            currentTime = arrival;
        }

        currentTime += timeToComplete;

        totalWaitingTime += currentTime - arrival;
    }

    return totalWaitingTime / customers.length;
};

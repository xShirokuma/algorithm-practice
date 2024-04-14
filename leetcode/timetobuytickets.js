function minWaitingTime(minutes, queue) {
    queue.sort((a, b) => a - b);

    let totalTime = 0;
    let waitingTime = 0;

    for (let i = 0; i < minutes.length; i++) {
        waitingTime += minutes[queue[i]];
        totalTime += waitingTime;
    }

    return totalTime;
}

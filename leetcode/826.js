var maxProfitAssignment = function(difficulty, profit, worker) {
    let jobs = [];

    for (let i = 0; i < difficulty.length; i++) {
        jobs.push([difficulty[i], profit[i]]);
    }

    jobs.sort((a, b) => a[0] - b[0]);

    worker.sort((a, b) => a - b);

    let maxProfit = 0;
    let jobIndex = 0;
    let bestProfit = 0;
    let totalProfit = 0;

    for (let i = 0; i < worker.length; i++) {
        let ability = worker[i];

        while (jobIndex < jobs.length && jobs[jobIndex][0] <= ability) {
            bestProfit = Math.max(bestProfit, jobs[jobIndex][1]);
            jobIndex++;
        }

        totalProfit += bestProfit;
    }

    return totalProfit;
};

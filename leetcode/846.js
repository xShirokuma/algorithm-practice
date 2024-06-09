function isNStraightHand(hand, groupSize) {
    if (hand.length % groupSize !== 0) {
        return false;
    }

    const count = new Map();

    for (const card of hand) {
        count.set(card, (count.get(card) || 0) + 1);
    }

    const sortedCards = Array.from(count.keys()).sort((a, b) => a - b);

    for (const card of sortedCards) {
        if (count.get(card) > 0) {
            const needed = count.get(card);
            for (let i = 0; i < groupSize; i++) {
                const currentCard = card + i;
                if (count.get(currentCard) === undefined || count.get(currentCard) < needed) {
                    return false;
                }
                count.set(currentCard, count.get(currentCard) - needed);
            }
        }
    }

    return true;
}

function deckRevealedIncreasing(deck) {
    deck.sort((a, b) => a - b);

    const result = [];
    const deque = [];

    for (let i = 0; i < deck.length; i++) {
        deque.push(i);
    }

    for (let card of deck) {
        result[deque.shift()] = card;
        if (deque.length > 0) {
            deque.push(deque.shift());
        }
    }

    return result;
}

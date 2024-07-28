function sortPeople(names, heights) {
    let people = names.map((name, index) => {
        return { name: name, height: heights[index] };
    });

    people.sort((a, b) => b.height - a.height);

    let sortedNames = people.map(person => person.name);

    return sortedNames;
}

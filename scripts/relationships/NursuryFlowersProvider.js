let nurseryFlowers = []

export const useNurseryFlowers = () => {
    return nurseryFlowers.slice();
}

export const getNurseryFlowers = () => {
    return fetch("http://localhost:2000/nurseryFlowers")
        .then(response => response.json())
        .then(
            (parsedNurseryFlowers) => {
                nurseryFlowers = parsedNurseryFlowers;
            }
        )
}
let nursuries = []

export const useNursuries = () => {
    return nursuries.slice();
}

export const getNursuries = () => {
    return fetch("http://localhost:2000/nursuries")
        .then(response => response.json())
        .then(
            (parsedNursuries) => {
                nursuries = parsedNursuries;
            }
        )
}
let distributorNurseries = []

export const useDistributorNurseries = () => {
    return distributorNurseries.slice();
}

export const getDistributorNurseries = () => {
    return fetch("http://localhost:2000/distributorNurseries")
        .then(response => response.json())
        .then(
            (parsedDistributorNurseries) => {
                distributorNurseries = parsedDistributorNurseries;
            }
        )
}
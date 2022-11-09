export const getHomeContent = () => {
    return new Promise((resolve, reject) => {
        fetch('/content/data.json', {method: 'GET'})
        .then((response) => {
            return response.json() // transform json in object
        })
        .then((result) => {
            resolve(result.data);
        })
        .catch((error) => {
            reject(error.message);
        });
    })
}
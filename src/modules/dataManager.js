const remoteURL = 'https://data.nashville.gov/resource/qywv-8sc2.json';

export default {
    get() {
        return fetch(`${remoteURL}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        })
          .then(response => response.json());
    },
}
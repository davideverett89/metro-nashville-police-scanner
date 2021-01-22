import apiKeys from '../helpers/apiKeys.json';

export default {
    getCalls() {
        return fetch(`${apiKeys.nashvilleDataURL}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        })
          .then(response => response.json());
    },
    getCoordinates(streetAddress) {
        const address = streetAddress.split(" ");
        return fetch(`${apiKeys.googleGeoCodingURL}${address[0]}+${address[1]}+${address[2]},+Nashville,+TN&key=${apiKeys.googleMapsAPIKey}`, {
            method: "GET"
        })
          .then(response => response.json()).then(data => data.results[0].geometry.location);
    }
}
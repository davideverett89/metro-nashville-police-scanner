import apiKeys from '../helpers/apiKeys.json';
import { DateTime } from 'luxon';

export default {
    getCalls() { 
        return new Promise((resolve, reject) => {
            fetch(`${apiKeys.nashvilleDataURL}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            })
            .then(response => response.json())
            .then(data => {
                const result = [];
                data.forEach(x => {
                    x.call_received = DateTime.fromISO(x.call_received).toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);
                    x.last_updated = DateTime.fromISO(x.last_updated).toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);
                    result.push(x);
                })
                resolve(result);
            })
              .catch(err => reject(err));
        })
    },
    getCoordinates(streetAddress) {
        const address = streetAddress.split(" ");
        return fetch(`${apiKeys.googleGeoCodingURL}${address[0]}+${address[1]}+${address[2]},+Nashville,+TN&key=${apiKeys.googleMapsAPIKey}`, {
            method: "GET"
        })
          .then(response => response.json()).then(data => data.results[0].geometry.location);
    }
}
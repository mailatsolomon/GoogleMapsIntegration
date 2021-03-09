import { Client } from '@googlemaps/google-maps-services-js';
import env from "../../utils/env";
env.config();

export default class Maps {
  constructor(lat, lng) {
    this.client = new Client({});
    this.lat = lat;
    this.lng = lng;
  }

  async getNearby(type, radius = 5000) {
    try {
      const nearbyPlaces = await this.client.placesNearby({
        params: {
          location: { lat: this.lat, lng: this.lng },
          radius: radius,
          type: type,
          key: `${process.env.GOOGLE_MAPS_KEY}`
        },
      });

      if (nearbyPlaces.data.status === 'OK') {
        if (nearbyPlaces.data.results) {
          return nearbyPlaces.data.results.map(place => {
            console.log(place);
            return {
              business_status: place.business_status,
              location: place.geometry.location,
              name: place.name,
            }
          })
        }
        return [];
      }
      return { hasError: true, message: nearbyPlaces.data.status };
    } catch (error) {
      return { hasError: true, message: error.message };
    }
  }
}

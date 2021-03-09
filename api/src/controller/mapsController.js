import errorReturnsEntity from '../entities/errorReturnsEntity';
import Maps from '../integration/google';

export default class MapsController {
  async nearby(req, res) {
    const { query } = req;
    if (!query || !query.hasOwnProperty('lat') || !query.hasOwnProperty('lng')) {
      return res.status(400).json(errorReturnsEntity.latLongRequired);
    }

    console.log(query)
    const locationTypes = ['hospital', 'pharmacy'];
    const map = new Maps(query.lat, query.lng);
    let results = {};

    for (let type of locationTypes) {
      const typeResult = await map.getNearby(type);
      console.log(typeResult);
      if (typeResult.hasOwnProperty('hasError')) {
        return res.status(400).json({
          ...errorReturnsEntity.googleMapError,
          message: `${errorReturnsEntity.googleMapError.message}: ${typeResult.message}`,
        });
      } else {
        results[type] = typeResult;
      }
    }

    return res.status(200).json({
      code: 0,
      data: results,
    });
  }
}

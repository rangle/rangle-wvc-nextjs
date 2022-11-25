import { randomPoint } from '@turf/random'
import { coordAll } from '@turf/meta'

import pointsWithinPolygon from '@turf/points-within-polygon'

function getRandomNumber(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min) // The maximum is inclusive and the minimum is inclusive
}

function generateRandomCoordinates(geoJson) {
  const max = getRandomNumber(5, 50)
  if (geoJson?.features[0]?.properties) {
    let randomPoints = randomPoint(max, {
      bbox: geoJson?.features[0].properties.bbox
    })
    let x = pointsWithinPolygon(randomPoints, geoJson)

    return coordAll(pointsWithinPolygon(randomPoints, geoJson))
  } else {
    return []
  }
}

export { generateRandomCoordinates }

let selectedCoords: { latitude: number; longitude: number } | null = null;

export const setMapSelection = (
  coords: { latitude: number; longitude: number } | null,
) => {
  selectedCoords = coords;
};

export const consumeMapSelection = () => {
  const coords = selectedCoords;
  selectedCoords = null;
  return coords;
};

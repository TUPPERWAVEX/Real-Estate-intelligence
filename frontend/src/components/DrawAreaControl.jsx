// ✅ NEW: src/components/DrawAreaControl.jsx
import { useEffect } from "react";
import L from "leaflet";
import "leaflet-draw";

const DrawAreaControl = ({ map, onPolygonDrawn }) => {
  useEffect(() => {
    if (!map) return;

    const drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    const drawControl = new L.Control.Draw({
      draw: {
        polygon: true,
        marker: false,
        polyline: false,
        circle: false,
        rectangle: false,
        circlemarker: false,
      },
      edit: {
        featureGroup: drawnItems,
        edit: false,
        remove: true,
      },
    });

    map.addControl(drawControl);

    map.on(L.Draw.Event.CREATED, (e) => {
      drawnItems.clearLayers();
      drawnItems.addLayer(e.layer);
      const latlngs = e.layer.getLatLngs()[0].map(({ lat, lng }) => [lat, lng]);
      onPolygonDrawn(latlngs);
    });

    map.on(L.Draw.Event.DELETED, () => {
      onPolygonDrawn(null);
    });
  }, [map]);

  return null;
};

export default DrawAreaControl;

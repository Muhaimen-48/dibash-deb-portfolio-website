import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

// Fix for default marker icon in React Leaflet
const iconUrl = 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png';
const iconRetinaUrl = 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png';
const shadowUrl = 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png';

const customIcon = new L.Icon({
    iconUrl,
    iconRetinaUrl,
    shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

interface Location {
  lat: number;
  lng: number;
  title: string;
  description: string;
}

interface ResearchMapProps {
  locations: Location[];
}

export default function ResearchMap({ locations }: ResearchMapProps) {
  // Center map roughly between Europe and Bangladesh
  const position: [number, number] = [30, 45]; 

  return (
    <div className="h-[500px] w-full rounded-xl overflow-hidden shadow-xl border border-border z-0 relative">
      <MapContainer 
        center={position} 
        zoom={3} 
        scrollWheelZoom={false} 
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {locations.map((loc, idx) => (
          <Marker 
            key={idx} 
            position={[loc.lat, loc.lng]} 
            icon={customIcon}
          >
            <Popup>
              <div className="p-1">
                <h3 className="font-bold text-sm text-primary mb-1">{loc.title}</h3>
                <p className="text-xs text-muted-foreground m-0">{loc.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

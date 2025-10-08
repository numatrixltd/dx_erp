"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Map, MapPin, School, Building2, DollarSign, Droplets, Menu, X, Layers, Search, Info } from 'lucide-react';

const BangladeshDigitalMap = () => {
  const [activeLayer, setActiveLayer] = useState('all');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [mapStyle, setMapStyle] = useState('streets');
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  // Sample data for Bangladesh (this would come from APIs in production)
  const divisions = [
    { id: 1, name: 'Dhaka', population: 36054418, lat: 23.8103, lng: 90.4125, schools: 12450, hospitals: 342 },
    { id: 2, name: 'Chittagong', population: 28423019, lat: 22.3569, lng: 91.7832, schools: 9876, hospitals: 287 },
    { id: 3, name: 'Rajshahi', population: 18484858, lat: 24.3745, lng: 88.6042, schools: 7654, hospitals: 198 },
    { id: 4, name: 'Khulna', population: 15563000, lat: 22.8456, lng: 89.5403, schools: 6543, hospitals: 176 },
    { id: 5, name: 'Sylhet', population: 9910219, lat: 24.8949, lng: 91.8687, schools: 4321, hospitals: 134 },
    { id: 6, name: 'Barisal', population: 8325666, lat: 22.7010, lng: 90.3535, schools: 3876, hospitals: 112 },
    { id: 7, name: 'Rangpur', population: 15787758, lat: 25.7439, lng: 89.2752, schools: 5432, hospitals: 156 },
    { id: 8, name: 'Mymensingh', population: 11370000, lat: 24.7471, lng: 90.4203, schools: 4987, hospitals: 143 }
  ];

  const adpProjects = [
    { id: 1, name: 'Padma Bridge Rail Link', budget: 34989, location: 'Dhaka-Munshiganj', status: 'ongoing', sector: 'Transport' },
    { id: 2, name: 'Metro Rail Extension', budget: 52198, location: 'Dhaka', status: 'ongoing', sector: 'Transport' },
    { id: 3, name: 'Rural Electrification', budget: 12500, location: 'Nationwide', status: 'completed', sector: 'Energy' },
    { id: 4, name: 'Flood Protection Embankment', budget: 8900, location: 'Coastal Areas', status: 'ongoing', sector: 'Environment' },
    { id: 5, name: 'Digital Health Network', budget: 6700, location: 'All Divisions', status: 'planning', sector: 'Health' }
  ];

  const environmentalRisks = [
    { type: 'flood', severity: 'high', areas: ['Sylhet', 'Sunamganj', 'Netrokona'], affected: 2500000 },
    { type: 'erosion', severity: 'medium', areas: ['Kurigram', 'Gaibandha', 'Bhola'], affected: 850000 },
    { type: 'cyclone', severity: 'high', areas: ['Cox\'s Bazar', 'Chittagong', 'Khulna'], affected: 1800000 }
  ];

  const layers = [
    { id: 'all', name: 'All Layers', icon: Layers, color: 'blue' },
    { id: 'infrastructure', name: 'Infrastructure', icon: Building2, color: 'purple' },
    { id: 'education', name: 'Schools', icon: School, color: 'green' },
    { id: 'health', name: 'Hospitals', icon: MapPin, color: 'red' },
    { id: 'budget', name: 'ADP Projects', icon: DollarSign, color: 'yellow' },
    { id: 'environment', name: 'Environment', icon: Droplets, color: 'cyan' }
  ];

  useEffect(() => {
    // In a real implementation, you'd initialize Mapbox GL JS here
    // For now, we'll simulate the map with a custom SVG visualization
    console.log('Map initialized');
  }, []);

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  const filteredDivisions = divisions.filter(div =>
    div.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getPopulationDensityColor = (population) => {
    if (population > 30000000) return '#dc2626';
    if (population > 20000000) return '#f97316';
    if (population > 15000000) return '#eab308';
    if (population > 10000000) return '#84cc16';
    return '#22c55e';
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-80' : 'w-0'} transition-all duration-300 bg-gray-800 overflow-hidden flex flex-col`}>
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Map className="w-6 h-6 text-green-500" />
              <h1 className="text-xl font-bold">BD Digital Map</h1>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Layer Controls */}
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-sm font-semibold mb-3 text-gray-400">DATA LAYERS</h2>
          <div className="space-y-2">
            {layers.map(layer => {
              const Icon = layer.icon;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    activeLayer === layer.id
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{layer.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Map Style Selector */}
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-sm font-semibold mb-3 text-gray-400">MAP STYLE</h2>
          <div className="grid grid-cols-2 gap-2">
            {['streets', 'satellite', 'dark'].map(style => (
              <button
                key={style}
                onClick={() => setMapStyle(style)}
                className={`px-3 py-2 text-sm rounded-lg capitalize ${
                  mapStyle === style
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="flex-1 overflow-y-auto p-4">
          <h2 className="text-sm font-semibold mb-3 text-gray-400">DIVISION STATISTICS</h2>
          <div className="space-y-3">
            {filteredDivisions.map(div => (
              <div
                key={div.id}
                onClick={() => handleFeatureClick({ type: 'division', data: div })}
                className="bg-gray-700 rounded-lg p-3 cursor-pointer hover:bg-gray-600 transition-colors"
              >
                <h3 className="font-semibold mb-2">{div.name}</h3>
                <div className="space-y-1 text-xs text-gray-300">
                  <div className="flex justify-between">
                    <span>Population:</span>
                    <span className="font-semibold">{(div.population / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Schools:</span>
                    <span className="font-semibold">{div.schools}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hospitals:</span>
                    <span className="font-semibold">{div.hospitals}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Map Area */}
      <div className="flex-1 relative">
        {/* Top Bar */}
        <div className="absolute top-0 left-0 right-0 bg-gray-800 bg-opacity-95 p-4 z-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {!sidebarOpen && (
              <button onClick={() => setSidebarOpen(true)} className="p-2 hover:bg-gray-700 rounded-lg">
                <Menu className="w-5 h-5" />
              </button>
            )}
            <h2 className="text-lg font-semibold">
              {activeLayer === 'all' ? 'All Layers Active' : `${layers.find(l => l.id === activeLayer)?.name} Layer`}
            </h2>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <div className="bg-green-600 px-3 py-1 rounded-full">Live Data</div>
            <div className="text-gray-400">Last updated: Oct 2025</div>
          </div>
        </div>

        {/* Map Container */}
        <div ref={mapContainerRef} className="w-full h-full bg-gray-900">
          {/* Custom Bangladesh Map Visualization */}
          <svg className="w-full h-full" viewBox="0 0 1000 800">
            {/* Background */}
            <rect width="1000" height="800" fill="#1f2937" />
            
            {/* Bangladesh outline (simplified) */}
            <path
              d="M 400 150 L 450 200 L 500 180 L 550 220 L 580 280 L 600 350 L 590 420 L 560 480 L 520 540 L 480 580 L 440 600 L 400 590 L 360 560 L 330 520 L 300 460 L 280 400 L 270 340 L 290 280 L 320 220 L 360 180 Z"
              fill="#374151"
              stroke="#4b5563"
              strokeWidth="2"
            />

            {/* Division markers with population density */}
            {divisions.map((div, idx) => {
              const x = 300 + (div.lng - 88) * 50;
              const y = 600 - (div.lat - 20) * 50;
              const radius = Math.sqrt(div.population) / 1000;
              
              return (
                <g key={div.id} onClick={() => handleFeatureClick({ type: 'division', data: div })}>
                  {/* Population circle */}
                  <circle
                    cx={x}
                    cy={y}
                    r={radius}
                    fill={getPopulationDensityColor(div.population)}
                    opacity="0.4"
                    className="cursor-pointer hover:opacity-60 transition-opacity"
                  />
                  
                  {/* Marker */}
                  <circle
                    cx={x}
                    cy={y}
                    r="8"
                    fill={getPopulationDensityColor(div.population)}
                    stroke="white"
                    strokeWidth="2"
                    className="cursor-pointer"
                  />
                  
                  {/* Label */}
                  <text
                    x={x}
                    y={y - 20}
                    textAnchor="middle"
                    fill="white"
                    fontSize="14"
                    fontWeight="bold"
                    className="pointer-events-none"
                  >
                    {div.name}
                  </text>
                  
                  {/* Schools indicator */}
                  {(activeLayer === 'all' || activeLayer === 'education') && (
                    <rect
                      x={x + 12}
                      y={y - 6}
                      width="10"
                      height="10"
                      fill="#22c55e"
                      opacity="0.8"
                    />
                  )}
                  
                  {/* Hospitals indicator */}
                  {(activeLayer === 'all' || activeLayer === 'health') && (
                    <circle
                      cx={x + 12}
                      cy={y + 12}
                      r="5"
                      fill="#ef4444"
                      opacity="0.8"
                    />
                  )}
                </g>
              );
            })}

            {/* ADP Projects overlay */}
            {(activeLayer === 'all' || activeLayer === 'budget') && (
              <g>
                <rect x="350" y="350" width="80" height="60" fill="#eab308" opacity="0.3" />
                <text x="390" y="385" textAnchor="middle" fill="#fef08a" fontSize="12">
                  Padma Bridge
                </text>
                
                <rect x="420" y="250" width="60" height="50" fill="#eab308" opacity="0.3" />
                <text x="450" y="280" textAnchor="middle" fill="#fef08a" fontSize="12">
                  Metro Rail
                </text>
              </g>
            )}

            {/* Environmental risk zones */}
            {(activeLayer === 'all' || activeLayer === 'environment') && (
              <g>
                <ellipse cx="500" cy="200" rx="60" ry="40" fill="#06b6d4" opacity="0.2" />
                <text x="500" y="205" textAnchor="middle" fill="#67e8f9" fontSize="11">
                  Flood Risk
                </text>
                
                <ellipse cx="380" cy="480" rx="50" ry="35" fill="#f97316" opacity="0.2" />
                <text x="380" y="485" textAnchor="middle" fill="#fdba74" fontSize="11">
                  Erosion Zone
                </text>
              </g>
            )}

            {/* Legend */}
            <g transform="translate(750, 600)">
              <rect width="220" height="160" fill="#1f2937" opacity="0.9" rx="8" />
              <text x="110" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
                Legend
              </text>
              
              <circle cx="20" cy="50" r="8" fill="#dc2626" />
              <text x="35" y="55" fill="white" fontSize="12">&gt;30M Population</text>
              
              <circle cx="20" cy="75" r="8" fill="#f97316" />
              <text x="35" y="80" fill="white" fontSize="12">20-30M Population</text>
              
              <circle cx="20" cy="100" r="8" fill="#22c55e" />
              <text x="35" y="105" fill="white" fontSize="12">&lt;10M Population</text>
              
              <rect x="16" y="118" width="10" height="10" fill="#22c55e" />
              <text x="35" y="128" fill="white" fontSize="12">Schools</text>
              
              <circle cx="21" cy="148" r="5" fill="#ef4444" />
              <text x="35" y="153" fill="white" fontSize="12">Hospitals</text>
            </g>
          </svg>
        </div>

        {/* Info Panel */}
        {selectedFeature && (
          <div className="absolute right-4 top-20 w-80 bg-gray-800 rounded-lg shadow-xl p-4 max-h-96 overflow-y-auto">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <Info className="w-5 h-5 text-green-500" />
                <h3 className="font-semibold text-lg">
                  {selectedFeature.type === 'division' ? selectedFeature.data.name : 'Details'}
                </h3>
              </div>
              <button onClick={() => setSelectedFeature(null)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {selectedFeature.type === 'division' && (
              <div className="space-y-3">
                <div className="bg-gray-700 rounded p-3">
                  <div className="text-sm text-gray-400 mb-1">Population</div>
                  <div className="text-2xl font-bold text-green-400">
                    {(selectedFeature.data.population / 1000000).toFixed(2)}M
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-700 rounded p-3">
                    <School className="w-5 h-5 text-green-400 mb-2" />
                    <div className="text-sm text-gray-400">Schools</div>
                    <div className="text-xl font-bold">{selectedFeature.data.schools}</div>
                  </div>

                  <div className="bg-gray-700 rounded p-3">
                    <MapPin className="w-5 h-5 text-red-400 mb-2" />
                    <div className="text-sm text-gray-400">Hospitals</div>
                    <div className="text-xl font-bold">{selectedFeature.data.hospitals}</div>
                  </div>
                </div>

                <div className="bg-gray-700 rounded p-3">
                  <div className="text-sm text-gray-400 mb-2">Coordinates</div>
                  <div className="text-sm font-mono">
                    {selectedFeature.data.lat.toFixed(4)}, {selectedFeature.data.lng.toFixed(4)}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ADP Projects Panel */}
        {(activeLayer === 'budget' || activeLayer === 'all') && (
          <div className="absolute left-4 bottom-4 w-96 bg-gray-800 rounded-lg shadow-xl p-4 max-h-80 overflow-y-auto">
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="w-5 h-5 text-yellow-500" />
              <h3 className="font-semibold">Active ADP Projects</h3>
            </div>
            <div className="space-y-2">
              {adpProjects.map(project => (
                <div key={project.id} className="bg-gray-700 rounded p-3">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-sm">{project.name}</h4>
                    <span className={`text-xs px-2 py-1 rounded ${
                      project.status === 'ongoing' ? 'bg-blue-600' :
                      project.status === 'completed' ? 'bg-green-600' : 'bg-gray-600'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="text-xs text-gray-300 space-y-1">
                    <div>Budget: ৳{project.budget} Crore</div>
                    <div>Location: {project.location}</div>
                    <div>Sector: {project.sector}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Environmental Alerts */}
        {(activeLayer === 'environment' || activeLayer === 'all') && (
          <div className="absolute right-4 bottom-4 w-80 bg-red-900 bg-opacity-90 rounded-lg shadow-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <Droplets className="w-5 h-5 text-cyan-400" />
              <h3 className="font-semibold">Environmental Alerts</h3>
            </div>
            <div className="space-y-2">
              {environmentalRisks.map((risk, idx) => (
                <div key={idx} className="bg-gray-800 bg-opacity-50 rounded p-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-semibold capitalize">{risk.type} Risk</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      risk.severity === 'high' ? 'bg-red-600' : 'bg-orange-600'
                    }`}>
                      {risk.severity}
                    </span>
                  </div>
                  <div className="text-xs text-gray-300">
                    <div>Areas: {risk.areas.join(', ')}</div>
                    <div>Affected: {(risk.affected / 1000000).toFixed(1)}M people</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BangladeshDigitalMap;
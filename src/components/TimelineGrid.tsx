
import React from 'react';

interface TimelineGridProps {
  timelineStart: Date;
  timelineEnd: Date;
  width: number;
  height: number;
  zoomLevel: number;
}

export const TimelineGrid: React.FC<TimelineGridProps> = ({
  timelineStart,
  timelineEnd,
  width,
  height,
  zoomLevel
}) => {
  const generateTimeMarkers = () => {
    const markers = [];
    const startTime = new Date(timelineStart);
    const endTime = new Date(timelineEnd);
    
    // Generate 12-hour intervals
    const current = new Date(startTime);
    while (current <= endTime) {
      const position = ((current.getTime() - startTime.getTime()) / (endTime.getTime() - startTime.getTime())) * width;
      
      markers.push({
        position,
        time: new Date(current),
        isDay: current.getHours() === 0
      });
      
      current.setHours(current.getHours() + 12);
    }
    
    return markers;
  };

  const timeMarkers = generateTimeMarkers();

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Vertical grid lines and time labels */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-gray-800 border-b border-gray-700">
        {timeMarkers.map((marker, index) => (
          <div
            key={index}
            className="absolute top-0 bottom-0 border-l border-gray-600"
            style={{ left: marker.position }}
          >
            <div className="absolute top-2 -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap">
              {marker.time.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric' 
              })}
              <br />
              {marker.time.toLocaleTimeString('en-US', { 
                hour: 'numeric',
                hour12: true 
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Vertical grid lines extending down */}
      {timeMarkers.map((marker, index) => (
        <div
          key={index}
          className="absolute border-l border-gray-700"
          style={{
            left: marker.position,
            top: 48,
            height: height - 48,
            borderColor: marker.isDay ? '#4B5563' : '#374151'
          }}
        />
      ))}

      {/* Current time indicator */}
      <div className="absolute top-12 w-0.5 bg-red-500 z-10" style={{ 
        left: '20%', 
        height: height - 48 
      }}>
        <div className="absolute -top-2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full" />
        <div className="absolute -top-6 -translate-x-1/2 text-xs text-red-400 whitespace-nowrap">
          Now
        </div>
      </div>
    </div>
  );
};

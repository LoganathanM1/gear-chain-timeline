
import React from 'react';
import { ZoomIn, ZoomOut, Calendar, Truck } from 'lucide-react';

interface TimelineHeaderProps {
  onZoom: (delta: number) => void;
  zoomLevel: number;
  timelineStart: Date;
  timelineEnd: Date;
}

export const TimelineHeader: React.FC<TimelineHeaderProps> = ({
  onZoom,
  zoomLevel,
  timelineStart,
  timelineEnd
}) => {
  const formatDateRange = () => {
    const startStr = timelineStart.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
    const endStr = timelineEnd.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
    return `${startStr} - ${endStr}`;
  };

  return (
    <div className="bg-gray-800 border-b border-gray-700 p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Truck className="w-6 h-6 text-blue-400" />
          <h1 className="text-xl font-bold text-white">Car Manufacturing Supply Chain</h1>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">{formatDateRange()}</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onZoom(-1)}
          className="p-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
          disabled={zoomLevel <= 0.5}
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <span className="text-sm text-gray-400 min-w-[60px] text-center">
          {Math.round(zoomLevel * 100)}%
        </span>
        <button
          onClick={() => onZoom(1)}
          className="p-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
          disabled={zoomLevel >= 3}
        >
          <ZoomIn className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

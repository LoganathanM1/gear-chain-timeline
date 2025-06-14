
import React from 'react';
import { Thermometer, Package, Clock, CheckCircle } from 'lucide-react';

interface TooltipProps {
  event: any;
  position: { x: number; y: number };
}

export const Tooltip: React.FC<TooltipProps> = ({ event, position }) => {
  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'in transit':
        return <Package className="w-4 h-4 text-blue-400" />;
      default:
        return <Clock className="w-4 h-4 text-yellow-400" />;
    }
  };

  return (
    <div
      className="fixed z-50 bg-gray-800 border border-gray-600 rounded-lg shadow-xl p-4 min-w-[280px] pointer-events-none"
      style={{
        left: Math.min(position.x + 10, window.innerWidth - 300),
        top: position.y - 10,
        transform: position.y > window.innerHeight / 2 ? 'translateY(-100%)' : 'none'
      }}
    >
      <div className="text-white">
        {event.consignment && (
          <div className="flex items-center gap-2 mb-2">
            <span className="font-bold text-blue-400">Consignment ID:</span>
            <span className="font-mono">{event.consignment}</span>
          </div>
        )}
        
        <div className="flex items-center gap-2 mb-2">
          <span className="font-bold">Company:</span>
          <span>{event.company}</span>
        </div>
        
        <div className="flex items-center gap-2 mb-2">
          <span className="font-bold">Category:</span>
          <span className="text-gray-300">{event.category}</span>
        </div>
        
        {event.status && (
          <div className="flex items-center gap-2 mb-2">
            {getStatusIcon(event.status)}
            <span className="font-bold">Status:</span>
            <span className={`px-2 py-1 rounded-full text-xs ${
              event.status === 'Completed' ? 'bg-green-900 text-green-300' :
              event.status === 'In Transit' ? 'bg-blue-900 text-blue-300' :
              'bg-yellow-900 text-yellow-300'
            }`}>
              {event.status}
            </span>
          </div>
        )}
        
        <div className="border-t border-gray-600 mt-3 pt-3">
          {event.type === 'bar' && event.start && event.end ? (
            <div>
              <div className="text-sm text-gray-400 mb-1">Duration:</div>
              <div className="text-sm">
                {formatDateTime(event.start)} – {formatDateTime(event.end)}
              </div>
            </div>
          ) : event.time ? (
            <div>
              <div className="text-sm text-gray-400 mb-1">Time:</div>
              <div className="text-sm">{formatDateTime(event.time)}</div>
            </div>
          ) : null}
        </div>
        
        {event.temperature && (
          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-600">
            <Thermometer className="w-4 h-4 text-orange-400" />
            <span className="font-bold">Mean Temp:</span>
            <span>{event.temperature}°F</span>
          </div>
        )}
      </div>
    </div>
  );
};

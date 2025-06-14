
import React, { useState, useMemo } from 'react';
import { TimelineHeader } from './TimelineHeader';
import { TimelineSidebar } from './TimelineSidebar';
import { TimelineContent } from './TimelineContent';
import { Tooltip } from './Tooltip';
import { supplyChainData } from '@/data/supplyChainData';

export const SupplyChainTimeline = () => {
  const [hoveredEvent, setHoveredEvent] = useState<any>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [zoomLevel, setZoomLevel] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);

  const timelineStart = new Date('2022-12-02T00:00:00');
  const timelineEnd = new Date('2022-12-05T23:59:59');
  const totalHours = (timelineEnd.getTime() - timelineStart.getTime()) / (1000 * 60 * 60);

  const handleMouseEnter = (event: any, clientX: number, clientY: number) => {
    setHoveredEvent(event);
    setMousePosition({ x: clientX, y: clientY });
  };

  const handleMouseLeave = () => {
    setHoveredEvent(null);
  };

  const handleZoom = (delta: number) => {
    setZoomLevel(prev => Math.max(0.5, Math.min(3, prev + delta * 0.1)));
  };

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col">
      <TimelineHeader 
        onZoom={handleZoom}
        zoomLevel={zoomLevel}
        timelineStart={timelineStart}
        timelineEnd={timelineEnd}
      />
      
      <div className="flex flex-1 overflow-hidden">
        <TimelineSidebar data={supplyChainData} />
        
        <div className="flex-1 overflow-auto">
          <TimelineContent
            data={supplyChainData}
            timelineStart={timelineStart}
            timelineEnd={timelineEnd}
            totalHours={totalHours}
            zoomLevel={zoomLevel}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>

      {hoveredEvent && (
        <Tooltip
          event={hoveredEvent}
          position={mousePosition}
        />
      )}
    </div>
  );
};

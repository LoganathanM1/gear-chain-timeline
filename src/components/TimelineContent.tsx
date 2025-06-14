
import React from 'react';
import { TimelineGrid } from './TimelineGrid';
import { TimelineEvents } from './TimelineEvents';
import { DependencyLines } from './DependencyLines';
import { SupplyChainData } from '@/types/supplyChain';

interface TimelineContentProps {
  data: SupplyChainData;
  timelineStart: Date;
  timelineEnd: Date;
  totalHours: number;
  zoomLevel: number;
  onMouseEnter: (event: any, clientX: number, clientY: number) => void;
  onMouseLeave: () => void;
}

export const TimelineContent: React.FC<TimelineContentProps> = ({
  data,
  timelineStart,
  timelineEnd,
  totalHours,
  zoomLevel,
  onMouseEnter,
  onMouseLeave
}) => {
  const rowHeight = 60;
  const contentWidth = Math.max(1200, totalHours * 40 * zoomLevel);
  
  // Calculate total rows needed
  const totalRows = Object.values(data.categories).reduce(
    (acc, category) => acc + category.companies.length,
    0
  );
  const contentHeight = totalRows * rowHeight;

  return (
    <div className="relative bg-gray-900" style={{ minHeight: contentHeight }}>
      <TimelineGrid
        timelineStart={timelineStart}
        timelineEnd={timelineEnd}
        width={contentWidth}
        height={contentHeight}
        zoomLevel={zoomLevel}
      />
      
      <TimelineEvents
        data={data}
        timelineStart={timelineStart}
        width={contentWidth}
        rowHeight={rowHeight}
        zoomLevel={zoomLevel}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      
      <DependencyLines
        data={data}
        timelineStart={timelineStart}
        width={contentWidth}
        rowHeight={rowHeight}
        zoomLevel={zoomLevel}
      />
    </div>
  );
};

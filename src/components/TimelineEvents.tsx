
import React from 'react';
import { SupplyChainData } from '@/types/supplyChain';

interface TimelineEventsProps {
  data: SupplyChainData;
  timelineStart: Date;
  width: number;
  rowHeight: number;
  zoomLevel: number;
  onMouseEnter: (event: any, clientX: number, clientY: number) => void;
  onMouseLeave: () => void;
}

export const TimelineEvents: React.FC<TimelineEventsProps> = ({
  data,
  timelineStart,
  width,
  rowHeight,
  zoomLevel,
  onMouseEnter,
  onMouseLeave
}) => {
  const getTimePosition = (time: Date) => {
    const startTime = new Date('2022-12-02T00:00:00');
    const endTime = new Date('2022-12-05T23:59:59');
    return ((time.getTime() - startTime.getTime()) / (endTime.getTime() - startTime.getTime())) * width;
  };

  let currentRow = 0;

  return (
    <div className="absolute top-12 left-0 right-0">
      {Object.entries(data.categories).map(([categoryId, category]) => (
        <div key={categoryId}>
          {category.companies.map((company) => {
            const rowTop = currentRow * rowHeight;
            currentRow++;

            return (
              <div
                key={company.id}
                className="absolute"
                style={{
                  top: rowTop,
                  height: rowHeight,
                  width: '100%'
                }}
              >
                {/* Render bars */}
                {company.events
                  .filter(event => event.type === 'bar')
                  .map((event, eventIndex) => {
                    const startPos = getTimePosition(new Date(event.start));
                    const endPos = getTimePosition(new Date(event.end));
                    const barWidth = endPos - startPos;

                    return (
                      <div
                        key={eventIndex}
                        className="absolute rounded-md cursor-pointer transition-all hover:brightness-110"
                        style={{
                          left: startPos,
                          width: Math.max(barWidth, 4),
                          top: rowHeight * 0.25,
                          height: rowHeight * 0.5,
                          backgroundColor: company.color,
                          opacity: 0.8
                        }}
                        onMouseEnter={(e) => onMouseEnter({
                          ...event,
                          company: company.name,
                          category: category.name
                        }, e.clientX, e.clientY)}
                        onMouseLeave={onMouseLeave}
                      />
                    );
                  })}

                {/* Render dots */}
                {company.events
                  .filter(event => event.type === 'dot')
                  .map((event, eventIndex) => {
                    const position = getTimePosition(new Date(event.time));

                    return (
                      <div
                        key={eventIndex}
                        className="absolute rounded-full cursor-pointer transition-all hover:scale-125"
                        style={{
                          left: position - 6,
                          top: rowHeight * 0.4,
                          width: 12,
                          height: 12,
                          backgroundColor: company.color,
                          border: '2px solid white'
                        }}
                        onMouseEnter={(e) => onMouseEnter({
                          ...event,
                          company: company.name,
                          category: category.name
                        }, e.clientX, e.clientY)}
                        onMouseLeave={onMouseLeave}
                      />
                    );
                  })}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

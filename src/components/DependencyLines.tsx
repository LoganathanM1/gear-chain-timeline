
import React from 'react';
import { SupplyChainData } from '@/types/supplyChain';

interface DependencyLinesProps {
  data: SupplyChainData;
  timelineStart: Date;
  width: number;
  rowHeight: number;
  zoomLevel: number;
}

export const DependencyLines: React.FC<DependencyLinesProps> = ({
  data,
  timelineStart,
  width,
  rowHeight,
  zoomLevel
}) => {
  const getTimePosition = (time: Date) => {
    const startTime = new Date('2022-12-02T00:00:00');
    const endTime = new Date('2022-12-05T23:59:59');
    return ((time.getTime() - startTime.getTime()) / (endTime.getTime() - startTime.getTime())) * width;
  };

  const getCompanyRowIndex = (companyId: string) => {
    let currentRow = 0;
    for (const [categoryId, category] of Object.entries(data.categories)) {
      for (const company of category.companies) {
        if (company.id === companyId) {
          return currentRow;
        }
        currentRow++;
      }
    }
    return -1;
  };

  const dependencies = [];
  let currentRow = 0;

  Object.entries(data.categories).forEach(([categoryId, category]) => {
    category.companies.forEach((company) => {
      if (company.dependencies) {
        company.dependencies.forEach((dep) => {
          const sourceRow = currentRow;
          const targetRow = getCompanyRowIndex(dep.targetCompany);
          
          if (targetRow !== -1) {
            const position = getTimePosition(new Date(dep.time));
            dependencies.push({
              sourceRow,
              targetRow,
              position,
              type: dep.type || 'default'
            });
          }
        });
      }
      currentRow++;
    });
  });

  return (
    <svg
      className="absolute top-12 left-0 pointer-events-none"
      width={width}
      height={currentRow * rowHeight}
      style={{ zIndex: 5 }}
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon
            points="0 0, 10 3.5, 0 7"
            fill="#60A5FA"
          />
        </marker>
      </defs>
      
      {dependencies.map((dep, index) => {
        const sourceY = dep.sourceRow * rowHeight + rowHeight / 2;
        const targetY = dep.targetRow * rowHeight + rowHeight / 2;
        const x = dep.position;
        
        // Create curved path
        const midY = (sourceY + targetY) / 2;
        const controlOffset = Math.abs(targetY - sourceY) * 0.3;
        
        return (
          <path
            key={index}
            d={`M ${x} ${sourceY} 
                Q ${x + controlOffset} ${midY} 
                ${x} ${targetY}`}
            stroke="#60A5FA"
            strokeWidth="2"
            fill="none"
            markerEnd="url(#arrowhead)"
            opacity="0.7"
          />
        );
      })}
    </svg>
  );
};

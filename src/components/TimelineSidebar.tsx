
import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { SupplyChainData } from '@/types/supplyChain';

interface TimelineSidebarProps {
  data: SupplyChainData;
}

export const TimelineSidebar: React.FC<TimelineSidebarProps> = ({ data }) => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(Object.keys(data.categories))
  );

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  return (
    <div className="w-80 bg-gray-800 border-r border-gray-700 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white mb-4">Supply Chain Stages</h2>
        
        {Object.entries(data.categories).map(([categoryId, category]) => (
          <div key={categoryId} className="mb-2">
            <button
              onClick={() => toggleCategory(categoryId)}
              className="w-full flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md transition-colors text-left"
            >
              {expandedCategories.has(categoryId) ? (
                <ChevronDown className="w-4 h-4 text-gray-400" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400" />
              )}
              <span className="font-medium text-white">{category.name}</span>
              <span className="ml-auto text-xs text-gray-400">
                {category.companies.length}
              </span>
            </button>
            
            {expandedCategories.has(categoryId) && (
              <div className="ml-6 mt-2 space-y-1">
                {category.companies.map((company) => (
                  <div
                    key={company.id}
                    className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md transition-colors"
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: company.color }}
                    />
                    <span className="text-gray-300 text-sm">{company.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


import React from 'react';

interface HorizontalRuleRendererProps {
  index: number;
}

const HorizontalRuleRenderer: React.FC<HorizontalRuleRendererProps> = ({ index }) => {
  return <hr key={index} className="my-6 border-t-2 border-blue-100 dark:border-slate-700" />;
};

export default HorizontalRuleRenderer;

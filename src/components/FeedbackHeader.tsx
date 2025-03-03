
import React from 'react';
import { cn } from '@/lib/utils';

interface FeedbackHeaderProps {
  className?: string;
}

const FeedbackHeader: React.FC<FeedbackHeaderProps> = ({ className }) => {
  return (
    <div className={cn('space-y-2 animate-fade-in', className)}>
      <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
        User Testing Results
      </div>
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
        Feedback Analysis
      </h1>
      <p className="text-muted-foreground max-w-3xl">
        Insights gathered from 10 participants who tested our product recommendation quiz. 
        The data highlights strengths and areas for improvement.
      </p>
    </div>
  );
};

export default FeedbackHeader;

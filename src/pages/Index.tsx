
import React from 'react';
import FeedbackHeader from '@/components/FeedbackHeader';
import FeedbackOverview from '@/components/FeedbackOverview';
import FeedbackChart from '@/components/FeedbackChart';
import UserComments from '@/components/UserComments';
import { feedbackData } from '@/utils/feedbackData';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <div className="container px-4 py-12 md:py-16 mx-auto max-w-7xl">
        <FeedbackHeader className="mb-10" />
        
        <div className="space-y-8">
          <FeedbackOverview />
          
          <div className="grid gap-8 md:grid-cols-2">
            <FeedbackChart />
            <UserComments comments={feedbackData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;


import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedNumber from './AnimatedNumber';
import { getOverallSatisfactionScore, getCategoryScores } from '@/utils/feedbackData';
import { useAnimatedWidth } from '@/utils/animations';
import { Smile, BarChart3, Users } from 'lucide-react';

const FeedbackOverview: React.FC = () => {
  const overallScore = getOverallSatisfactionScore();
  const categoryScores = getCategoryScores();
  
  return (
    <div className="grid gap-6 md:grid-cols-3 animate-fade-in" style={{ animationDelay: '100ms' }}>
      {/* Overall Satisfaction */}
      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10">
              <Smile className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-medium">Overall Satisfaction</h3>
          </div>
          
          <div className="mt-4 flex items-baseline">
            <div className="text-4xl font-bold tracking-tight">
              <AnimatedNumber 
                value={overallScore} 
                decimals={1}
                duration={2000}
              />
            </div>
            <span className="text-muted-foreground text-lg ml-2">/5</span>
          </div>
          
          <div className="mt-2 text-muted-foreground text-sm">
            Average rating across all users
          </div>
        </CardContent>
      </Card>
      
      {/* Category Performance */}
      <Card className="overflow-hidden md:col-span-2">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10">
              <BarChart3 className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-medium">Category Performance</h3>
          </div>
          
          <div className="mt-6 space-y-5">
            {categoryScores.map((category, index) => {
              const barWidth = useAnimatedWidth(category.score * 20, 300 + (index * 100));
              const colorVariants = [
                'bg-blue-500',
                'bg-violet-500',
                'bg-emerald-500'
              ];
              
              return (
                <div key={category.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="font-medium text-sm">{category.name}</div>
                    <div className="text-sm font-medium">
                      <AnimatedNumber 
                        value={category.score} 
                        decimals={1}
                        duration={1500 + (index * 150)}
                      />
                      <span className="text-muted-foreground">/5</span>
                    </div>
                  </div>
                  <div className="feedback-bar">
                    <div 
                      className={`feedback-bar-fill ${colorVariants[index % colorVariants.length]}`}
                      style={{ width: barWidth }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeedbackOverview;

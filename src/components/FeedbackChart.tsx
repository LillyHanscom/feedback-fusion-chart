
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart, ResponsiveContainer, XAxis, YAxis, Bar, Cell, Tooltip, Legend } from 'recharts';
import { getRatingDistribution } from '@/utils/feedbackData';
import { BarChart3 } from 'lucide-react';

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-popover border border-border rounded-lg shadow-sm p-3 text-sm">
        <p className="font-medium">{`${payload[0].value} users`}</p>
        <p className="text-muted-foreground">{`gave a ${payload[0].payload.rating} star rating`}</p>
      </div>
    );
  }

  return null;
};

const FeedbackChart: React.FC = () => {
  const ratingDistribution = getRatingDistribution();
  
  return (
    <Card className="animate-fade-in" style={{ animationDelay: '200ms' }}>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10">
            <BarChart3 className="h-5 w-5 text-primary" />
          </div>
          <h3 className="font-medium">Rating Distribution</h3>
        </div>
        
        <div className="h-72 mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={ratingDistribution}
              margin={{ top: 0, right: 0, left: 0, bottom: 20 }}
            >
              <XAxis 
                dataKey="rating" 
                tickLine={false}
                axisLine={{ stroke: '#e2e8f0' }}
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `${value} stars`}
                dy={10}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }} />
              <Bar 
                dataKey="count" 
                radius={[4, 4, 0, 0]} 
                barSize={45} 
                animationDuration={1500}
              >
                {ratingDistribution.map((entry, index) => {
                  const colors = ['#f87171', '#fb923c', '#facc15', '#4ade80', '#3b82f6'];
                  return <Cell key={`cell-${index}`} fill={colors[entry.rating - 1]} />;
                })}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeedbackChart;

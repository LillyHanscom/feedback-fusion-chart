
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { FeedbackItem } from '@/utils/feedbackData';
import { MessageSquare } from 'lucide-react';

interface UserCommentsProps {
  comments: FeedbackItem[];
}

const UserComments: React.FC<UserCommentsProps> = ({ comments }) => {
  // Limit to 5 comments max
  const limitedComments = comments.slice(0, 5);
  
  return (
    <Card className="animate-fade-in-delayed h-full">
      <CardContent className="p-6 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10">
            <MessageSquare className="h-5 w-5 text-primary" />
          </div>
          <h3 className="font-medium">User Comments</h3>
        </div>
        
        <div className="space-y-5 flex-1">
          {limitedComments.map((item, index) => (
            <div 
              key={item.id}
              className="flex gap-4 animate-scale-in"
              style={{ animationDelay: `${100 * index}ms` }}
            >
              <Avatar className="h-9 w-9">
                <AvatarFallback className="bg-primary/10 text-primary text-xs">
                  {item.user.avatar}
                </AvatarFallback>
              </Avatar>
              
              <div className="space-y-1 flex-1">
                <div className="flex justify-between">
                  <div className="font-medium text-sm">{item.user.name}</div>
                  <div className="flex items-center">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`h-3.5 w-3.5 ${
                            i < item.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300 fill-gray-300'
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-xs font-medium mr-2">
                    {item.category}
                  </span>
                  {item.comment}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserComments;

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, TrendingUp, Edit, Eye } from "lucide-react";

interface TestCardProps {
  title: string;
  subject: string;
  status: "active" | "completed" | "upcoming";
  duration: string;
  questions: number;
  attempts: number;
  maxAttempts: number;
  score?: number;
  deadline?: string;
  progress?: number;
}

const TestCard = ({
  title,
  subject,
  status,
  duration,
  questions,
  attempts,
  maxAttempts,
  score,
  deadline,
  progress = 0
}: TestCardProps) => {
  const getStatusBadge = () => {
    switch (status) {
      case "active":
        return <Badge className="status-active">Active</Badge>;
      case "completed":
        return <Badge className="status-completed">Completed</Badge>;
      case "upcoming":
        return <Badge className="status-upcoming">Upcoming</Badge>;
    }
  };

  const getActionButtons = () => {
    switch (status) {
      case "active":
        return (
          <div className="flex gap-2">
            <Button className="flex-1">
              <BookOpen className="h-4 w-4 mr-2" />
              Start Test
            </Button>
            <Button variant="outline" size="icon">
              <Edit className="h-4 w-4" />
            </Button>
          </div>
        );
      case "completed":
        return (
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1">
              <Eye className="h-4 w-4 mr-2" />
              View Analysis
            </Button>
            <Button variant="outline">
              <TrendingUp className="h-4 w-4 mr-2" />
              Retake
            </Button>
          </div>
        );
      case "upcoming":
        return (
          <Button variant="outline" className="w-full" disabled>
            <Clock className="h-4 w-4 mr-2" />
            Available on {deadline}
          </Button>
        );
    }
  };

  return (
    <Card className={`card-hover border-l-4 ${
      status === "active" ? "border-l-primary" :
      status === "completed" ? "border-l-success" :
      status === "upcoming" ? "border-l-warning" : "border-l-muted"
    }`}>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-semibold mb-1">{title}</CardTitle>
            <p className="text-sm text-muted-foreground">{subject}</p>
          </div>
          {getStatusBadge()}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Test Info */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center text-muted-foreground bg-muted/50 rounded-lg p-3">
            <Clock className="h-4 w-4 mr-2" />
            <span className="font-medium">{duration}</span>
          </div>
          <div className="flex items-center text-muted-foreground bg-muted/50 rounded-lg p-3">
            <BookOpen className="h-4 w-4 mr-2" />
            <span className="font-medium">{questions} Questions</span>
          </div>
        </div>
        
        {/* Attempts */}
        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
          <span className="text-sm text-muted-foreground">Attempts:</span>
          <span className="font-semibold">{attempts}/{maxAttempts}</span>
        </div>
        
        {/* Progress Bar for Active Tests */}
        {status === "active" && progress > 0 && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <div className="progress-bar h-2">
              <div 
                className="progress-fill" 
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
        
        {/* Score for Completed Tests */}
        {status === "completed" && score !== undefined && (
          <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg border border-success/20">
            <span className="text-sm font-medium">Your Score:</span>
            <span className="text-lg font-bold text-success">{score}%</span>
          </div>
        )}
        
        {/* Deadline for Upcoming Tests */}
        {status === "upcoming" && deadline && (
          <div className="flex items-center justify-between p-3 bg-warning/10 rounded-lg border border-warning/20">
            <span className="text-sm font-medium">Available on:</span>
            <span className="text-sm font-semibold text-warning-foreground">{deadline}</span>
          </div>
        )}
      </CardContent>
      
      <CardFooter>
        {getActionButtons()}
      </CardFooter>
    </Card>
  );
};

export default TestCard;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Target, Award, Clock } from "lucide-react";

const AnalyticsSection = () => {
  const stats = [
    {
      title: "Overall Score",
      value: "78.5%",
      change: "+5.2%",
      icon: Target,
      trend: "up"
    },
    {
      title: "Tests Completed",
      value: "142",
      change: "+12",
      icon: Award,
      trend: "up"
    },
    {
      title: "Study Streak",
      value: "15 days",
      change: "+3 days",
      icon: Clock,
      trend: "up"
    },
    {
      title: "Rank Position",
      value: "#342",
      change: "↑15",
      icon: TrendingUp,
      trend: "up"
    }
  ];

  const subjectProgress = [
    { subject: "Mathematics", score: 85, progress: 85 },
    { subject: "English", score: 78, progress: 78 },
    { subject: "Reasoning", score: 92, progress: 92 },
    { subject: "General Knowledge", score: 65, progress: 65 },
    { subject: "Current Affairs", score: 73, progress: 73 }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Your Performance Analytics</h2>
          <p className="text-muted-foreground text-lg">Track your progress and identify areas for improvement</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="card-hover">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-success flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subject-wise Progress */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-xl">Subject-wise Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {subjectProgress.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{item.subject}</span>
                    <span className="text-sm font-semibold">{item.score}%</span>
                  </div>
                  <div className="progress-bar h-3">
                    <div 
                      className="progress-fill rounded-full" 
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AnalyticsSection;
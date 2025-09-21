import Navbar from "@/components/Navbar";
import StatsCards from "@/components/StatsCards";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Trophy, BookOpen, TrendingUp, Bell, Target, Users } from "lucide-react";

const Dashboard = () => {
  const upcomingTests = [
    { name: "SSC CGL Mock Test", date: "Dec 25", time: "10:00 AM", type: "Full Length" },
    { name: "Banking Reasoning", date: "Dec 27", time: "2:00 PM", type: "Sectional" },
    { name: "Railway GK Test", date: "Dec 30", time: "11:00 AM", type: "Subject Test" }
  ];

  const recentActivity = [
    { action: "Completed SSC English Test", score: "87%", time: "2 hours ago" },
    { action: "Started Math Practice", score: "In Progress", time: "5 hours ago" },
    { action: "Viewed Analysis Report", score: "", time: "1 day ago" },
    { action: "Updated Study Plan", score: "", time: "2 days ago" }
  ];

  const achievements = [
    { title: "First Century!", description: "Scored 100% in a test", icon: Trophy, color: "text-gold" },
    { title: "Study Streak", description: "15 days continuous practice", icon: Target, color: "text-electric" },
    { title: "Speed Master", description: "Completed test in record time", icon: Clock, color: "text-primary" },
    { title: "Subject Expert", description: "Mastered Quantitative Aptitude", icon: BookOpen, color: "text-success" }
  ];

  const studyPlan = [
    { subject: "Mathematics", planned: 2, completed: 2, progress: 100 },
    { subject: "English", planned: 3, completed: 2, progress: 67 },
    { subject: "Reasoning", planned: 2, completed: 1, progress: 50 },
    { subject: "GK", planned: 1, completed: 0, progress: 0 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-hero py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
              Welcome Back, Champion!
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Your personalized dashboard to track progress and achieve your examination goals.
            </p>
            <div className="inline-flex items-center gap-2 bg-electric/20 text-white px-6 py-3 rounded-full font-medium">
              <Trophy className="h-5 w-5" />
              You're in the top 15% of performers this month!
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <StatsCards />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Upcoming Tests */}
            <Card className="card-hover lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Upcoming Tests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingTests.map((test, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border-l-4 border-l-warning">
                      <div>
                        <h4 className="font-semibold">{test.name}</h4>
                        <p className="text-sm text-muted-foreground">{test.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{test.date}</p>
                        <p className="text-sm text-muted-foreground">{test.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-gradient-primary text-white">
                  <BookOpen className="h-4 w-4 mr-2" />
                  View All Tests
                </Button>
              </CardContent>
            </Card>

            {/* Today's Study Plan */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Today's Study Plan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studyPlan.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{item.subject}</span>
                        <span className="text-sm text-muted-foreground">{item.completed}/{item.planned}</span>
                      </div>
                      <div className="progress-bar h-2">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-electric/10 rounded-lg">
                  <p className="text-sm text-electric font-medium">🎯 Stay consistent! Daily practice leads to extraordinary results!</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Activity */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">{activity.time}</p>
                      </div>
                      {activity.score && (
                        <span className="text-sm font-semibold text-success">{activity.score}</span>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
                      <div>
                        <h4 className="font-semibold">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Motivational Section */}
          <Card className="card-hover bg-gradient-motivation text-white border-0">
            <CardContent className="text-center py-8">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-white" />
              <h3 className="text-2xl font-bold mb-4">Your Progress is Outstanding!</h3>
              <p className="text-white/90 mb-6 text-lg">
                You've completed 23 tests this month with an average score of 78.5%. 
                Keep up the excellent work and you'll be exam-ready in no time!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Continue Learning
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white/20">
                  <Users className="h-4 w-4 mr-2" />
                  Join Study Group
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
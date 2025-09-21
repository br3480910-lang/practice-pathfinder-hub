import Navbar from "@/components/Navbar";
import AnalyticsSection from "@/components/AnalyticsSection";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Award, Target, Clock, BookOpen, BarChart3, PieChart, LineChart } from "lucide-react";

const Analysis = () => {
  const recentTests = [
    { name: "SSC CGL Quantitative", score: 87, date: "Dec 20", change: "+12%" },
    { name: "Banking English", score: 78, date: "Dec 18", change: "+8%" },
    { name: "Railway GK", score: 92, date: "Dec 15", change: "+15%" },
    { name: "Current Affairs", score: 65, date: "Dec 12", change: "-3%" }
  ];

  const weeklyProgress = [
    { day: "Mon", tests: 2, score: 75 },
    { day: "Tue", tests: 3, score: 82 },
    { day: "Wed", tests: 1, score: 78 },
    { day: "Thu", tests: 4, score: 85 },
    { day: "Fri", tests: 2, score: 88 },
    { day: "Sat", tests: 3, score: 90 },
    { day: "Sun", tests: 1, score: 85 }
  ];

  const strengths = [
    { topic: "Quantitative Aptitude", accuracy: 92, improvement: "+15%" },
    { topic: "Logical Reasoning", accuracy: 88, improvement: "+8%" },
    { topic: "English Grammar", accuracy: 85, improvement: "+12%" }
  ];

  const improvements = [
    { topic: "Current Affairs", accuracy: 65, suggestion: "Focus on recent events and monthly magazines" },
    { topic: "Data Interpretation", accuracy: 72, suggestion: "Practice more chart and graph problems" },
    { topic: "Essay Writing", accuracy: 68, suggestion: "Improve structure and coherence" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-hero py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
            Performance Analysis
          </h1>
          <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
            Deep insights into your learning journey. Track progress, identify strengths, and discover areas for improvement.
          </p>
          <div className="inline-flex items-center gap-2 bg-electric/20 text-white px-6 py-3 rounded-full font-medium">
            <BarChart3 className="h-5 w-5" />
            Data-driven learning accelerates success by 300%!
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <AnalyticsSection />

      {/* Detailed Analysis */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">Detailed Performance Report</h2>
            <p className="text-muted-foreground">Comprehensive analysis of your test performance and learning patterns</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Test Performance */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LineChart className="h-5 w-5 text-primary" />
                  Recent Test Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTests.map((test, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium">{test.name}</p>
                        <p className="text-sm text-muted-foreground">{test.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold">{test.score}%</p>
                        <p className={`text-sm ${test.change.startsWith('+') ? 'text-success' : 'text-error'}`}>
                          {test.change}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Weekly Progress */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Weekly Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {weeklyProgress.map((day, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="font-medium">{day.day}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">{day.tests} tests</span>
                        <div className="w-20 bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-primary h-2 rounded-full" 
                            style={{ width: `${day.score}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">{day.score}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Strengths */}
            <Card className="card-hover border-l-4 border-l-success">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-success">
                  <Award className="h-5 w-5" />
                  Your Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {strengths.map((strength, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{strength.topic}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-success text-sm">{strength.improvement}</span>
                          <span className="font-bold">{strength.accuracy}%</span>
                        </div>
                      </div>
                      <div className="progress-bar h-2">
                        <div 
                          className="bg-success h-2 rounded-full" 
                          style={{ width: `${strength.accuracy}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Areas for Improvement */}
            <Card className="card-hover border-l-4 border-l-warning">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-warning">
                  <Target className="h-5 w-5" />
                  Areas for Improvement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {improvements.map((area, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{area.topic}</span>
                        <span className="font-bold">{area.accuracy}%</span>
                      </div>
                      <div className="progress-bar h-2">
                        <div 
                          className="bg-warning h-2 rounded-full" 
                          style={{ width: `${area.accuracy}%` }}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">{area.suggestion}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-gradient-motivation bg-clip-text text-transparent font-semibold text-lg mb-4">
              💡 Knowledge is power, but practice makes it perfect!
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-gradient-primary text-white">
                <BookOpen className="h-4 w-4 mr-2" />
                Practice Weak Areas
              </Button>
              <Button variant="outline">
                <PieChart className="h-4 w-4 mr-2" />
                Download Report
              </Button>
              <Button variant="outline">
                <TrendingUp className="h-4 w-4 mr-2" />
                Set Goals
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Analysis;
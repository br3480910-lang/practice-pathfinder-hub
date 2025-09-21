import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Trophy, 
  Target, 
  BookOpen, 
  Settings, 
  Bell,
  Shield,
  Download,
  Edit2,
  Star
} from "lucide-react";

const Profile = () => {
  const userStats = [
    { label: "Tests Completed", value: "142", icon: BookOpen },
    { label: "Average Score", value: "78.5%", icon: Target },
    { label: "Study Streak", value: "15 days", icon: Calendar },
    { label: "Rank Position", value: "#342", icon: Trophy }
  ];

  const examPreferences = [
    { exam: "SSC CGL", level: "Advanced", priority: "High" },
    { exam: "Banking PO", level: "Intermediate", priority: "Medium" },
    { exam: "Railway NTPC", level: "Beginner", priority: "Low" }
  ];

  const achievements = [
    { title: "Perfect Score", description: "Scored 100% in Mathematics", date: "Dec 2024" },
    { title: "Speed Demon", description: "Fastest completion time", date: "Nov 2024" },
    { title: "Consistent Learner", description: "30-day study streak", date: "Nov 2024" },
    { title: "Subject Master", description: "Expert in Reasoning", date: "Oct 2024" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-hero py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
            Your Profile
          </h1>
          <p className="text-xl text-white/90 mb-6">
            Manage your account, track achievements, and customize your learning experience.
          </p>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Profile Header */}
          <Card className="card-hover">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg" alt="Profile" />
                  <AvatarFallback className="text-2xl bg-gradient-primary text-white">AS</AvatarFallback>
                </Avatar>
                <div className="text-center md:text-left flex-1">
                  <h2 className="text-3xl font-bold mb-2">Arjun Sharma</h2>
                  <p className="text-muted-foreground mb-4">Aspiring Civil Servant | SSC & Banking Specialist</p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <Badge className="bg-electric text-white">Premium Member</Badge>
                    <Badge variant="outline">Top 15% Performer</Badge>
                    <Badge variant="outline">Study Streak Champion</Badge>
                  </div>
                </div>
                <Button className="bg-gradient-primary text-white">
                  <Edit2 className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userStats.map((stat, index) => (
              <Card key={index} className="card-hover border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                    </div>
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Personal Information */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" value="Arjun" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" value="Sharma" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <Input id="email" value="arjun.sharma@example.com" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <Input id="phone" value="+91 9876543210" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <Input id="location" value="New Delhi, India" />
                  </div>
                </div>
                <Button className="w-full">Save Changes</Button>
              </CardContent>
            </Card>

            {/* Exam Preferences */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Exam Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {examPreferences.map((exam, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <h4 className="font-semibold">{exam.exam}</h4>
                      <p className="text-sm text-muted-foreground">Level: {exam.level}</p>
                    </div>
                    <Badge variant={exam.priority === 'High' ? 'default' : 'outline'}>
                      {exam.priority}
                    </Badge>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  <Settings className="h-4 w-4 mr-2" />
                  Manage Preferences
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Achievements */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                Achievements & Badges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <div className="h-12 w-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      <p className="text-xs text-muted-foreground">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Account Settings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Test Reminders</p>
                    <p className="text-sm text-muted-foreground">Get notified about upcoming tests</p>
                  </div>
                  <input type="checkbox" className="toggle" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Performance Updates</p>
                    <p className="text-sm text-muted-foreground">Weekly progress reports</p>
                  </div>
                  <input type="checkbox" className="toggle" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">New Content</p>
                    <p className="text-sm text-muted-foreground">New tests and study materials</p>
                  </div>
                  <input type="checkbox" className="toggle" />
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Privacy & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  Change Password
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Two-Factor Authentication
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Download My Data
                </Button>
                <Button variant="destructive" className="w-full">
                  Delete Account
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Motivational Section */}
          <Card className="card-hover bg-gradient-motivation text-white border-0">
            <CardContent className="text-center py-8">
              <Trophy className="h-12 w-12 mx-auto mb-4 text-white" />
              <h3 className="text-2xl font-bold mb-4">Keep Pushing Forward!</h3>
              <p className="text-white/90 text-lg mb-6">
                "Success is not final, failure is not fatal: it is the courage to continue that counts." - Winston Churchill
              </p>
              <p className="text-white/80">
                You're on an amazing journey. Every practice session, every test, every moment of preparation is building your success story!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Profile;
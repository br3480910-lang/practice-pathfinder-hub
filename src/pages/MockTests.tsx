import Navbar from "@/components/Navbar";
import TestFilters from "@/components/TestFilters";
import TestCard from "@/components/TestCard";
import StatsCards from "@/components/StatsCards";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, BookOpen, Clock, Target } from "lucide-react";

const MockTests = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const allTests = [
    {
      id: 1,
      title: "SSC CGL Quantitative Aptitude - Advanced",
      subject: "Mathematics",
      status: "active" as const,
      duration: "60 mins",
      questions: 25,
      attempts: 1,
      maxAttempts: 3,
      progress: 45,
      deadline: "Dec 25, 2024"
    },
    {
      id: 2,
      title: "Banking English Language - Comprehensive",
      subject: "English",
      status: "completed" as const,
      duration: "45 mins",
      questions: 30,
      attempts: 2,
      maxAttempts: 3,
      score: 87,
      deadline: "Dec 20, 2024"
    },
    {
      id: 3,
      title: "Railway General Knowledge - Latest Pattern",
      subject: "General Knowledge",
      status: "upcoming" as const,
      duration: "90 mins",
      questions: 50,
      attempts: 0,
      maxAttempts: 2,
      deadline: "Dec 30, 2024"
    },
    {
      id: 4,
      title: "State PSC Current Affairs - Monthly Update",
      subject: "Current Affairs",
      status: "active" as const,
      duration: "30 mins",
      questions: 20,
      attempts: 0,
      maxAttempts: 5,
      progress: 0,
      deadline: "Dec 28, 2024"
    },
    {
      id: 5,
      title: "SSC CHSL Reasoning - Logic & Analytical",
      subject: "Reasoning",
      status: "completed" as const,
      duration: "75 mins",
      questions: 40,
      attempts: 3,
      maxAttempts: 3,
      score: 72,
      deadline: "Dec 18, 2024"
    },
    {
      id: 6,
      title: "Banking Computer Knowledge - Latest Trends",
      subject: "Computer Science",
      status: "active" as const,
      duration: "45 mins",
      questions: 35,
      attempts: 1,
      maxAttempts: 2,
      progress: 20,
      deadline: "Dec 26, 2024"
    },
    {
      id: 7,
      title: "UPSC Prelims General Studies Paper I",
      subject: "General Studies",
      status: "upcoming" as const,
      duration: "120 mins",
      questions: 100,
      attempts: 0,
      maxAttempts: 1,
      deadline: "Jan 5, 2025"
    },
    {
      id: 8,
      title: "SSC CGL Tier-2 Statistics",
      subject: "Mathematics",
      status: "active" as const,
      duration: "90 mins",
      questions: 60,
      attempts: 0,
      maxAttempts: 2,
      progress: 0,
      deadline: "Jan 2, 2025"
    }
  ];

  const filteredTests = allTests.filter(test => {
    const matchesFilter = activeFilter === "all" || test.status === activeFilter;
    const matchesSearch = test.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         test.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-hero py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
            Mock Test Library
          </h1>
          <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
            Access thousands of practice tests designed by experts. Choose from SSC, Banking, Railways, UPSC, and State exam categories.
          </p>
          <div className="inline-flex items-center gap-2 bg-electric/20 text-white px-6 py-3 rounded-full font-medium">
            <Target className="h-5 w-5" />
            Practice with purpose - Every question is a step closer to success!
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <StatsCards />
          
          <TestFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTests.map((test) => (
              <TestCard
                key={test.id}
                title={test.title}
                subject={test.subject}
                status={test.status}
                duration={test.duration}
                questions={test.questions}
                attempts={test.attempts}
                maxAttempts={test.maxAttempts}
                score={test.score}
                deadline={test.deadline}
                progress={test.progress}
              />
            ))}
          </div>

          {filteredTests.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground text-lg mb-4">No tests found matching your criteria.</p>
              <Button className="bg-gradient-primary text-white">
                <Plus className="h-4 w-4 mr-2" />
                Browse All Tests
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MockTests;
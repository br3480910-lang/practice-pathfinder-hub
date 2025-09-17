import { useState } from "react";
import TestCard from "./TestCard";
import TestFilters from "./TestFilters";
import StatsCards from "./StatsCards";

const TestGrid = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for tests
  const tests = [
    {
      id: 1,
      title: "SSC CGL Quantitative Aptitude",
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
      title: "Banking English Language",
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
      title: "Railway General Knowledge",
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
      title: "State PSC Current Affairs",
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
      title: "SSC CHSL Reasoning",
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
      title: "Banking Computer Knowledge",
      subject: "Computer Science",
      status: "active" as const,
      duration: "45 mins",
      questions: 35,
      attempts: 1,
      maxAttempts: 2,
      progress: 20,
      deadline: "Dec 26, 2024"
    }
  ];

  const subjects = ["all", "Mathematics", "English", "General Knowledge", "Current Affairs", "Reasoning", "Computer Science"];
  const statuses = ["all", "active", "completed", "upcoming"];

  const filteredTests = tests.filter(test => {
    const matchesFilter = activeFilter === "all" || test.status === activeFilter;
    const matchesSearch = test.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         test.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">My Mock Tests</h2>
          <p className="text-muted-foreground mb-4">Track your progress and manage your mock test preparation journey.</p>
          <div className="inline-flex items-center gap-2 bg-electric/10 text-electric px-4 py-2 rounded-full font-medium">
            🎯 Practice makes perfect - Every test brings you closer to your goal!
          </div>
        </div>
        
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
            <p className="text-muted-foreground text-lg">No tests found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestGrid;
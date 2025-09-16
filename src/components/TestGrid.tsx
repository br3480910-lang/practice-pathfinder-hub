import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Plus } from "lucide-react";
import TestCard from "./TestCard";

const TestGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSubject, setFilterSubject] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

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
    const matchesSearch = test.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         test.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = filterSubject === "all" || test.subject === filterSubject;
    const matchesStatus = filterStatus === "all" || test.status === filterStatus;
    
    return matchesSearch && matchesSubject && matchesStatus;
  });

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Your Mock Tests</h2>
            <p className="text-muted-foreground">Track your progress and master your subjects</p>
          </div>
          <Button className="mt-4 md:mt-0">
            <Plus className="h-4 w-4 mr-2" />
            Add New Test
          </Button>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search tests or subjects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterSubject} onValueChange={setFilterSubject}>
              <SelectTrigger className="md:w-48">
                <SelectValue placeholder="Filter by subject" />
              </SelectTrigger>
              <SelectContent>
                {subjects.map(subject => (
                  <SelectItem key={subject} value={subject}>
                    {subject === "all" ? "All Subjects" : subject}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="md:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                {statuses.map(status => (
                  <SelectItem key={status} value={status}>
                    {status === "all" ? "All Status" : status.charAt(0).toUpperCase() + status.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Test Grid */}
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
            <div className="text-muted-foreground text-lg mb-4">No tests found</div>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestGrid;
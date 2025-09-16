import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Plus } from "lucide-react";

interface TestFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const TestFilters = ({ 
  activeFilter, 
  onFilterChange, 
  searchQuery, 
  onSearchChange 
}: TestFiltersProps) => {
  const filters = [
    { id: "all", label: "All Tests" },
    { id: "active", label: "Active Tests" },
    { id: "upcoming", label: "Upcoming" },
    { id: "completed", label: "Completed" },
    { id: "expired", label: "Expired" }
  ];

  return (
    <div className="space-y-6">
      {/* Search and Add Section */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search tests..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button className="bg-gradient-primary text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add Test
          </Button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant={activeFilter === filter.id ? "default" : "ghost"}
            onClick={() => onFilterChange(filter.id)}
            className={`transition-all duration-200 ${
              activeFilter === filter.id 
                ? "bg-primary text-primary-foreground" 
                : "hover:bg-muted"
            }`}
          >
            {filter.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TestFilters;
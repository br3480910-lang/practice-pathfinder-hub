import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Clock, CheckCircle, TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  borderColor: string;
}

const StatCard = ({ title, value, icon, borderColor }: StatCardProps) => (
  <Card className={`card-hover border-l-4 ${borderColor}`}>
    <CardContent className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
        <div className="text-muted-foreground">
          {icon}
        </div>
      </div>
    </CardContent>
  </Card>
);

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard
        title="Active Tests"
        value="12"
        icon={<BookOpen className="h-8 w-8" />}
        borderColor="border-l-primary"
      />
      <StatCard
        title="Expiring Soon"
        value="3"
        icon={<Clock className="h-8 w-8" />}
        borderColor="border-l-error"
      />
      <StatCard
        title="Completed"
        value="8"
        icon={<CheckCircle className="h-8 w-8" />}
        borderColor="border-l-success"
      />
      <StatCard
        title="Total Tests"
        value="23"
        icon={<TrendingUp className="h-8 w-8" />}
        borderColor="border-l-teal"
      />
    </div>
  );
};

export default StatsCards;
import AvatarPlan from "../AvatarPlan";

interface PlanItem {
  id: string;
  nickname: string;
  realname: string;
  status: string;
  title: string;
  description: string;
  dueDate: string;
}

interface PlanGridProps {
  plans?: PlanItem[];
}

function PlanGrid({ plans }: PlanGridProps) {
  // Default plans data
  const defaultPlans: PlanItem[] = [
    {
      id: "1",
      nickname: "@Felipe__DIO🚀",
      realname: "Felipe Aguiar",
      status: "In Progress",
      title: "Design System Setup",
      description: "Create a comprehensive design system with components and tokens for the project.",
      dueDate: "Dec 15, 2024"
    },
    {
      id: "2",
      nickname: "@Maria__Dev💻",
      realname: "Maria Silva",
      status: "Pending",
      title: "API Integration",
      description: "Integrate REST API endpoints for user authentication and data management.",
      dueDate: "Dec 20, 2024"
    },
    {
      id: "3",
      nickname: "@João__Dev🔧",
      realname: "João Santos",
      status: "Completed",
      title: "Database Schema",
      description: "Design and implement the database schema for the application.",
      dueDate: "Dec 10, 2024"
    },
    {
      id: "4",
      nickname: "@Felipe__DIO🚀",
      realname: "Felipe Aguiar",
      status: "In Progress",
      title: "Frontend Build",
      description: "Build responsive UI components using React and Tailwind CSS.",
      dueDate: "Dec 25, 2024"
    },
    {
      id: "5",
      nickname: "@Ana__QA✨",
      realname: "Ana Costa",
      status: "In Progress",
      title: "Testing Suite",
      description: "Create unit tests and integration tests for core features.",
      dueDate: "Dec 22, 2024"
    },
    {
      id: "6",
      nickname: "@Carlos__Infra⚙️",
      realname: "Carlos Oliveira",
      status: "Pending",
      title: "Deployment Setup",
      description: "Configure CI/CD pipeline and deploy application to production.",
      dueDate: "Jan 5, 2025"
    }
  ];

  const itemsToDisplay = plans && plans.length > 0 ? plans : defaultPlans;

  return (
    <div className="
      grid 
      grid-cols-1 
      lg:grid-cols-2 
      gap-4
    ">
      {itemsToDisplay.map((plan) => (
        <AvatarPlan
          key={plan.id}
          nickname={plan.nickname}
          realname={plan.realname}
          status={plan.status}
          title={plan.title}
          description={plan.description}
          dueDate={plan.dueDate}
        />
      ))}
    </div>
  );
}

export default PlanGrid;

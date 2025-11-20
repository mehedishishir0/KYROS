"use client";
import { Progress } from "@/components/ui/progress";

const ActiveProjects = () => {
  const progress = 13;

  return (
    <div className="bg-white border border-gray-300 p-6 rounded-lg">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-xl">Active Projects</h2>
        <button className="text-sm text-primary">See All</button>
      </div>

      <div className="mt-6 space-y-5">
        <div className="border border-gray-300 p-4 rounded-lg space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-primary/85 text-xl font-medium">
                Active Projects
              </h2>
              <p className="text-sm text-gray-600 mt-2">TechCorp Inc.</p>
            </div>

            <button className="text-xs bg-primary/10 text-primary/75 font-semibold px-8 py-2 rounded-3xl">
              Active
            </button>
          </div>

          <div>
            <h1 className="text-gray-500 text-lg mb-1">{progress}% Complete</h1>
            <Progress value={progress} className="w-[100%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveProjects;

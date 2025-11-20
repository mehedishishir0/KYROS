"use client";
import { Progress } from "@/components/ui/progress";

const ActiveProjects = () => {
  const progress = 13

  return (
    <div className="bg-white border border-gray-300 p-6 rounded-lg">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">Active Projects</h1>
        <button className="text-sm text-primary">See All</button>
      </div>

      <div className="mt-5 space-y-5">
        <div className="border border-gray-300 p-4 rounded-lg space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-primary/85 text-xl font-bold">
                Active Projects
              </h1>
              <p className="text-sm text-gray-600 mt-2">TechCorp Inc.</p>
            </div>

            <button className="text-xs bg-primary/10 text-primary/75 font-semibold px-5 py-2 rounded-3xl">
              Active
            </button>
          </div>

          <div>
            <h1 className="text-gray-500 text-lg mb-1">{progress}% Complete</h1>
            <Progress value={progress} className="w-[100%]" />
          </div>
        </div>

        <div className="border border-gray-300 p-4 rounded-lg space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-primary/85 text-xl font-bold">
                Active Projects
              </h1>
              <p className="text-sm text-gray-600 mt-2">TechCorp Inc.</p>
            </div>

            <button className="text-xs bg-primary/10 text-primary/75 font-semibold px-5 py-2 rounded-3xl">
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

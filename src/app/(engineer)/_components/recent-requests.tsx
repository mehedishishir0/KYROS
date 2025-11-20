import React from "react";

const RecentRequests = () => {
  return (
    <div className="bg-white border border-gray-300 p-6 rounded-lg">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-xl">Recent Requests</h2>
        <button className="text-sm text-primary">See All</button>
      </div>

      <div className="mt-6 space-y-5">
        <div className="space-y-3 border-b border-gray-300 pb-5">
          <div className="flex items-start justify-between">
            <div>
              <h5 className="text-xl font-medium">
                Backend Developer for Fintech Project
              </h5>
              <p className="text-sm text-gray-600 mt-2">
                FinServe Technologies
              </p>
            </div>

            <button className="text-xs bg-primary/10 text-primary/75 font-semibold px-8 py-2 rounded-3xl">
              Active
            </button>
          </div>

          <div>
            <p className="text-gray-400 text-sm">
              Looking for an experienced backend developer to help build a
              secure payment processing system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentRequests;

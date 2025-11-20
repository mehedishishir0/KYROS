import React from "react";
import States from "../_components/states";
import ActiveProjects from "../_components/active-projects";
import RecentRequests from "../_components/recent-requests";

const page = () => {
  return (
    <div>
      <States />

      <div className="mt-8">
        <ActiveProjects />
        <RecentRequests />
      </div>
    </div>
  );
};

export default page;

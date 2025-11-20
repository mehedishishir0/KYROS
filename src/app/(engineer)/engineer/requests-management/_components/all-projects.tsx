import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import React from "react";
import CategoryButton from "./category-button";

const AllProjects = () => {
  const progress = 80;

  return (
    <div>
      <div>
        <CategoryButton />
      </div>
      
      <div className="mt-8">
        <div className="bg-white p-5 rounded-lg">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-lg font-medium">
                Frontend Developer for E-commerce Site
              </h2>
              <p className="text-gray-500 my-4">Client: RetailTech Inc.</p>

              <p className="text-gray-500">
                Need an experienced React developer to help build our product
                catalog and checkout process.
              </p>
            </div>

            <div>
              <button className="px-6 py-2 rounded-3xl bg-primary/10">
                status
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mt-5">
            <div>
              <h5 className="text-gray-500">Submitted</h5>
              <p className="font-medium">Oct 5, 2023</p>
            </div>

            <div>
              <h5 className="text-gray-500">Requested Start</h5>
              <p className="font-medium">Oct 5, 2023</p>
            </div>
          </div>

          <div className="flex items-center justify-between mt-5 lg:max-w-xs">
            <div>
              <h5 className="text-gray-500">Duration</h5>
              <p className="font-medium">3 weeks</p>
            </div>

            <div>
              <h5 className="text-gray-500">Rate</h5>
              <p className="font-medium">$150/Hr</p>
            </div>
          </div>

          {/* accept-decline button */}
          <div className="space-x-5 mt-5">
            <Button>Accept Request</Button>

            <Button variant={"outline"}>Decline</Button>
          </div>

          {/* progress bar */}
          <div className="mt-5">
            <h1 className="text-gray-500 text-lg mb-1">{progress}% Complete</h1>
            <Progress value={progress} className="w-[100%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;

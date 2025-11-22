"use client";
import React from "react";
import { X } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

interface PropsTypes {
  onClose: (value: boolean) => void;
  projectId: string;
  token: string;
}

const ArrangeMeetingModal = ({ onClose, projectId, token }: PropsTypes) => {
  const { data: meetingLink = {}, isPending } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/project/${projectId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        onClick={() => onClose(false)}
        className="absolute inset-0 bg-black/15 bg-opacity-50 backdrop-blur-sm"
      ></div>

      <div className="relative bg-white rounded-lg shadow-xl w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 max-h-[90vh] overflow-y-auto p-8 scrollbar-hide">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-2xl font-medium text-gray-800">Meeting Info</h4>
          <button
            onClick={() => onClose(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArrangeMeetingModal;

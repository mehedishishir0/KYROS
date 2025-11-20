"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye } from "lucide-react";

const page = () => {
  return (
    <div>
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-[#f2f2f2] h-[50px]">
            <TableRow>
              <TableHead className="text-center text-black">Project</TableHead>
              <TableHead className="text-center text-black">
                Client/Team
              </TableHead>
              <TableHead className="text-center text-black">
                Start Date
              </TableHead>
              <TableHead className="text-center text-black">
                Delivery Date
              </TableHead>
              <TableHead className="text-center text-black">Status</TableHead>
              <TableHead className="text-center text-black">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white">
            <TableRow className=" h-[50px]">
              <TableCell className="text-center text-gray-600">
                E-commerce API Integration
              </TableCell>
              <TableCell className="text-center text-gray-600">
                Global Retail Inc.
              </TableCell>
              <TableCell className="text-center text-gray-600">
                Aug 15, 2023
              </TableCell>
              <TableCell className="text-center text-gray-600">
                Oct 30, 2023
              </TableCell>
              <TableCell className="text-center text-gray-600">
                Approved
              </TableCell>
              <TableCell className="text-center text-gray-600">
                <button>
                  <Eye className="text-center h-5 w-5 mx-auto" />
                </button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default page;

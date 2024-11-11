import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CompaniesTable = () => {
  const { companies, searchCompanyByText } = useSelector(
    (store) => store.company
  );
  const [filterCompany, setFilterCompany] = useState(companies);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredCompany =
      companies.length >= 0 &&
      companies.filter((company) => {
        if (!searchCompanyByText) {
          return true;
        }
        return company?.name
          ?.toLowerCase()
          .includes(searchCompanyByText.toLowerCase());
      });
    setFilterCompany(filteredCompany);
  }, [companies, searchCompanyByText]);

  return (
    <div className="overflow-x-auto p-4 sm:p-6 bg-gray-800 rounded-lg shadow-md">
      <Table className="w-full min-w-[600px]">
        <TableCaption className="text-gray-400 font-semibold mb-4">
          A list of your registered companies
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-700">
            <TableHead className="text-white py-4">Logo</TableHead>
            <TableHead className="text-white">Name</TableHead>
            <TableHead className="text-white">Date</TableHead>
            <TableHead className="text-white text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterCompany.length <= 0 ? (
            <TableRow>
              <TableCell colSpan="4" className="text-center py-4 text-gray-300">
                No Companies Registered
              </TableCell>
            </TableRow>
          ) : (
            filterCompany.map((company) => (
              <TableRow
                key={company._id}
                className="hover:bg-gray-700 transition-all"
              >
                <TableCell className="py-3">
                  <Avatar>
                    <AvatarImage src={company.logo} />
                  </Avatar>
                </TableCell>
                <TableCell className="text-gray-300">{company.name}</TableCell>
                <TableCell className="text-gray-400">
                  {company.createdAt.split("T")[0]}
                </TableCell>
                <TableCell className="text-right cursor-pointer">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal className="text-gray-300 hover:text-white" />
                    </PopoverTrigger>
                    <PopoverContent className="w-32 bg-gray-700 text-white rounded shadow-lg">
                      <div
                        onClick={() =>
                          navigate(`/admin/companies/${company._id}`)
                        }
                        className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-600"
                      >
                        <Edit2 className="w-4 text-blue-400" />
                        <span>Edit</span>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;

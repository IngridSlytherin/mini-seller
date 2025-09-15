import React from "react";

const LeadRow = ({ lead, onClick }) => {
  return (
    <tr
      onClick={onClick}
      className="cursor-pointer hover:bg-blue-50 transition"
    >
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
        {lead.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
        {lead.company}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 underline">
        {lead.email}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
        {lead.score}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {lead.status}
        </span>
      </td>
    </tr>
  );
};

export default LeadRow;
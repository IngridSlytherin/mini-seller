import React from "react";

const OpportunitiesTable = ({ opportunities }) => {
  if (!opportunities.length)
    return <p className="text-center p-4">No opportunities yet</p>;

  return (
    <table className="min-w-full divide-y divide-gray-200 mt-6">
      <thead>
        <tr>
          <th className="px-4 py-2 text-left">Name</th>
          <th className="px-4 py-2 text-left">Stage</th>
          <th className="px-4 py-2 text-left">Amount</th>
          <th className="px-4 py-2 text-left">Account</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {opportunities.map((opp) => (
          <tr key={opp.id}>
            <td className="px-4 py-2">{opp.name}</td>
            <td className="px-4 py-2">{opp.stage}</td>
            <td className="px-4 py-2">{opp.amount || "-"}</td>
            <td className="px-4 py-2">{opp.accountName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OpportunitiesTable;

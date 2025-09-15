import React from "react";

export default function LeadList({ leads, onSelect }) {
  return (
    <div>
      {/* Tabela para telas grandes */}
      <div className="hidden md:block overflow-hidden bg-white rounded-lg shadow">
        <table className="min-w-full border-collapse">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Company</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Score</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr
                key={lead.id}
                onClick={() => onSelect(lead)}
                className="hover:bg-gray-100 cursor-pointer"
              >
                <td className="px-4 py-2 font-semibold">{lead.name}</td>
                <td className="px-4 py-2">{lead.company}</td>
                <td className="px-4 py-2 text-indigo-600">{lead.email}</td>
                <td className="px-4 py-2">{lead.score}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      lead.status === "New"
                        ? "bg-green-100 text-green-800"
                        : lead.status === "Contacted"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {lead.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards para telas pequenas */}
      <div className="md:hidden space-y-4">
        {leads.map((lead) => (
          <div
            key={lead.id}
            onClick={() => onSelect(lead)}
            className="bg-white shadow rounded-lg p-4 cursor-pointer hover:ring-2 hover:ring-indigo-500"
          >
            <h3 className="font-bold text-lg text-indigo-700">{lead.name}</h3>
            <p><span className="font-semibold">Company:</span> {lead.company}</p>
            <p><span className="font-semibold">Email:</span> {lead.email}</p>
            <p><span className="font-semibold">Score:</span> {lead.score}</p>
            <p>
              <span className="font-semibold">Status:</span>{" "}
              <span
                className={`px-2 py-1 rounded-full text-sm ${
                  lead.status === "New"
                    ? "bg-green-100 text-green-800"
                    : lead.status === "Contacted"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {lead.status}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

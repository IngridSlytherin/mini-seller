import React, { useState, useEffect } from "react";

export default function LeadDetailPanel({ lead, onCancel, onSave, onConvert }) {
  if (!lead) return null;

  const [email, setEmail] = useState(lead.email);
  const [status, setStatus] = useState(lead.status);

  useEffect(() => {
    setEmail(lead.email);
    setStatus(lead.status);
  }, [lead]);

  return (
    <>
      {/* Mobile: modal centralizado */}
      <div className="md:hidden fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">{lead.name}</h2>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Status */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option>New</option>
              <option>Contacted</option>
              <option>Converted</option>
            </select>
          </div>

          {/* Botões */}
          <div className="flex justify-between gap-3 mb-4">
            <button
              onClick={onCancel}
              className="w-1/2 px-4 py-2 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button
              onClick={() => onSave({ ...lead, email, status })}
              className="w-1/2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Save
            </button>
          </div>

          <button
            onClick={() => onConvert(lead)}
            className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Convert to Opportunity
          </button>
        </div>
      </div>

      {/* Desktop: painel lateral */}
      <div className="hidden md:block bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">{lead.name}</h2>
        {/* ... aqui mantém o mesmo conteúdo da versão desktop */}
      </div>
    </>
  );
}

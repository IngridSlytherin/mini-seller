import React, { useState } from "react";
import LeadList from "./components/LeadList.jsx";
import LeadDetailPanel from "./components/LeadDetailPanel.jsx";

const initialLeads = [
  { id: 1, name: "Alice Johnson", company: "TechCorp", email: "alice@techcorp.com", score: 85, status: "New" },
  { id: 2, name: "Bob Smith", company: "InnoSoft", email: "bob@innosoft.com", score: 72, status: "Contacted" },
  { id: 3, name: "Carlos Mendes", company: "SoftPlus", email: "carlos@softplus.com", score: 90, status: "New" },
  { id: 4, name: "Daniela Souza", company: "WebSolutions", email: "daniela@websolutions.com", score: 65, status: "Contacted" },
  { id: 5, name: "Eduardo Lima", company: "CloudX", email: "eduardo@cloudx.com", score: 78, status: "New" },
  { id: 6, name: "Fernanda Rocha", company: "DataCorp", email: "fernanda@datacorp.com", score: 88, status: "Contacted" },
  { id: 7, name: "Gabriel Costa", company: "NextGen", email: "gabriel@nextgen.com", score: 55, status: "New" },
  { id: 8, name: "Helena Martins", company: "VisionTech", email: "helena@visiontech.com", score: 95, status: "Converted" },
  { id: 9, name: "Igor Santos", company: "SmartApps", email: "igor@smartapps.com", score: 70, status: "Contacted" },
  { id: 10, name: "Juliana Oliveira", company: "Infinity", email: "juliana@infinity.com", score: 82, status: "New" },
];

export default function App() {
  const [leads, setLeads] = useState(initialLeads);
  const [opportunities, setOpportunities] = useState([]); // 👈 faltava isso
  const [selectedLead, setSelectedLead] = useState(null);

  const handleSelectLead = (lead) => {
    setSelectedLead(lead);
  };

  const handleCancel = () => {
    setSelectedLead(null);
  };

  const handleSave = (updatedLead) => {
    setLeads((prevLeads) =>
      prevLeads.map((l) => (l.id === updatedLead.id ? updatedLead : l))
    );
    alert("Changes saved ✅");
    setSelectedLead(null);
  };

  const handleConvert = (lead) => {
    // remove dos leads
    setLeads((prev) => prev.filter((l) => l.id !== lead.id));
    // adiciona em oportunidades
    setOpportunities((prev) => [...prev, { ...lead, status: "Converted" }]);
    alert(`${lead.name} converted 🚀`);
    setSelectedLead(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-bold text-indigo-700 flex items-center gap-2 mb-8">
        Mini Seller Console <span>🚀</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Lista de leads */}
        <div className="md:col-span-2">
          <LeadList leads={leads} onSelect={handleSelectLead} />
        </div>

        {/* Painel lateral */}
        <div>
          <LeadDetailPanel
            lead={selectedLead}
            onCancel={handleCancel}
            onSave={handleSave}
            onConvert={handleConvert}
          />
        </div>
      </div>

      {/* Lista de oportunidades */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">
          Opportunities
        </h2>
        {opportunities.length === 0 ? (
          <p className="text-gray-500">No opportunities yet.</p>
        ) : (
          <ul className="space-y-2">
            {opportunities.map((opp) => (
              <li
                key={opp.id}
                className="p-3 bg-green-50 border border-green-200 rounded-md"
              >
                <span className="font-semibold">{opp.name}</span> —{" "}
                {opp.company}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

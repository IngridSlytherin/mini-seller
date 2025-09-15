import React, { useContext, useState } from "react";
import { LeadsContext } from "../context/LeadsContext";
import LeadList from "../components/LeadList";
import LeadDetailPanel from "../components/LeadDetailPanel";
import OpportunitiesTable from "../components/OpportunitiesTable";

const Dashboard = () => {
  const { leads, updateLead, convertLead, opportunities, loading } =
    useContext(LeadsContext);
  const [selectedLead, setSelectedLead] = useState(null);

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        Mini Seller Console 🚀
      </h1>

      <LeadList leads={leads} onSelect={setSelectedLead} />

      {selectedLead && (
        <LeadDetailPanel
          lead={selectedLead}
          onClose={() => setSelectedLead(null)}
          onSave={(lead) => {
            updateLead(lead);
            setSelectedLead(null);
          }}
          onConvert={(lead) => {
            convertLead(lead);
            setSelectedLead(null);
          }}
        />
      )}

      <OpportunitiesTable opportunities={opportunities} />
    </div>
  );
};


export default Dashboard;

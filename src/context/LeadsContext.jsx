import React, { createContext, useState, useEffect } from "react";
import leadsData from "../assets/leads.json";

export const LeadsContext = createContext();

export const LeadsProvider = ({ children }) => {
  const [leads, setLeads] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLeads(leadsData);
      setLoading(false);
    }, 500);
  }, []);

  const updateLead = (updatedLead) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === updatedLead.id ? updatedLead : l))
    );
  };

  const convertLead = (lead) => {
    const newOpp = {
      id: opportunities.length + 1,
      name: lead.name,
      stage: "New",
      amount: null,
      accountName: lead.company,
    };
    setOpportunities([...opportunities, newOpp]);
  };

  return (
    <LeadsContext.Provider
      value={{ leads, updateLead, convertLead, opportunities, loading }}
    >
      {children}
    </LeadsContext.Provider>
  );
};

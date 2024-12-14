"use client";

import { useEffect, useState } from "react";
import { getLeads } from "../lib/auth/getLeads";

export default function Leads() {
    const [leads, setLeads] = useState<{ id: string; desc: string; belongsToId: string; }[]>([]);

    useEffect(() => {
        async function fetchLeads() {
            const leadsData = await getLeads();
            setLeads(leadsData);
        }
        fetchLeads();
    }, []);

    return (
        <div className='leads text-lg border-2 border-gray-200 rounded-lg shadow m-3 p-3 pb-6 px-4 mb-96 md:max-h-max'>
            <h1 className='title font-semibold'>Lead Information</h1>
            <p className='description text-sm text-gray-400'>Your lead details email will be displayed here.</p>

            <div className='output-box text-gray-500 bg-gray-200 text-sm mt-11 mx-3 p-4 rounded-lg min-h-96 max-h-max'>
                {leads.length === 0 ? (
                    `No leads saved yet. Fill in the details and click on "Generate Email" to generate a personalized email and save your lead information.`
                ) : (
                    <ul>
                        {leads.map((lead, index) => (
                            <li key={lead.id}>{index + 1}. {lead.desc}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}
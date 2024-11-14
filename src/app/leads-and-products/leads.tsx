import prisma from "../modules/db";

export default async function Leads() {
    const leads = await prisma.lead.findMany();
    return (
        <div className='leads text-lg border-2 border-gray-200 rounded-lg shadow m-3 p-3 pb-6 px-4 mb-96 md:max-h-max'>
            <h1 className='title font-semibold'>Lead Information</h1>
            <p className='description text-sm text-gray-400'>Your lead details email will be displayed here.</p>

            <div className='output-box text-gray-500 bg-gray-200 text-sm mt-11 mx-3 p-4 rounded-lg min-h-96 max-h-max'>
                {leads.length > 0 ? leads.map((lead, index) => (
                    <div key={lead.id}>
                        <p className='leads p-1'>{index + 1}. {lead.desc}</p>
                    </div>
                )) : `No leads saved yet. Fill in the details and click on "Generate Email" to generate a personalized email and save your lead information.`}
            </div>
        </div>
    )
}

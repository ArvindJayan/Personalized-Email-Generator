import prisma from '../modules/db';
import Inputbox from './Inputbox';

export default function Leftside() {
    const handleGenerate = async (FormData) => {
        "use server";
        const lead = FormData.get('lead');
        const product = FormData.get('product');
        if ((!lead) || (!product)) {
            return console.log("Fields cannot be empty.");
        }

        const existingLead = await prisma.lead.findFirst({
            where: { desc: lead }
        });
        if (!existingLead) {
            await prisma.lead.create({
                data: {
                    desc: lead
                }
            });
            console.log("Lead created.");
        } else {
            console.log("Lead already exists");
        }

        const existingProduct = await prisma.product.findFirst({
            where: { desc: product }
        });
        if (!existingProduct) {
            await prisma.product.create({
                data: {
                    desc: product
                }
            });
            console.log("Product created.");
        } else {
            console.log("Product already exists.");
        }
    }

    return (
        <div className='left-side text-lg border-2 border-gray-200 rounded-lg shadow m-3 p-3 px-4 h-full'>
            <h1 className='title font-semibold'>Input Information</h1>
            <p className='description text-sm text-gray-400'>Enter product and lead details to generate a personalized email.</p>

            <form className='input-form mt-10 text-base font-semibold' action={handleGenerate}>
                <label htmlFor='product'>Product Information</label>
                <Inputbox title='product' />

                <label htmlFor='lead'>Lead Information</label>
                <Inputbox title='lead' />

                <button onClick={handleGenerate} className='button bg-black rounded-lg text-white text-semibold w-full h-8 my-2'>Generate Email</button>
            </form>
        </div>
    )
}


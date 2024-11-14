import Leads from './leads';
import Products from './products';

export default function LeadsAndProducts() {
    return (
        <main className='font-geistSans'>
            <div className='container flex flex-col md:flex-row md:h-screen'>
                <div className='basis-1/2 md:w-1/2 m-2 min-h-screen'>
                    <Leads />
                </div>

                <div className='basis-1/2 md:w-1/2 m-2 min-h-screen'>
                    <Products />
                </div>
            </div>
        </main>
    )
}
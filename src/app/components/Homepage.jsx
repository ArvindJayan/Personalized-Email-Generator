import Leftside from './Leftside.jsx';
import Rightside from './Rightside.jsx';

export default function Homepage() {
    return (
        <main className='font-geistSans'>
            <div className='container flex flex-col md:flex-row md:h-full'>
                <div className='basis-1/2 md:w-1/2 m-2'>
                    <Leftside />
                </div>

                <div className='basis-1/2 md:w-1/2 m-2'>
                    <Rightside />
                </div>
            </div>
        </main>
    )
}

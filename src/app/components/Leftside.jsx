import Inputbox from './Inputbox'

function Leftside() {
    return (
        <div className='left-side text-lg border-2 border-gray-200 rounded-lg shadow m-3 p-3 px-4 h-full'>
            <h1 className='title font-semibold'>Input Information</h1>
            <p className='description text-sm text-gray-400'>Enter product and lead details to generate a personalized email</p>

            <form className='input-form mt-10 text-base font-semibold'>
                <label htmlFor='product'>Product Information</label>
                <Inputbox title='product' />

                <label htmlFor='lead'>Lead Information</label>
                <Inputbox title='lead' />

                <button className='button bg-black rounded-lg text-white text-semibold w-full h-8 my-2'>Generate Email</button>
            </form>
        </div>
    )
}

export default Leftside

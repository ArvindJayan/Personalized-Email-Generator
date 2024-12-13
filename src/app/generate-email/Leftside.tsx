import generateEmail from '../actions/generateEmail';
import Inputbox from './Inputbox';

export default function Leftside({ setGeneratedContent, isLoading, setIsLoading }: { setGeneratedContent: (value: string) => void, isLoading: boolean, setIsLoading: (value: boolean) => void }) {
    const handleGenerate = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        const formData = new FormData(event.currentTarget);
        const generatedContent = await generateEmail(formData);

        if (!generatedContent) {
            setGeneratedContent("Error: No content generated.");
            setIsLoading(false);
        } else if (generatedContent.error) {
            setGeneratedContent(generatedContent.error);
            setIsLoading(false);
        } else {
            setGeneratedContent(generatedContent.content as string);
            setIsLoading(false);
        }
    }
    return (
        <div className='left-side text-lg border-2 border-gray-200 rounded-lg shadow m-3 p-3 px-4'>
            <h1 className='title font-semibold'>Input Information</h1>
            <p className='description text-sm text-gray-400'>Enter product and lead details to generate a personalized email.</p>

            <form className='input-form mt-10 text-base font-semibold' onSubmit={handleGenerate}>
                <label htmlFor='product'>Product Information</label>
                <Inputbox title='product' />

                <label htmlFor='lead'>Lead Information</label>
                <Inputbox title='lead' />

                <button type='submit' className='button bg-black rounded-lg text-white text-semibold w-full h-8 my-2'>{isLoading ? "Generating Email" : "Generate Email"}</button>
            </form>
        </div>
    )
}
export default function Rightside({ generatedContent, isLoading }: { generatedContent: string, isLoading: boolean }) {
    return (
        <div className='right-side text-lg border-2 border-gray-200 rounded-lg shadow m-3 p-3 pb-6 px-4 mb-96 md:max-h-max'>
            <h1 className='title font-semibold'>Generated Email</h1>
            <p className='description text-sm text-gray-400'>Your personalized email will be generated here.</p>

            <div className='output-box text-gray-500 bg-gray-200 text-sm mt-11 mx-3 p-4 rounded-lg min-h-96 max-h-max'>
                {generatedContent ? (isLoading ? "Please wait while we generate your email..." : generatedContent) : `No email generated. Fill in the details and click on "Generate Email"`}
            </div>
        </div>
    )
}
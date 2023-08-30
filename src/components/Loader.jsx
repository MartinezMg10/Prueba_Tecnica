import { DotSpinner } from '@uiball/loaders';

export const Loader = () => {
	return (
        <div className="flex justify-center my-[200px]">
            <DotSpinner size={40} speed={0.9} color='black' />;
        </div>
    )
};

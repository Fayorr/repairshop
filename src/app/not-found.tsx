import Image from 'next/image';
import Link from 'next/link';
// import { title } from 'process';

export const metadata = {
	title: 'Page Not Found',
};

export default function NotFound() {
	return (
		<div className='px-2 w-full'>
			<div className='mx-auto py-4 flex flex-col gap-4 justify-center items-center max-w-2xl'>
				<h2 className='text-2xl'>Page Not Found</h2>
				<p>Could not find requested resource</p>
				<Image
					className='m-0 rounded-xl'
					src='/images/8700_5_2_05.jpg'
					width={300}
					height={300}
					sizes='300px'
					alt='Page Not Found'
					priority={true}
					title='Page Not Found'
				/>
				<Link href='/home'>Return Home</Link>
			</div>
		</div>
	);
}

import { HomeIcon, File, UsersRound } from 'lucide-react';
import Link from 'next/link';
import { NavButton } from '@/components/NavButton';
import { ModeToggle } from '@/components/ModeToggle';

export function Header() {
	return (
		<header className='animate-slide  h-12 p-2 border-b sticky top-0 z-10'>
			<div className='flex justify-between items-center h-8 w-full'>
				<div className='flex items-center gap-2'>
					<NavButton
						href='/home'
						label='home'
						icon={HomeIcon}
					/>
					<Link
						href='/home'
						className='flex justify-center items-center gap-2 ml-0 '
						title='Home'
					>
						<h1 className='hidden sm:block text-xl font-bold m-0 mt-1'>
							Computer Repair Shop
						</h1>
					</Link>
				</div>

				<div className='flex items-center '>
					<NavButton
						href='/tickets'
						label='Tickets'
						icon={File}
					/>
					<NavButton
						href='/customers'
						label='Customers'
						icon={UsersRound}
					/>
					<ModeToggle />
				</div>
			</div>
		</header>
	);
}

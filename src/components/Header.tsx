
import {HomeIcon, File, UsersRound } from "lucide-react";
import Link from "next/link";
import { NavButton } from "./NavButton";

export function Header() {
    return (
			<header className='animate-slide bg-black h-12 p-2 border-b sticky top-0 z-10'>
				<div className='flex justify-between items-center h-8 w-full'>
                <div className='flex items-center gap-2'>
                    <NavButton href='/home' label="home" icon={HomeIcon} />
                    </div>
					<div className='flex items-center'></div>
				</div>
			</header>
		);
}

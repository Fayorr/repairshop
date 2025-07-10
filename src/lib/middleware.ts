import { withAuth } from '@kinde-oss/kinde-auth-nextjs/middleware';
import { NextRequest } from 'next/server';

export default withAuth(
	async function middleware(request: NextRequest) {
		console.log(request);
		// Add your middleware logic here
	},
	{
		isReturnToCurrentPage: true,
	}
);

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico, robots.txt, images, login d
		 */
		'/((?!api|_next/static|_next/image|favicon.ico|robots.txt|images|login).*)',
	],
};

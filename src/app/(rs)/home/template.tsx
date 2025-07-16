// Template rerenders everytime (layout renders only when it loads it doesnt rerender)
export default async function Template({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='animate-appear'>
			{children}</div>
	);
} 
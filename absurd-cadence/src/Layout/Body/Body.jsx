import Block from './Blocks.jsx/Block'

const Body = ({ category }) => {
	const blocks = [
		{
			className: 'bg-[#8884FF] h-52 w-72',
			title: 'Title',
			body: <>Body</>,
			type: 'Info',
		},
		{
			className: 'bg-[#646cff] h-40 w-72',
			title: 'Title',
			body: <>Body</>,
			type: 'Work',
		},
		{
			className: 'bg-[#C6C013] h-52 w-72',
			title: 'Title',
			body: <>Body</>,
			type: 'Work',
		},
		{
			className: 'bg-[#EB4511] h-40 w-72',
			title: 'Title',
			body: <>Body</>,
			type: 'Contact',
		},
	]

	return (
		<div className='mt-20 items-center w-full justify-center align-middle flex flex-col gap-3 font-medium'>
			{blocks.map(({ className, title, body, type }) => {
				return (
					<Block
						key={title}
						category={category}
						className={className}
						title={title}
						body={body}
						type={type}
					/>
				)
			})}
			<Block />
		</div>
	)
}
export default Body

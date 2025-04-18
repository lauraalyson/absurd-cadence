import { X } from '@phosphor-icons/react'
import clsx from 'clsx'

const Navigation = ({ isDarkMode, category, setCategory }) => {
	const isActive = (title) => category.find((i) => i === title)
	const headers = ['About', 'Work', 'Contact']
	return (
		<div
			id='header'
			className={clsx(
				'w-full md:w-fit flex md:!relative justify-center fixed bottom-4 md:top-1 right-auto !z-[100] text-inverted md:[text-[#FAFFFD]'
			)}
		>
			<div className={clsx('cursor-default p-2 rounded w-fit backdrop-blur-lg  md:bg-transparent flex justify-center gap-1 w-56')}>
				{headers.map((title) => {
					return (
						<button
							key={title}
							className={clsx(
								'cursor-pointer rounded py-1 px-3 flex items-center gap-1 transition-colors h-8 hover:!bg-[#fafffd29]',
								isActive(title) && `bg-[#fafffd29]`
							)}
							onClick={() => setCategory(title)}
						>
							{isActive(title) && <X size={14} weight='bold' />}
							{title}
						</button>
					)
				})}
			</div>
		</div>
	)
}

export default Navigation

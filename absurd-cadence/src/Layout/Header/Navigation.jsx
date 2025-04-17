import { X } from '@phosphor-icons/react'
import clsx from 'clsx'

const Navigation = ({ isDarkMode, category, setCategory }) => {
	const isActive = (title) => category.find((i) => i === title)
	const headers = ['About', 'Work', 'Contact']
	return (
		<div
			id='header'
			className={clsx(
				'w-fit flex justify-center',
				isDarkMode ? 'text-[#FAFFFD]' : 'text-[#191716]'
			)}
		>
			<div className={clsx('cursor-default', 'flex gap-1')}>
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

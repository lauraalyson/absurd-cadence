import { X } from '@phosphor-icons/react'
import clsx from 'clsx'

const Header = ({ isDarkMode, category, setCategory }) => {
	const isActive = (title) => category.find((i) => i === title)
	const headers = [
		{
			title: 'Info',
			color: '#8884FF',
		},
		{
			title: 'Work',
			color: '#EB4511',
		},
		{
			title: 'Contact',
			color: '#C6C013',
		},
	]
	return (
		<div
			className={clsx(
				'w-full flex justify-center py-6 font-medium',
				isDarkMode ? 'text-[#F0F0EA]' : 'text-[#191716]'
			)}
		>
			<div className={clsx('cursor-default', 'flex gap-1')}>
				{headers.map(({ title, color }) => {
					return (
						<button
							key={title}
							className={clsx(
								'cursor-pointer rounded py-1 px-3 flex items-center gap-1 transition-colors hover:!bg-opacity-80',
								isActive(title) && `bg-[${color}]`,
								`hover:bg-[${color}]`
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

export default Header

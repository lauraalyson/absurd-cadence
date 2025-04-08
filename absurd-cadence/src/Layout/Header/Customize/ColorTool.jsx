import { Moon, SunDim } from '@phosphor-icons/react'
import clsx from 'clsx'

const ColorTool = ({ isDarkMode, setIsDarkMode }) => {
	return (
		<button
			className={clsx(
				'flex items-center justify-center absolute top-0 right-0 w-8 h-8 m-4 hover:bg-[#646cff] hover:text-[#FAFFFD] rounded transition-all',
				isDarkMode ? 'text-[#FAFFFD]' : 'text-[#191716]'
			)}
			onClick={() => setIsDarkMode(!isDarkMode)}
		>
			{isDarkMode ? <SunDim size={23} /> : <Moon size={23} />}
		</button>
	)
}

export default ColorTool

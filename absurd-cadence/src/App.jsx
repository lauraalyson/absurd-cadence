import clsx from 'clsx'
import { useState } from 'react'
import ColorTool from './Customize/ColorTool'
import Body from './Layout/Body/Body'
import Header from './Layout/Header'

function App() {
	const [isDarkMode, setIsDarkMode] = useState(true)
	const [category, setCategory] = useState([])

	const handleSetCategory = (title) => {
		if (category.includes(title)) {
			setCategory(category.filter((item) => item !== title))
		} else {
			setCategory([...category, title])
		}
	}

	return (
		<div
			className={clsx(
				'cursor-default w-[100%] h-[100vh] transition-all',
				isDarkMode ? 'bg-[#191716]' : 'bg-[#F0F0EA]'
			)}
		>
			<Header
				category={category}
				setCategory={handleSetCategory}
				isDarkMode={isDarkMode}
			/>
			<Body category={category} />
			<ColorTool isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

			<div className='rounded m-3 p-3 border bg-[#F0F0EA] text-[#191716] w-44'>
				Dark Mode
			</div>
			<div className='m-3 p-3 rounded border bg-[#191716] text-[#F0F0EA] w-44'>
				Light Mode
			</div>
		</div>
	)
}

export default App

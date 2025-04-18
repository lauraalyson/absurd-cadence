import clsx from 'clsx'
import { useState } from 'react'
import Body from './Layout/Body/Body'
import Footer from './Layout/Footer'
import Header from './Layout/Header/Header'

function App() {
	const [isDarkMode, setIsDarkMode] = useState(true)
	const [isChaosMode, setIsChaosMode] = useState(false)
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
				'cursor-default w-full h-full transition-all',
				isDarkMode
					? 'bg-[#191716] text-[#FAFFFD]'
					: 'bg-[#FAFFFD] text-[#191716]'
			)}
		>
			<Header
				category={category}
				setCategory={handleSetCategory}
				isChaosMode={isChaosMode}
				setIsChaosMode={setIsChaosMode}
				isDarkMode={isDarkMode}
			/>
			<Body
				category={category}
				isDarkMode={isDarkMode}
				isChaosMode={isChaosMode}
			/>
			<Footer />
		</div>
	)
}

export default App

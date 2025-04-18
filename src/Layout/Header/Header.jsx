import Navigation from './Navigation'
import OrderBlocks from './OrderBlocks'
import Title from './Title'

const Header = ({
	isDarkMode,
	isChaosMode,
	setIsChaosMode,
	category,
	setCategory,
}) => {
	return (
		<div className='text-center flex p-8 mb-3 w-full font-bold flex-row justify-center md:justify-between items-center'>
			<Title />
			<Navigation
				isDarkMode={isDarkMode}
				category={category}
				setCategory={setCategory}
			/>
			<OrderBlocks isChaosMode={isChaosMode} setIsChaosMode={setIsChaosMode} />
		</div>
	)
}

export default Header

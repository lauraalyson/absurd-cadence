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
		<div className='flex p-8 fixed w-full font-medium justify-between items-center'>
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

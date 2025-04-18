import { GridFour, SquaresFour } from '@phosphor-icons/react'
import clsx from 'clsx'

const OrderBlocks = ({ isChaosMode, setIsChaosMode }) => {
	return (
		<div id='chaos-mode' className='w-36 flex justify-end'>
			<button
				onClick={() => setIsChaosMode(!isChaosMode)}
				className={clsx(
					'hidden md:flex items-center justify-center w-8 h-8 hover:bg-[#646cff] hover:text-[#FAFFFD] rounded transition-all'
				)}
			>
				{isChaosMode ? <GridFour size={26} /> : <SquaresFour size={26} />}
			</button>
		</div>
	)
}

export default OrderBlocks

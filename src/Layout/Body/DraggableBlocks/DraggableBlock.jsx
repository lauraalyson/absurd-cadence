// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'
import Block from './Block'

const DraggableBlock = ({ category, props }) => {
	const { position } = props
	const { x, y } = position

	return (
		<motion.div
			drag
			dragMomentum={false}
			// whileDrag={{ scale: 1.1 }}
			className='absolute cursor-grab active:z-50 selection:z-50'
			style={{ top: y, left: x }}
			initial={{ opacity: 0, x: 100, y: 100 }}
			animate={{ duration: 2, opacity: 1, x: x, y: y }}
			exit={{ opacity: 0, x: 100, y: 100 }}
		>
			<Block category={category} props={props} />
		</motion.div>
	)
}

export default DraggableBlock

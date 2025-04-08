// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'
import Block from './Block'

const DraggableBlock = ({ category, props }) => {
	const { position } = props
	const { x, y } = position

	return (
		<motion.div
			drag
			className='absolute cursor-grab active:z-50 selection:z-50'
			style={{ top: y, left: x }}
		>
			<Block category={category} props={props} />
		</motion.div>
	)
}

export default DraggableBlock

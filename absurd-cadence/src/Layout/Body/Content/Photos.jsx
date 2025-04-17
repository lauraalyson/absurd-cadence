import { ArrowCircleLeft, ArrowCircleRight } from '@phosphor-icons/react'
import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'

import photo1 from './../../../assets/photos/photo_1.png'
import photo2 from './../../../assets/photos/photo_2.png'
import photo3 from './../../../assets/photos/photo_3.png'
import photo4 from './../../../assets/photos/photo_4.png'

const Photos = () => {
	const items = [photo1, photo2, photo3, photo4]
	const [selectedIndex, setSelectedIndex] = useState(0)
	const [direction, setDirection] = useState(1)

	function wrapIndex(min, max, val) {
		const range = max - min
		return ((val - min + range) % range) + min
	}

	function setSlide(newDirection) {
		const nextIndex = wrapIndex(0, items.length, selectedIndex + newDirection)
		setSelectedIndex(nextIndex)
		setDirection(newDirection)
	}

	const currentImg = items[selectedIndex]

	return (
		<div className='w-full flex flex-col justify-center align-middle gap-6'>
			<div className='w-full h-96 flex items-center justify-center relative'>
				<AnimatePresence
					custom={direction}
					initial={false}
					mode='popLayout'
					className='bg-gray-700'
				>
					<img
						key={currentImg}
						src={currentImg}
						alt={`img-${currentImg}`}
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
							position: 'absolute',
							top: 0,
							left: 0,
						}}
					/>
				</AnimatePresence>
			</div>
			<div className='flex justify-between'>
				<div className='text-xl font-semibold'>Brooklyn, NY</div>
				<div>
					<button
						aria-label='Previous'
						onClick={() => setSlide(-1)}
						className='cursor-pointer transition-color active:text-[#B1C726]'
					>
						<ArrowCircleLeft size={26} />
					</button>
					<button
						aria-label='Next'
						onClick={() => setSlide(1)}
						className='cursor-pointer transition-color active:text-[#B1C726]'
					>
						<ArrowCircleRight size={26} />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Photos

import clsx from 'clsx'

const Block = ({ category, props }) => {
	const { type, className, body } = props

	const isNotActive = () => !category?.includes(type) && category?.length

	return (
		<div
			className={clsx(
				'rounded p-3 transition-opacity h-fit backdrop-blur drop-shadow-lg',
				className,
				isNotActive() ? '!opacity-5 !z-0' : 'z-10'
			)}
		>
			<div>{body}</div>
		</div>
	)
}

export default Block

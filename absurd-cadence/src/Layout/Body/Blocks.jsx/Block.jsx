import clsx from 'clsx'

const Block = ({ className, category, title, body, type }) => {
	const isNotActive = () => !category?.includes(type) && category?.length
	return (
		<div
			className={clsx(
				'rounded p-3 transition-all',
				className,
				isNotActive() && '!opacity-10'
			)}
		>
			<div>{title}</div>
			<div>{body}</div>
		</div>
	)
}

export default Block

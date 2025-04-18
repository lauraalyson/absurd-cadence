import { gigasheet_link } from "../../../assets/links"

const CurrentlyAt = () => {
	return (
		<div className='font-semibold'>
			<div className='text-base md:text-xl  pb-3'>
				Currently at{' '}
				<a
					href={gigasheet_link}
					target='__blank'
					className='underline underline-offset-3 hover:underline-offset-2'
				>
					Gigasheet
				</a>
			</div>
			<div className='text-xl md:text-2xl py-3'>
				Crafting performant, AI-driven spreadsheets, built for scale.
			</div>
		</div>
	)
}

export default CurrentlyAt

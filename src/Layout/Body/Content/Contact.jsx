import ContactLink from './ContactLink'

const Contact = () => {
	const titles = ['Resume', 'Github', 'LinkedIn', 'Email']
	return (
		<div>
			{titles.map((title) => {
				return <ContactLink title={title} link='' />
			})}
		</div>
	)
}

export default Contact

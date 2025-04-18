import {
	EnvelopeSimple,
	GithubLogo,
	LinkedinLogo,
	ReadCvLogo,
} from '@phosphor-icons/react'

const ContactLink = ({ title, link }) => {
	const getIcon = () => {
		switch (title) {
			case 'Email':
				return <EnvelopeSimple size={26} />
			case 'LinkedIn':
				return <LinkedinLogo size={26} />
			case 'Github':
				return <GithubLogo size={26} />
			case 'Resume':
				return <ReadCvLogo size={26} />
		}
	}

	return (
		<div>
			<a
				href={link}
				target='__blank'
				className='cursor-pointer font-semibold text-base sm:text-xl flex gap-2 align-middle items-center'
			>
				{getIcon()}
				{title}
			</a>
		</div>
	)
}
export default ContactLink

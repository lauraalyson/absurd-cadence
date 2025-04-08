import { AsteriskSimple, Code, Spiral, Steps } from '@phosphor-icons/react'
import clsx from 'clsx'
import {
	email_link,
	github_link,
	linkedin_link,
	resume_link,
} from '../../assets/links'
import ContactLink from './Content/ContactLink'
import CurrentlyAt from './Content/CurrentlyAt'
import Etc from './Content/Etc'
import Goodbye from './Content/Goodbye'
import PastWork from './Content/PastWork'
import Photos from './Content/Photos'
import Skills from './Content/Skills'
import DraggableBlock from './DraggableBlocks/DraggableBlock'

const Body = ({ category, isDarkMode, isChaosMode }) => {
	const blocks = [
		{
			key: 'Spiral',
			body: <Spiral size={32} />,
			type: 'None',
			position: { x: '60%', y: '12%' },
			className: `!w-14 ${isDarkMode ? 'bg-[#FAFFFD] text-[#191716]' : 'bg-[#191716] text-[#FAFFFD]'}`,
		},
		{
			key: 'Skills',
			body: <Skills />,
			type: 'About',
			position: { x: '30%', y: '10%' },
			className: `${isChaosMode && '!w-fit'} !flex-grow bg-[#BBC623] active:!ring-[#BBC623] active:ring`,
		},
		{
			key: 'To Do:',
			body: <PastWork />,
			type: 'Work',
			position: { x: '30%', y: '20%' },
			className: 'bg-[#646cff] !w-96 active:!ring-[#646cff] active:ring',
		},
		{
			key: 'Etc',
			body: <Etc />,
			type: 'About',
			position: { x: '60%', y: '60%' },
			className: `${isChaosMode && '!w-fit'} !w-96 h-44 bg-[#BBC623] active:!ring-[#BBC623] active:ring`,
		},
		{
			key: 'Email',
			body: <ContactLink title='Email' link={email_link} />,
			type: 'Contact',
			position: { x: '72%', y: '73%' },
			className: `${isChaosMode && '!w-fit'} bg-[#E43F45] !flex-grow active:!ring-[#E43F45] active:ring`,
		},

		{
			key: 'LinkedIn',
			body: <ContactLink title='LinkedIn' link={linkedin_link} />,
			type: 'Contact',
			position: { x: '20%', y: '74%' },
			className: `${isChaosMode && '!w-fit'} bg-[#E43F45] !flex-grow active:!ring-[#E43F45] active:ring transition-all`,
		},
		{
			key: 'Asterick',
			body: <AsteriskSimple size={32} />,
			type: 'None',
			position: { x: '70%', y: '80%' },
			className: `!w-14 ${isDarkMode ? 'bg-[#FAFFFD] text-[#191716]' : 'bg-[#191716] text-[#FAFFFD]'}`,
		},
		{
			key: 'Currently At',
			body: <CurrentlyAt />,
			type: 'Work',
			position: { x: '30%', y: '55%' },
			className: 'bg-[#646cff] !w-98 active:!ring-[#646cff] active:ring',
		},
		{
			key: 'Resume',
			body: <ContactLink title='Resume' link={resume_link} />,
			type: 'Contact',
			position: { x: '15%', y: '30%' },
			className: `${isChaosMode && '!w-fit'} bg-[#E43F45] !flex-grow active:!ring-[#E43F45] active:ring`,
		},
		{
			key: 'Code',
			body: <Code size={32} />,
			type: 'None',
			position: { x: '15%', y: '70%' },
			className: `!w-14 ${isDarkMode ? 'bg-[#FAFFFD] text-[#191716]' : 'bg-[#191716] text-[#FAFFFD]'}`,
		},
		{
			key: 'Github',
			body: <ContactLink title='Github' link={github_link} />,
			type: 'Contact',
			position: { x: '60%', y: '70%' },
			className: `${isChaosMode && '!w-fit'} bg-[#E43F45] !flex-grow  active:!ring-[#E43F45] active:ring`,
		},
		{
			key: 'Photos',
			body: <Photos />,
			type: 'About',
			position: { x: '60%', y: '10%' },
			className:
				'bg-[#FAFFFD] text-[#191716] !w-98  active:!ring-[#FAFFFD] active:ring',
		},

		{
			key: 'Goodbye',
			body: <Goodbye size={32} />,
			type: 'None',
			position: { x: '40%', y: '80%' },
			className: `${isChaosMode && '!w-fit'} !flex-grow bg-[#BBC623] active:!ring-[#BBC623] active:ring`,
		},
		{
			key: 'Steps',
			body: <Steps size={32} />,
			type: 'None',
			position: { x: '50%', y: '40%' },
			className: `${isDarkMode ? 'bg-[#FAFFFD] text-[#191716]' : 'bg-[#191716] text-[#FAFFFD]'}`,
		},
	]

	return (
		<div
			id='body'
			className='py-28 flex w-full h-full justify-center items-center align-middle'
		>
			{isChaosMode ? (
				<div className='h-full w-full overflow-hidden'>
					{blocks.map((props) => {
						return (
							<DraggableBlock
								key={props.key}
								category={category}
								props={props}
							/>
						)
					})}
				</div>
			) : (
				<div className='w-96 flex flex-wrap gap-4 justify-between'>
					{blocks.map(({ key, className, type, body }) => {
						return (
							<div
								key={key}
								className={clsx(
									'min-h-14 flex items-center w-fit h-fit p-3 rounded',
									className,
									!category?.includes(type) && category?.length
										? '!opacity-5'
										: 'z-50'
								)}
							>
								{body}
							</div>
						)
					})}
				</div>
			)}
		</div>
	)
}
export default Body

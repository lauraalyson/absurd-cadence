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
import Project from './Content/Etc'
import Availability from './Content/Availability'
import PastWork from './Content/PastWork'
import Photos from './Content/Photos'
import Skills from './Content/Skills'
import DraggableBlock from './DraggableBlocks/DraggableBlock'

import { motion } from 'motion/react'

const Body = ({ category, isChaosMode }) => {
	const blocks = [
		{
			key: 'Spiral',
			body: <Spiral size={32} />,
			type: 'None',
			position: { x: '22%', y: '17%' },
			className: '!w-16 bg-[#FAFFFD] text-[#191716]',
		},
		{
			key: 'Skills',
			body: <Skills />,
			type: 'About',
			position: { x: '27%', y: '14%' },
			className: `${isChaosMode && '!w-fit'} !flex-grow bg-[#B1C726] active:!ring-[#B1C726] active:ring`,
		},
		{
			key: 'To Do:',
			body: <PastWork />,
			type: 'Work',
			position: { x: '20%', y: '20%' },
			className:
				'min-w-96 bg-[#646cff] !w-full active:!ring-[#646cff] active:ring',
		},
		{
			key: 'Project',
			body: <Project />,
			type: 'About',
			position: { x: '27%', y: '45%' },
			className: `!w-full h-44 bg-[#B1C726] active:!ring-[#B1C726] active:ring`,
		},
		{
			key: 'Email',
			body: <ContactLink title='Email' link={email_link} />,
			type: 'Contact',
			position: { x: '74%', y: '53%' },
			className: `${isChaosMode && '!w-fit'} bg-[#E43F45] !flex-grow active:!ring-[#E43F45] active:ring`,
		},

		{
			key: 'LinkedIn',
			body: <ContactLink title='LinkedIn' link={linkedin_link} />,
			type: 'Contact',
			position: { x: '17%', y: '70%' },
			className: `${isChaosMode && '!w-fit'} bg-[#E43F45] !flex-grow active:!ring-[#E43F45] active:ring transition-all`,
		},
		{
			key: 'Asterick',
			body: <AsteriskSimple size={32} />,
			type: 'None',
			position: { x: '60%', y: '80%' },
			className: '!w-16 bg-[#FAFFFD] text-[#191716]',
		},
		{
			key: 'Currently At',
			body: <CurrentlyAt />,
			type: 'Work',
			position: { x: '42%', y: '47%' },
			className: 'bg-[#646cff] !w-full active:!ring-[#646cff] active:ring',
		},
		{
			key: 'Resume',
			body: <ContactLink title='Resume' link={resume_link} />,
			type: 'Contact',
			position: { x: '10%', y: '30%' },
			className: `${isChaosMode && '!w-fit'} bg-[#E43F45] !flex-grow active:!ring-[#E43F45] active:ring`,
		},
		{
			key: 'Code',
			body: <Code size={32} />,
			type: 'None',
			position: { x: '15%', y: '50%' },
			className: '!w-16 bg-[#FAFFFD] text-[#191716]',
		},
		{
			key: 'Github',
			body: <ContactLink title='Github' link={github_link} />,
			type: 'Contact',
			position: { x: '60%', y: '72%' },
			className: `${isChaosMode && '!w-fit'} bg-[#E43F45] !flex-grow  active:!ring-[#E43F45] active:ring`,
		},
		{
			key: 'Photos',
			body: <Photos />,
			type: 'About',
			position: { x: '45%', y: '10%' },
			className:
				'bg-[#FAFFFD] text-[#191716] !w-full active:!ring-[#FAFFFD] active:ring',
		},

		{
			key: 'Availability',
			body: <Availability size={32} />,
			type: 'None',
			position: { x: '34%', y: '76%' },
			className: `${isChaosMode && '!w-fit'} !flex-grow bg-[#B1C726] active:!ring-[#B1C726] active:ring`,
		},
		{
			key: 'Steps',
			body: <Steps size={32} />,
			type: 'None',
			position: { x: '50%', y: '45%' },
			className: '!w-16 bg-[#FAFFFD] text-[#191716]',
		},
	]

	return (
		<div
			id='body'
			className='pt-28 pb-8 flex w-full h-full justify-center items-center align-middle'
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
				<div className='w-1/3 min-w-96 max-w-lg flex flex-wrap gap-4 justify-between'>
					{blocks.map(({ key, className, type, body }) => {
						return (
							<motion.div
								key={key}
								className={clsx(
									'min-h-16 flex items-center w-fit h-fit p-4 rounded',
									className,
									!category?.includes(type) && category?.length
										? '!opacity-5'
										: 'z-50'
								)}
							>
								{body}
							</motion.div>
						)
					})}
				</div>
			)}
		</div>
	)
}
export default Body

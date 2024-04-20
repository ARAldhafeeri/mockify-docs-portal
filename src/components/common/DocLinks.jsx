import React from 'react'
import DocLink from './DocLink'
import { AiFillControl, AiFillPlayCircle, AiFillPlaySquare, AiFillStar, AiOutlineBuild , AiOutlineApi, AiOutlineDatabase, AiOutlineDeploymentUnit, AiOutlineFunction, AiOutlineFundProjectionScreen, AiOutlineLoading3Quarters, AiOutlineRadiusSetting, AiOutlineTransaction, AiOutlineUnderline, AiOutlineUser, AiTwotoneDatabase } from 'react-icons/ai'
import { DOCS_LINKS } from '../../constants'
export default function DocLinks() {
  return (
    <div className='pt-[100px] uppercase bg-[#0D1117]'>
        <DocLink link={DOCS_LINKS.quick} text="Quick start guide" icon={<AiFillPlaySquare size={15} color="#00df9a" />} />
        <DocLink link={DOCS_LINKS.user} text="Users"  icon={<AiOutlineUser size={15} color="#00df9a" />} />
        <DocLink link={DOCS_LINKS.project} text="Projects"  icon={<AiOutlineFundProjectionScreen size={15} color="#00df9a" />} />
        <DocLink link={DOCS_LINKS.resource} text="Resources"  icon={<AiOutlineRadiusSetting size={15} color="#00df9a" />} />
        <DocLink link={DOCS_LINKS.data}  text="Mock Data"  icon={<AiOutlineDatabase size={15} color="#00df9a" />} />
        <DocLink link={DOCS_LINKS.policy}  text="Policies"  icon={<AiFillControl size={15} color="#00df9a" />} />
        <DocLink link={DOCS_LINKS.endpoint}  text="Endpoints"  icon={<AiOutlineApi size={15} color="#00df9a" />} />
        <DocLink link={DOCS_LINKS.edge}  text="Edge Functions"  icon={<AiOutlineFunction size={15} color="#00df9a" />} />
        <DocLink link={DOCS_LINKS.deployment}  text="Deployment"  icon={<AiOutlineDeploymentUnit size={15} color="#00df9a" />} />
        <DocLink link={DOCS_LINKS.cache} text="Cache"  icon={<AiOutlineRadiusSetting size={15} color="#00df9a" />} />
        <DocLink link={DOCS_LINKS.swagger} text="Swagger"  icon={<AiOutlineUnderline size={15} color="#00df9a" />} />
        <DocLink link={DOCS_LINKS.event}  text="Events"  icon={<AiOutlineTransaction size={15} color="#00df9a" />} />
        <DocLink link={DOCS_LINKS.websocket} text="Websockets"  icon={<AiOutlineBuild  size={15} color="#00df9a" />} />
        {/* change log always last */}
        <DocLink link={DOCS_LINKS.changelog}  text="Change Log"  icon={<AiOutlineLoading3Quarters size={15} color="#00df9a" />} />
    </div>
  )
}

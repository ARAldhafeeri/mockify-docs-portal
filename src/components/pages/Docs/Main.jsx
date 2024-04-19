import React from 'react';
import DocCard from '../../common/Card/DocCard';
import Divider from '../../common/Divider.jsx';
import { DOCS_LINKS } from '../../../constants';
import { AiFillDingtalkSquare, AiOutlineDeploymentUnit, AiOutlineFundProjectionScreen, AiOutlineTransaction, AiOutlineUserSwitch, AiTwotoneApi, AiTwotoneControl, AiTwotoneDatabase, AiTwotoneProject } from 'react-icons/ai';
import withImage from '../../../assets/with.png';
import withoutImage from '../../../assets/without.png';

export default function Docs() {
  return (
    <div className='bg-[#0D1117]'>
      <h1>Mockify.io Documentation</h1>
      <p>Welcome to the Mockify.io docs. This documentation is your comprehensive guide, offering all the essential information required to initiate your journey with Mockify.io. Whether you're a seasoned developer or a newcomer, these docs will pave the way for a seamless experience, empowering you to harness the full potential of Mockify.io's capabilities. Dive in and discover the key insights that will propel your projects to new heights. In this guide we are going to explore API First design through the comparing implmentation first vs API first</p>
      <h1>Implmentation First</h1>
      <img src={withoutImage} alt="implmentation-first" width={400}  className='m-5 drop-shadow-xl p-2 rounded-xl'/>
      <p>The Code-First approach involves developing the application code before designing the API. Developers focus on implementing the functionality and then expose APIs based on the code.</p>
      <h1 >Advantages</h1>
      <ul className='list-disc list-inside'>
        <li>Quick start and Flexibility</li>
        <li>Iterative development without API constraints</li>
      </ul>
      <h1 >Disadvantages</h1>
      <ul className='list-disc list-inside'>
        <li>potential for inconsistencies and lack of documentation</li>
        <li>Collaboration challenges for third-party developers</li>
        <li>Lack of Clarity in design</li>
      </ul>
      <h1>API First</h1>
      <img src={withImage} alt="implmentation-first" width={400}  className='m-5 drop-shadow-xl p-2 rounded-xl'/>
      <p>The API-First approach prioritizes designing the API before writing the application code. Developers create a clear API specification, defining endpoints, data formats, and interactions before any implementation. Mockify.io unblock involved teamsby enabling developers to design, create mock APIs then start with core and interface implmentatation for the actual API, this allow change to be introduce at the mock change rather than after deploying which increase the development speed greatly.</p>
      <h1 >Advantages</h1>
      <ul className='list-disc list-inside'>
        <li>Enhanced team collaboration and concurrent development</li>
        <li>Well-defined interface from the outset</li>
      </ul>
      <h1 >Disadvantages</h1>
      <ul className='list-disc list-inside'>
        <li>New design approach may be resisted</li>
        <li>Changes to actual APIs may require chante to mock apis - solution : just create new mock APIs.</li>
      </ul>
      
      <Divider />
      <h1>Products</h1>
      <div className='grid gap-4 grid-flow-row-dense md:grid-cols-2 grid-cols-1 pb-11'>
        <DocCard
          h1="Manage Mockify Users"
          icon={<AiOutlineUserSwitch size={40} color="#00df9a" />}
          link={DOCS_LINKS.user}
          paragraph="Effortlessly handle user management in Mockify. This guide empowers you to add, remove, and modify user details with ease, putting you in control of your Mockify user environment."
        />

        <DocCard
          h1="Manage Mockify Projects"
          icon={<AiTwotoneProject size={40} color="#00df9a" />}
          link={DOCS_LINKS.project}
          paragraph="Take charge of your projects on Mockify with this comprehensive guide. Learn to create, edit, and delete projects seamlessly, allowing you to organize your work effectively and efficiently."
          />

        <DocCard
          h1="Define Resources with Schema"
          icon={<AiFillDingtalkSquare size={40} color="#00df9a" />}
          link={DOCS_LINKS.resource}
          paragraph="Craft your resources with precision using schemas. This guide helps you define the structure and attributes of your data, allowing you to tailor Mockify to your specific needs."
          />

        <DocCard
          h1="Manage Mock Data"
          icon={<AiTwotoneDatabase size={40} color="#00df9a" />}
          link={DOCS_LINKS.data}
          paragraph="This guide walks you through the process of creating, modifying, and organizing mock data, enhancing your testing and development processes."
          />

        <DocCard
          h1="Dynamic Policies"
          icon={<AiTwotoneControl size={40} color="#00df9a" />}
          link={DOCS_LINKS.policy}
          paragraph="Guide you through setting dynamic policies to govern access in mock endpoints, matching actual endpoint access control requirements."
          />

        <DocCard
          h1="Auto Generated Endpoints"
          icon={<AiTwotoneApi size={40} color="#00df9a" />}
          link={DOCS_LINKS.endpoint}
          paragraph="Learn how Mockify auto-generates endpoints with this guide."
          />

        <DocCard
          h1="Edge Functions"
          icon={<AiOutlineFundProjectionScreen size={40} color="#00df9a" />}
          link={DOCS_LINKS.edge}
          paragraph="Explore the power of edge functions with this comprehensive guide. Enhance your Mockify experience with dynamic, serverless functions that cater to your unique needs."
          />
        <DocCard
          h1="Deploy self-managed Mockify"
          icon={<AiOutlineDeploymentUnit size={40} color="#00df9a" />}
          link={DOCS_LINKS.deployment}
          paragraph="The doc provide simple way to deploy mockify as self-managed service."
          />

      </div>
    </div>
  );
}

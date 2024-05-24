import React from "react";
import {
  createMemoryRouter,
  Routes,
  Route,
} from "react-router-dom";

import DocsPage from "./components/pages/Docs/Main";
import { DOCS_LINKS, DOCS_LINKS_LIST } from "./constants";
import Section from "./components/pages/Docs/Section";
import DocsLayout from "./components/containers/DocsLayout";

const Data = () => <Section link={DOCS_LINKS_LIST.DATA} />;
const Deployment = () => <Section link={DOCS_LINKS_LIST.DEPLOYMENT} />;
const Edge = () => <Section link={DOCS_LINKS_LIST.EDGE} />;
const Endpoint = () =><Section link={DOCS_LINKS_LIST.ENDPOINT} />;
const Policy = () => <Section link={DOCS_LINKS_LIST.POLICY} />;
const Project = () => <Section link={DOCS_LINKS_LIST.PROJECT} />;
const Quick = () => <Section link={DOCS_LINKS_LIST.QUICK} />;
const Users = () => <Section link={DOCS_LINKS_LIST.USERS} />;
const Resources = () => <Section link={DOCS_LINKS_LIST.RESOURCE} />;
const ChangeLog = () => <Section link={DOCS_LINKS_LIST.CHNAGELOG} />;
const Swagger = () => <Section link={DOCS_LINKS_LIST.SWAGGER} />;
const Cache = () => <Section link={DOCS_LINKS_LIST.CACHE} />;
const Event = () => <Section link={DOCS_LINKS_LIST.EVENT} />;
const Websocket = () => <Section link={DOCS_LINKS_LIST.WEBSOCKET} />;

const withDocsLayout = (e) => (
  <DocsLayout>
    {e}
  </DocsLayout>
);

const MainRouter = createMemoryRouter([
{
    path: "/mockify-docs-portal",
    element: withDocsLayout(<DocsPage />),
}, 
{
    path: DOCS_LINKS.data,
    element: withDocsLayout(<Data />),
},
{
    path: DOCS_LINKS.deployment,
    element: withDocsLayout(<Deployment />)
},
{
    path: DOCS_LINKS.edge,
    element: withDocsLayout(<Edge />)
},
{
    path: DOCS_LINKS.endpoint,
    element: withDocsLayout(<Endpoint />)
},
{
    path: DOCS_LINKS.policy,
    element: withDocsLayout(<Policy />)
},
{
    path: DOCS_LINKS.project,
    element: withDocsLayout(<Project />)
},
{
    path: DOCS_LINKS.quick,
    element: withDocsLayout(<Quick />)
},
{
    path: DOCS_LINKS.user,
    element: withDocsLayout(<Users />)
},
{
    path: DOCS_LINKS.resource,
    element: withDocsLayout(<Resources />)
},
{
    path: DOCS_LINKS.swagger,
    element: withDocsLayout(<Swagger />)
},
{
    path: DOCS_LINKS.cache,
    element: withDocsLayout(<Cache />)
},
{
    path: DOCS_LINKS.event,
    element: withDocsLayout(<Event />)
},
{
    path: DOCS_LINKS.websocket,
    element: withDocsLayout(<Websocket />)
},
{
    path: DOCS_LINKS.changelog,
    element: withDocsLayout(<ChangeLog />)
}, 

], {
    initialEntries: ["/mockify-docs-portal"],
    initialIndex: 1,
  });

export default MainRouter;
import React from 'react'

import Html from '../svgs/Html.svg'
import Css from '../svgs/css.svg'
import JavaScript from '../svgs/javascript.svg'
import Bootstrap from '../svgs/bootstrap.svg'
import Auth0 from '../svgs/auth0.svg'
import Docker from '../svgs/docker-3.svg'
import Express from '../svgs/express-109.svg'
import Git from '../svgs/git-icon.svg'
import Jest from '../svgs/jest-2.svg'
import Jwt from '../svgs/jwt-3.svg'
import Material from '../svgs/material-ui.svg'
import Materialize from '../svgs/materialize.svg'
import Mongodb from '../svgs/mongodb-icon-1.svg'
import Mysql from '../svgs/mysql-6.svg'
import Next from '../svgs/next-js.svg'
import Node from '../svgs/node-js-brands.svg'
import Npm from '../svgs/npm.svg'
import React2 from '../svgs/react-2.svg'
import ReactRouter from '../svgs/reactrouter.svg'
import Typescript from '../svgs/typescript.svg'
import Tailwind from '../svgs/tailwind.svg'
import Mapa from '../svgs/Mapa.svg'
import Phone from '../svgs/Phone.svg'
import Gmail from '../svgs/Gmail.svg'


export default function About({type, h=60, w=60}) {
	let Component
	switch (type) {
		case "HTML": 
			Component = Html;
			break;
		case "CSS":
			Component = Css;
			break;
		case "JavaScript":
			Component = JavaScript;
			break;
		case "Typescript":
			Component = Typescript;
			break;
		case "Bootstrap":
			Component = Bootstrap;
			break;
		case "Materialize":
			Component = Materialize;
			break;
		case "Tailwind":
			Component = Tailwind;
			break;
		case "Material-UI":
			Component = Material;
			break;
		case "Node JS":
			Component = Node;
			break;
		case "React JS":
			Component = React2;
			break;
		case "Next JS":
			Component = Next;
			break;
		case "React Router DOM":
			Component = ReactRouter;
			break;
		case "MongoDB":
			Component = Mongodb;
			break;
		case "Express":
			Component = Express;
			break;
		case "JWT":
			Component = Jwt;
			break;
		case "Auth0":
			Component = Auth0;
			break;
		case "NPM":
			Component = Npm;
			break;
		case "GIT":
			Component = Git;
			break;
		case "Docker":
			Component = Docker;
			break;
		case "Jest":
			Component = Jest;
			break;
		case "MySQL":
			Component = Mysql;
			break;
		case "mapa":
			Component = Mapa;
			break;
		case "phone":
			Component = Phone;
			break;
		case "gmail":
			Component = Gmail;
			break;
		default:
			Component = Html;
			break;
	}
	return <img src={Component}  style={{width:`${w}px`, height:`${h}px`}} alt="logoSkill	"/>
}

//style={{height:h,width:w}}
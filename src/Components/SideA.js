import React from 'react'

export default function SideA(props) {
	console.log(props)
	return (
		<div className="sideA">
		    <div className="content">
		      <div className="img" style={{backgroundColor: props.img}}></div>
		      <span className="title">SOBRE MI</span>
		      <span className="text my">
		        pari qui intercindint pari navigabile Tauri 
		        intercendint late minutis palmite frugibus 
		        terra Isauria ad quam solis uberi medion flumen
		         dives omnibhus mediam intersinvindt quen 
		         omnibhus mediam intersinvindt quen
		      </span>
		      <span className="title">DATOS PERSONALES</span>
		      <span className="sub-title">FECHA DE NACIMIENTO</span>
		      <span className="text">02-11-1998</span>
		      <span className="sub-title">NACIONALIDAD</span>
		      <span className="text">Venezolano</span>
		    </div>
		 </div>
	)
}
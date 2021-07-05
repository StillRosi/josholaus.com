import React from 'react'

export default function TitleSubheading(props: any) {
	return (
		<h1 className={`${props.className} text-xl font-light`}>{props.children}</h1>
	)
}

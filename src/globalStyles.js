import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	*:selection {
		background: ${p => p.theme.accent};
		color: ${p => p.theme.text};
	}

	html {
		min-height: 100%;
	}

	body {
		height: 100%;
		min-height: 100%;
		padding-bottom: 5em;
		background: ${p => p.theme.background};
		color: ${p => p.theme.text};
		font: 18px "Inter", monospace;
	}

	#___gatsby {
		min-height: 100%;
	}
	#gatsby-focus-wrapper {
		min-height: 100%;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		color: inherit;
		line-height: 1.2;
		font-weight: 500;
		word-break: break-word;
	}

	ol, ul {
		margin: 1em 2em;
	}

	p {
		margin: 1em 0;
		&:first-child {
			margin-top: 0;
		}
	}

	a {
		text-decoration: none; color: ${p => p.theme.link};
		transition: all 300ms;
		font-weight: bold;
	}

	img {
		max-width: 100%;
	}

	hr {
		width: 60%;
		height: 1px;
		margin: 2em auto;
		border: none;
		background: ${p => p.theme.border};
	}
	
	pre {
		background: ${p => p.theme.backgroundSecondary};
		border-radius: .3em;
		padding: 1em;
		font-size: .8em;
		color: ${p => p.theme.text};
		margin: 1em 0;
	}
	:not(pre) > code {
		display: inline-block;
		margin: .2em 0;
		padding: .1em .4em;
		font-size: .8em;
		font-weight: lighter;
		background: ${p => p.theme.backgroundSecondary};
	}
	
	kbd {
		display: inline-block;
		margin: .2em;
		padding: 0.1em 0.4em;
		background: white;
		background-image: linear-gradient(white, #EEE);
		box-shadow: 0 3px 0 #777;
		border: 1px solid ${p => p.theme.border};
		border-radius: 4px;
		color: #555;
		letter-spacing: -1px;
		font-size: .9em;
	}
	
	blockquote {
		margin: 1em 2em;
		padding: 1em;
		font-size: .9em;
		text-style: italic;
		position: relative;
		z-index: 1;

		&.note {
			border-left: 3px solid ${p => p.theme.accent};
		}

		&:before {
			position: absolute;
			top: 0;
			left: -1rem;
			content: "\u201D";
			font-size: 250px;
			line-height: 1;
			color: #CCC;
			z-index: -1;
		}
	}

	figcaption {
    text-align: center;
    font-size: .9em;
    color: #888;
	}
`

import styled from 'styled-components';

const ClockIcon = styled.div`
	color: #000;
	position: relative;
	margin-left: 2px;
	margin-top: 2px;
	width: 15px;
	height: 15px;
	border: solid 1px currentColor;
	border-radius: 8px;

	&:before {
		content: '';
		position: absolute;
		top: 7px;
		left: 7px;
		width: 5px;
		height: 1px;
		background-color: currentColor;
		transform-origin: 0% 0%;
	}

	&:after {
		content: '';
		position: absolute;
		top: 2px;
		left: 7px;
		width: 1px;
		height: 6px;
		background-color: currentColor;
		transform-origin: 0% 0%;
	}
`;

export default ClockIcon;

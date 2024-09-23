import styled from 'styled-components';

const DividerWrapper = styled.div<{ $thickness?: string; color?: string; $hasChildren?: boolean; }>`
	display: flex;
	align-items: center;
	text-align: center;
	width: 100%;
	position: relative;

	${({ $hasChildren, $thickness, color }) =>
		!$hasChildren && `border-top: ${$thickness || '1px'} solid ${color || '#000'};`}

	${({ $hasChildren, $thickness, color }) =>
		$hasChildren &&
		`
          &::before,
          &::after {
            content: '';
            flex: 1;
            border-top: ${$thickness || '1px'} solid ${color || '#000'};
          }

    &::before {
      margin-right: 10px;
    }

    &::after {
      margin-left: 10px;
    }
  `}

  span {
		padding: 0 10px;
		color: ${({ color }) => color || '#000'};
	}
`;

interface DividerProps {
	children?: React.ReactNode;
	thickness?: string;
	color?: string;
	width?: string;
}

const Divider = ({ children, thickness, color }: DividerProps) => {
	return (
		<DividerWrapper $thickness={thickness} color={color} $hasChildren={!!children}>
			{children && <span>{children}</span>}
		</DividerWrapper>
	);
};

export default Divider;

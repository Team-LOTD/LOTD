import styled from "styled-components";

const StyledLogo = styled.img`
    width: 79px;
    height: 28px;
    cursor: pointer;
`;

const Logo = (props) => {
    return (
        <StyledLogo className={props.className} src={props.src} alt={props.alt}>
            {props.children}
        </StyledLogo>
    );
};

export default Logo;

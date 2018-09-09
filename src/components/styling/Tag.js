import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default styled(Link)`
    font-family: 'Space Mono', monospace;
    border: none;
    color: ${props => props.theme.black};
    margin-top: -10px;
    padding: 0;
    margin-bottom: 10px;
    margin-right: 10px;

    &:hover {
        opacity: 1;
        color: ${props => props.theme.main};
        background: transparent;
    }
    &:after {
        display: none;
    }
`

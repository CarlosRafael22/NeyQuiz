import styled, { css } from 'styled-components'
import db from '../../../db.json'

export const OptionStyle = styled.a`
    display: block;
    border-radius: 0.5rem;
    background-color: ${({ theme, isCorrect }) => {
        if (isCorrect === undefined) return `${theme.colors.primary}40`
        return isCorrect ? db.theme.colors.success : db.theme.colors.wrong
    }};
    margin: 1rem 0;
    padding: 0.5rem;
    outline: 0;
    text-decoration: none;

    
    ${({ isCorrect }) => {
        if (isCorrect === undefined) return css`
            cursor: pointer;
            &:hover,
            &:focus {
                opacity: .5;
            }
        `
    }}
    ${({ chosen }) => chosen && css`opacity: .5`}
`
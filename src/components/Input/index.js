  
import styled from 'styled-components'

const InputName = styled.input`
    border-radius:  ${({ theme }) => theme.borderRadius};
    border-color:   ${({ theme }) => theme.colors.secondary};
    background:     ${({ theme }) => theme.colors.mainBg};
    color:          ${({ theme }) => theme.colors.contrastText};
    width: 100%;
    outline: none;
    font-size: 14px;
    margin-bottom:15px;
    padding: 15px;
`;


const Input = ({onChange, placeholder, ...props}) => {
    return (
        <div>
            <InputName 
                placeholder={placeholder}
                onChange={onChange}
                {...props}
                />
        </div>
    )
}

export default Input
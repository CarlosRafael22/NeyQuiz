import styled from 'styled-components'

export const ButtonStyle = styled.button`
    background-color: green;
    border-radius: 0.2rem;
    border: 0;
    padding: 0.8rem;
    cursor: pointer;
    font-size: 18px;
    width: 200px;
`

export const TwitterAnchor = styled.a`
/* Style all font awesome icons */
  display: block;
  padding: 15px;
  margin: 1.5rem auto;
  border-radius: 0.2rem;
  font-size: 16px;
  width: 200px;
  text-align: center;
  text-decoration: none;
  background: #55ACEE;
  color: white;

/* Add a hover effect if you want */
&:hover {
  opacity: 0.7;
}
`
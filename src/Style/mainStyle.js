import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`
 
export const Form = styled.form`
    width: 400px;
    margin-top: 50px;
    box-sizing: border-box;
    margin-bottom: 20px;
`
export const Input = styled.input`
    display: block;
    padding: 10px;
    border: none;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 5px;
    margin: 10px 0;
    outline: none;
    width: 100%;
    `

export const InputSubmit = styled(Input)`
    cursor: pointer;
    font-size: 1em;

    &:hover{
        background-color: #ddd;
    }
`
export const Th = styled.th`
    background: linear-gradient(-45deg, #154297, #1a51b8);
    border-radius: 0 10px;
    padding: 8px 10px;
    margin: 10px;
    text-align: center;
`
export const Td = styled.td`
    background: linear-gradient(-45deg, #154297, #1a51b8);
    border-radius: 0 10px;
    padding: 8px 10px;
    margin: 10px;
    text-align: center;
`
export const Table = styled.table`
    margin-bottom: 40px;
    border-spacing: 8px;
`
export const Button = styled.button`
    padding: 5px 8px;
    border: none;
    background-color: rgb(248, 114, 114);
    border-radius: 0 5px;
    color: #fff;
    cursor: pointer;
    outline: none;
    margin-left: 5px;
    
    &:hover{
        background-color: rgb(245, 84, 84);
    }
`

export const ButtonUpdate = styled(Button)`
    background-color: rgb(38, 121, 230);

    &:hover{
        background-color: rgb(13, 103, 221);
    }
`

export const A = styled.a`
    position: absolute;
    bottom: 20px;
    color: #1dafe4;
    left: calc(50% - 61px);
    text-decoration: none;
    animation-name: moving;
    animation-iteration-count: infinite;
    animation-duration: 8s;

    @keyframes moving {
        50% {
        left: calc(50% - 40px);
    }
`

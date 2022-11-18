import styled from "styled-components"

export const ComponentsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
`

export const ToDoContainerStyled = styled.div`
    width: 50vw;
    max-width: 1200px;
    padding: 15px;
    border-radius: 10px;
    color: black;
    background-color: #f2a57e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    text-align: center;
`

export const InputContainerStyled = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`
export const Button = styled.button`
    width: 50%;
    padding: 10px;
    font-size: 18px;
    border-radius: 5px;
    background-color: #b03c02;
    color: white;
    cursor: pointer;

`
export const Title = styled.h2`
    width: 100%;
    font-size: 24px;
`

export const Input = styled.input`
    padding: 10px;
    width: 90%;

    &:focus {
        outline: none;
    } 
`

export const TasksListStyled = styled.ul`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    border-radius: 10px;
    padding: 15px;
    width: 50vw;
    text-align: left;
    background-color: gray;
    margin: 0;
    list-style-type: none;
    gap: 10px;
`

export const TaskStyled = styled.li`
    width: 90%;
`


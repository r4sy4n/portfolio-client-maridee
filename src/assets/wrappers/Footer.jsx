import styled from 'styled-components';

const Wrapper = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

a{
    color: var(--clr-amber);
}
a:hover{
    color: var(--clr-rose);
}
.line{
    border: 2px solid var(--clr-orange);
    padding-right: 4rem;
    margin-bottom: 1.5rem;
}
.subtitle{
    margin-bottom: 1rem;
}
`

export default Wrapper;
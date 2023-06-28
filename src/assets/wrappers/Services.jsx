import styled from 'styled-components';

const Wrapper = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 2rem;
gap: 2rem;

.title{
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin: 1rem 0;
}
.icon{
    color: var(--clr-orange);
    font-size: var(--size-3xl);
}
.line{
    border: 2px solid var(--clr-orange);
    padding-right: 4rem;
    margin-top: 1.5rem;
}
/* xs */
/* @media only screen and (min-width: 475px) {

} */

/* sm */
@media only screen and (min-width: 640px) {
    .grid{
        display: grid;
        grid-template-columns: repeat(2, auto);
        margin: 2rem;
        gap: 2rem;
}
}

/* md */
/* @media only screen and (min-width: 768px) {

} */

/* lg */
/* @media only screen and (min-width: 1024px) {

} */

/* xl */
/* @media only screen and (min-width: 1280px) {

} */

/* 2xl */
/* @media only screen and (min-width: 1536px) {

} */
`

export default Wrapper;
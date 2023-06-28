import styled from 'styled-components';

const Wrapper = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.grid{
    display: flex;
    flex-direction: column;
    gap: var(--size-5xl);
    background: var(--clr-background);
    margin: 2rem 0;
}
.about{
    padding-top: 2rem;
    margin: 1rem 2rem 0 2rem;
}
.description{
    padding: 0 1rem 1rem 0;
    margin: 1rem 2rem 0 2rem;
}
p{
    margin: 0.5rem 0;
}
.pic{
    display: flex;
    align-items: center;
    justify-content: center;
}
.flex{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.btn{
    margin: 1rem 2rem 2rem 2rem;
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
/* @media only screen and (min-width: 640px) {

} */

/* md */
@media only screen and (min-width: 768px) {
    .grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
}

/* lg */
/* @media only screen and (min-width: 1024px) {

} */

/* xl */
@media only screen and (min-width: 1280px) {
        .title{
        font-size: var(--size-5xl);
    }
    .subtitle{
        font-size: var(--size-xl);
    }
    .description{
        font-size: var(--size-xl);
    }
    .btn{
        font-size: var(--size-xl);
    }
}

/* 2xl */
/* @media only screen and (min-width: 1536px) {

} */

`

export default Wrapper;
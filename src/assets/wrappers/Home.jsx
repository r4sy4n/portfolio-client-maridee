import styled from 'styled-components';

const Wrapper = styled.section`
background-image: url(https://images.pexels.com/photos/6446685/pexels-photo-6446685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;   
background-position: center;
background-repeat: no-repeat;
background-size: cover; 
position: relative;

.title{
    margin: 1.5rem 0;
}
.subtitle{
    margin: 1.5rem 0;
}
.description{
    margin: 1.5rem 0;
    color: var(--clr-amber);
}
.btn{
    text-transform: capitalize;
    font-size: var(--size-sm);
}
.hero{
    position: relative;
}
/* xs */
@media only screen and (min-width: 475px) {
    gap: 1.5rem;
    .subtitle{
        font-size: var(--size-lg);
    }
    .title{
        font-size: var(--size-5xl);
    }
    .description{
        font-size: var(--size-base);
    }
    .btn{
        font-size: var(--size-base);
    }
}

/* lg */
@media only screen and (min-width: 1024px) {
    .subtitle{
        font-size: var(--size-2xl);
    }
    .title{
        font-size: var(--size-7xl);
    }
    .description{
        font-size: var(--size-lg);
    }
    .btn{
        font-size: var(--size-lg);
    }
}

/* xl */
@media only screen and (min-width: 1280px) {
    gap: 2rem;
    .btn{
        font-size: var(--size-xl);
    }
}
`

export default Wrapper;
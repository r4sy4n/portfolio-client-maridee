import styled from 'styled-components';

const Wrapper = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
.title{
    margin: 1.5rem 0;
}
.subtitle{
    display: none;
}
.logo-img{
    display: flex;
    justify-content: center;
    align-items: center;
}
.project-section:not(:last-child){
    margin-bottom: 5rem;
}
.projects{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
}
.projects::after{
    content: '';
    background-color: rgba(249, 115, 22, 0.4);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transition: background-color 0.3s;
}
.projects:hover::after{
    background-color: rgba(249, 115, 22, 0.2);
}
.description{
    padding: 0 1rem 1rem 0;
    margin: 1rem 2rem 0 2rem;
    max-width: 60ch;
}
.flex{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
}
.line{
    border: 2px solid var(--clr-orange);
    padding-right: 4rem;
    margin-top: 1.5rem;
}
.btn{
    margin-top: 1.5rem;
}

/* xs */
@media only screen and (min-width: 475px) {
    .description{
        margin: 1.5rem 2rem 0 2rem;
    }
    .btn{
        font-size: var(--size-base);
    }
}

/* sm */
@media only screen and (min-width: 640px) {
    padding: 0 1rem;
    .work{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            'image1 content1'
            'content2 image2'
            'image3 content3'
            'content4 image4';
    }
    .image1{
        grid-area: image1;
    }
    .image2{
        grid-area: image2;
    }
    .image3{
        grid-area: image3;
    }
    .image4{
        grid-area: image4;
    }
    .content1{
        grid-area: content1;
    }
    .content2{
        grid-area: content2;
    }
    .content3{
        grid-area: content3;
    }
    .content4{
        grid-area: content4;
    }
    .title{
        display: none;
    }
    .project-section:not(:last-child){
        margin-bottom: 0;
    }
    .subtitle{
        display: block;
        margin-bottom: 2rem;
    }
}

/* md */
/* @media only screen and (min-width: 768px) {

} */

/* lg */
@media only screen and (min-width: 1024px) {
    .btn{
        font-size: var(--size-lg);
    }
}

/* xl */
/* @media only screen and (min-width: 1280px) {

} */

/* 2xl */
@media only screen and (min-width: 1536px) {
    gap: 2rem;
    .btn{
        font-size: var(--size-xl);
    }
}
`

export default Wrapper;
import styled from 'styled-components';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--size-4xl);

.title{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: var(--size-3xl);
}
.email-container p{
    margin: var(--size-3xl);
}
.email-container a{
    display: flex;
    align-items: center;
    justify-content: center;
}
.email-container{
    margin: var(--size-4xl) 0;
}
.contact-form{
    width: 360px;
    text-align: center;
}
.contact__form-div{
    position: relative;
    margin-bottom: 2rem;
    height: 4rem;
}
.contact__form-input{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid var(--clr-slate800);
    background: none;
    color: var(--clr-slate400);
    outline: none;
    border-radius: var(--size-xs);
    padding: var(--size-2xl);
    z-index: 1;
}
.contact__form-tag{
    position: absolute;
    top: -0.75rem;
    left: var(--size-xl);
    color: var(--clr-slate400);
    font-size: var(--size-base);
    padding: 0 0.25rem;
    background-color: var(--clr-light);
    z-index: 10;
}
.contact__form-area{
    height: 11rem;
}
.contact__form-area textarea{
    resize: none;
}
.line{
    border: 2px solid var(--clr-orange);
    padding-right: 4rem;
    margin-top: 1.5rem;
}

/* xs */
@media only screen and (min-width: 475px) {
    .btn{
        font-size: var(--size-base);
    }
}
/* lg */
@media only screen and (min-width: 1024px) {
    .form{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .btn{
        font-size: var(--size-lg);
    }
    .icon{
        font-size: var(--size-8xl);
    }
    a{
        font-size: 12rem;
    }
    .contact-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }
    .contact-links{
        gap: 4rem;
    }
    .email-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 3rem;
    }
}
/* xl */
@media only screen and (min-width: 1280px) {
    .btn{
        font-size: var(--size-xl);
    }
}

`

export default Wrapper;
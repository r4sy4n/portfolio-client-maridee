import styled from 'styled-components';

const Wrapper = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem 1rem;
position: fixed;
width: 100%;
top: 0;
z-index: 1000;
background: transparent;
a{
    font-weight: 600;
    letter-spacing: -0.05em;
    transition: color 0.3s;
}
a:hover {
    color: var(--clr-orange);
    text-shadow: 8px 8px 11px #f97316;
}
.logo{
    transition: color 0.3s;
    display: none;
}
.logo-img{
    width: var(--size-lg);
}
.logo:hover {
    color: var(--clr-orange);
    text-shadow: 8px 8px 11px #f97316;
}
.sun:hover{
    color: var(--clr-orange);
}
.bars{
    color: var(--clr-orange);
    width: var(--size-xl);
    height: var(--size-xl);
    display: block;
    z-index: 9999;
}
.bars:hover{
    color: var(--clr-orange);
}
/* md */
@media only screen and (min-width: 768px) {
    ul {
        list-style: none;
        display: flex;
        align-items: center;
        padding: 0;
        gap: 2em;
    }
    .line{
        border: 1px solid var(--clr-orange);
        padding-top: 1.5em;
    }
    .sun{
        display: block;
        color: var(--clr-slate800);
        width: var(--size-base);
        height: var(--size-base);
    }
    .logo{
        display: block;
    }
    .logo-img{
        display: none;
    }
    .bars{
        display: none;
    }
}

/* lg */
@media only screen and (min-width: 1024px) {
    a {
        font-size: var(--size-lg);
    }
    .sun{
        width: var(--size-lg);
        height: var(--size-lg);
    }
}

`

export default Wrapper;
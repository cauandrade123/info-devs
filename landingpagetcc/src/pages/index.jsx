    import { Link, animateScroll as scroll } from 'react-scroll';
    import './index.scss';
    import 'animate.css';
    import { Link as RouterLink } from 'react-router-dom';



export default function Page1 (){
    return(
        <main>
            <header>
                <div className="img">
                    <img src="/assets/images/logo.enc" alt="" />
                    <h1>INFO-DEVS</h1>
                </div>
                <div className="menu">
                   <Link target='blank' to="first" smooth={true} duration={550}> <li>Home</li>  </Link>
                     <Link target='blank' to="aboutUs" smooth={true} duration={550}><li>Nosso time</li></Link>
                     <Link target='blank' to='terceiro' smooth={true} duration={550}><li>Projetos</li> </Link>
                </div>
            </header>
            <section id='first' className=" first   animate__animated animate__fadeInLeft animate__delay-0.10s">
                <div className="texto">
                    <h1>Bem vindo á info-devs</h1>
                    <p>A equipe info-devs esta sempre preparada a fornecer os melhores, seguros e completos sistemas para seu negócio</p>
                </div>
                <div className="img2">
                    <img src="../../public/assets/images/logo.enc" alt="" />
                    
                </div>
            </section>

            <section id='aboutUs'  className="aboutUs  animate__animated animate__fadeInRight animate__delay-0.9s">
                <div className="title">
                      <h1>Nosso time de Desenvolvedores!</h1>
                </div>


                <div className="cards">
                    <div className="cards1">
                        <a href="">          
                            <div className="card">
                                <h3>Cauã</h3>
                                <h6>Desenvolvedor FullStack</h6>
                            </div>
                        </a>    
                        <a href="">
                            <div className="card">
                                <h3>Nicolas</h3> 
                                <h6>Desenvolvedor FullStack</h6>
                            </div>
                        </a>    
                    </div>    

                    
                    <div className="cards2">
                        <a href="">    
                            <div className="card">
                                 <h3>Pedro</h3>
                                 <h6>Desenvolvedor FullStack</h6>
                            </div>
                        </a>    
                        <a href="">
                            <div className="card">
                                <h3>Tiago</h3>
                               <h6>Desenvolvedor FullStack</h6>
                            </div>
                        </a>    
                    </div>    
                </div>
            </section>

            <section className='terceiro'>
                <h1>Nossos projetos</h1>
                
                <div className="cartoes">
                    <div className="cartao">
                       
                            <img className='drjoao' src="/assets/images/img dh.png" alt="" />
                            <a className='linkprosite' target='blank' href='http://4.172.207.208:3056/'> Clínica Médica </a>
                    </div> 
                </div>
            </section>

            <footer className="footer">
                <div className="footer__content">
                    <div className="footer__section footer__section--about">
                        <h4>Info-Devs</h4>
                        <p>Desenvolvendo soluções digitais inovadoras.</p>
                    </div>
                    <div className="footer__section footer__section--contact">
                        <h4>Contatos</h4>
                        <p>Email: contato@infodevs.com</p>
                        <p>Telefone: +55 11 1234-5678</p>
                    </div>
                    <div className="footer__section footer__section--social">
                        <h4>Siga-nos</h4>
                        <p>
                            <a href="#">LinkedIn</a>
                            <a href="#">Twitter</a>
                            <a href="#">Facebook</a>
                        </p>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p>&copy; 2024 Info-Devs. Todos os direitos reservados.</p>
                </div>
            </footer>  
        </main>
    );
}
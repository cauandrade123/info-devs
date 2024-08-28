    import { Link, animateScroll as scroll } from 'react-scroll';
    import './index.scss';
    import 'animate.css';
    import { Link as RouterLink } from 'react-router-dom';



export default function Page1 (){
    return(
        <main>
            <header>
                <div className="img">
                    <img src="https://media.discordapp.net/attachments/1256332132662640702/1274084887040622703/image_17.png?ex=66c0f784&is=66bfa604&hm=7ebfd3eeb5495ecf9427f6c63b77ad1a99701a8749f0be0d3fc2d5d6cf15b4ce&=&format=webp&quality=lossless" alt="" />
                    <h1>INFO-DEVS</h1>
                </div>
                <div className="menu">
                   <Link target='blank' to="first" smooth={true} duration={500}> <li>Home</li>  </Link>
                     <Link target='blank' to="aboutUs" smooth={true} duration={500}><li>Nosso time</li></Link>
                     <Link target='blank' to='terceiro' smooth={true} duration={500}><li>projetos</li> </Link>
                </div>
            </header>
            <section id='first' className=" first   animate__animated animate__fadeInLeft animate__delay-0.10s">
                <div className="texto">
                    <h1>Bem vindo á info-devs</h1>
                    <p>A equipe info-devs esta sempre preparada a fornecer os melhores, seguros e completos sistemas para seu negócio</p>
                </div>
                <div className="img2">
                    <img src="https://cdn.discordapp.com/attachments/1267218408223670316/1274188167121080370/image-removebg-preview_1.png?ex=66c157b4&is=66c00634&hm=11d2fc0fc6b10c553f86254334213e75e5261a24db4458f0f6568076b6033c20&" alt="" />
                    
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
                                
                            </div>
                        </a>    
                        <a href="">
                            <div className="card">

                            </div>
                        </a>    
                    </div>    

                    
                    <div className="cards2">
                        <a href="">    
                            <div className="card">

                            </div>
                        </a>    
                        <a href="">
                            <div className="card">

                            </div>
                        </a>    
                    </div>    
                </div>
            </section>

            <section className='terceiro'>
                <h1>Nossos projetos</h1>
                
                <div className="cartoes">
                    <div className="cartao">
                        <img className='drjoao' src="https://cdn.discordapp.com/attachments/1267218408223670316/1275860837344739360/dr_joao.png?ex=66c76d7f&is=66c61bff&hm=99c3b10e5a90a7965e6877fe2f3a9598c775e9195e9fd04141f1aa859a0dc444&" alt="" />
                        <p> Clínica Médica </p>
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
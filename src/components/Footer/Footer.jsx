import React from 'react'
import './Footer.scss'
function Footer() {
    const date = new Date().getFullYear();
    return (
        <>
        <footer className="text-center text-white" style={{backgroundColor:'#60EFFF'}}>
        
            <div className="container p-2 pb-0">
                
                <section className="">
                
                <a
                    className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor: '#3b5998'}}
                    href="#!"
                    role="button"
                    ><i className="fab fa-facebook-f"></i>
                </a>


                <a
                    className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor: '#55acee'}}
                    href="#!"
                    role="button"
                    ><i className="fab fa-twitter"></i>
                </a>


                <a
                    className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor: '#dd4b39'}}
                    href="#!"
                    role="button"
                    ><i className="fab fa-google"></i>

                </a>

                <a
                    className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor: '#ac2bac'}}
                    href="#!"
                    role="button"
                    ><i className="fab fa-instagram"></i>
                    </a>


                <a
                    className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor: '#0082ca'}}
                    href="#!"
                    role="button"
                    ><i className="fab fa-linkedin-in"></i>
                </a>

                <a
                    className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor: '333333'}}
                    href="#!"
                    role="button"
                    ><i className="fab fa-github"></i>
                </a>
                </section>
                
            </div>  
            


            <div className="text-center p-1" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                © {date} <a className="text-white" href="https://www.udea.edu.co">Universidad de Antioquia</a>
            </div>

            </footer>
        </>
    )
}

export default Footer

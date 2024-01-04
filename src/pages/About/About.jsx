
import './about.css'
import person1 from '../../components/images/person_1.jpg.webp'
import person2 from  '../../components/images/person_2.jpg.webp'
import person3 from  '../../components/images/person_3.jpg.webp'
import about from  '../../components/images/about.jpg'
import { RiDoubleQuotesL } from "react-icons/ri";

function About() {
  return (
    <>
    <div className="image">
                <div className="text " >
                    <h1 data-aos="zoom-in" data-aos-duration="1000">About Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, sint?</p>
                </div>
            </div>
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-12 col-lg-6" data-aos="zoom-in" data-aos-duration="1000">
            <h2 className='my-4'>About US</h2>
            <p className='prag'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
               explicabo delectus. Odio delectus eos nihil est? Culpa rerum voluptates quod,
                ratione pariatur numquam eveniet ipsam repudiandae ipsum impedit sint sit,
                 reprehenderit doloribus enim? Veniam omnis, eos natus officia magnam quo iusto quam tempora esse,
               consequatur error eum in cumque sint.</p>
          </div>
          <div className="col-md-12 col-lg-6" data-aos="zoom-in" data-aos-duration="1000">
          <div className="aboutImage">
            <img src={about} alt="aboutImage" />
          </div>
        </div>
        </div>
        
        </div>      
      <div className="container pt-5">
        <div className="text text-center">
                <h2>Our Team</h2>
            </div>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="cards row mt-4">
                            <div className=" col-sm-12 col-md-6 col-lg-4 mb-5">
                                <div className=" card mb-4 ">
                                    <div className=" icon">
                                        <i><RiDoubleQuotesL size="1.5rem"/></i>
                                    </div>
                                    <p>
                                        Far far away, behind the word <br/> mountains, far from the countries <br/>
                                        Vokalia
                                        and Consonantia, there
                                        live the <br/> blind texts.
                                    </p>
                                    <div className="info d-flex">
                                        <div className="left">
                                            <div className="img">
                                                <img src={person1} alt="person"/>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <h3>Roger Scott</h3>
                                            <p>MARKETING MANAGER</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
                                <div className="card mb-4">
                                    <div className="icon">
                                        <i ><RiDoubleQuotesL size="1.5rem"/></i>
                                    </div>
                                    <p>
                                        Far far away, behind the word <br/> mountains, far from the countries <br/>
                                        Vokalia
                                        and Consonantia, there
                                        live the <br/> blind texts.
                                    </p>
                                    <div className="info d-flex">
                                        <div className="left">
                                            <div className="img">
                                                <img src={person2} alt="person"/>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <h3>Roger Scott</h3>
                                            <p>MARKETING MANAGER</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
                                <div className="card mb-4">
                                    <div className="icon">
                                        <i ><RiDoubleQuotesL size="1.5rem"/></i>
                                    </div>
                                    <p>
                                        Far far away, behind the word <br/> mountains, far from the countries <br/>
                                        Vokalia
                                        and Consonantia, there
                                        live the <br/> blind texts.
                                    </p>
                                    <div className="info d-flex">
                                        <div className="left">
                                            <div className="img">
                                                <img src={person3} alt="person"/>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <h3>Roger Scott</h3>
                                            <p>MARKETING MANAGER</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="cards row mt-4">
                            <div className=" col-sm-12 col-md-6 col-lg-4 mb-5">
                                <div className=" card mb-4 ">
                                    <div className=" icon">
                                        <i><RiDoubleQuotesL size="1.5rem"/></i>
                                    </div>
                                    <p>
                                        Far far away, behind the word <br/> mountains, far from the countries <br/>
                                        Vokalia
                                        and Consonantia, there
                                        live the <br/> blind texts.
                                    </p>
                                    <div className="info d-flex">
                                        <div className="left">
                                            <div className="img">
                                                <img src={person1} alt="person"/>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <h3>Roger Scott</h3>
                                            <p>MARKETING MANAGER</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
                                <div className="card mb-4">
                                    <div className="icon">
                                        <i><RiDoubleQuotesL size="1.5rem"/></i>
                                    </div>
                                    <p>
                                        Far far away, behind the word <br/> mountains, far from the countries <br/>
                                        Vokalia
                                        and Consonantia, there
                                        live the <br/> blind texts.
                                    </p>
                                    <div className="info d-flex">
                                        <div className="left">
                                            <div className="img">
                                                <img src={person2} alt="person"/>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <h3>Roger Scott</h3>
                                            <p>MARKETING MANAGER</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
                                <div className="card mb-4">
                                    <div className="icon">
                                        <i><RiDoubleQuotesL size="1.5rem"/></i>
                                    </div>
                                    <p>
                                        Far far away, behind the word <br/> mountains, far from the countries <br/>
                                        Vokalia
                                        and Consonantia, there
                                        live the <br/> blind texts.
                                    </p>
                                    <div className="info d-flex">
                                        <div className="left">
                                            <div className="img">
                                                <img src={person3} alt="person"/>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <h3>Roger Scott</h3>
                                            <p>MARKETING MANAGER</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                </button>
            </div>
      </div>
    </>
  )
}

export default About
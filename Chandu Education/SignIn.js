import React from 'react'
import { signInWithGoogle } from './firebase/firebase.utils'
import AmmuD from './assets/AmmuD.jpg'
import Facebook from './assets/facebook.png'
import Youtube from './assets/youtube.png'
import Instagram from './assets/instagram.png'
import {Link} from 'react-router-dom'
const SignIn = () => {
    return (
        <div style={styles.mainContainer}>

            {/* Navbar Container */}

            <div style={styles.navbarContainer}>
                <div style={styles.logoContainer}>
                    <li style={styles.logoName}>NIKHIL KARANAM YT</li>
                </div>
                <div style={styles.headerSideBarContent}>
                    <Link to="/home" style={styles.liContent}><li>Home</li></Link>
                    <Link to="/aboutus" style={styles.liContent}><li>About Us</li></Link>
                    <Link to="/contactus" style={styles.liContent}><li>Contact Us</li></Link>
                    <a href="https://www.youtube.com/channel/UC1pYeJSOv4AP3XrrIJN5M5w" style={{textDecoration:'none',color:'white'}}>Videos</a>

                </div>
            </div>
            
            {/* Middile Container */}

            <div style={styles.middleContainer}>
                <div style={styles.imgContainer}>
                    <img style={styles.img} src={AmmuD} alt="Ammu"/>
                </div>
                <div style={styles.middleContentContainer}>
                    <li style={styles.headingContent}>Welcome Back Nikhil Karanam YT</li>
                    <li style={styles.subContent}>Must and Should learn what you Expect.</li>
                    <li style={styles.subContent1}>You can cover all these languages (HTML, CSS, Java, JavaScript, React Js and React Native).</li>
                    <li style={styles.subContent1}>You can able to do real time projects.</li>
                    <button style={styles.loginButton} onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
                </div>
            </div>

            {/* Footer Container */}
            
            <div style={styles.FooterContainer}>
                <div style={styles.footerLogo}>
                    <li style={styles.footerLogoTxt}>FALLOW ME ON SOCIAL MEDIA</li>
                </div>
                <div style={styles.socialMedia}>
                    <div style={styles.socialMediaContent}>
                        <img style={{width:'50px'}} src={Facebook} alt="facebook"/>
                        <a href="https://www.facebook.com/nikhil.nikhil.1213986/" style={{textDecoration:'none',color:'white'}}>Facebook</a>
                    </div>
                    <div style={styles.socialMediaContent}>
                        {/* <Youtube size={24}/> */}
                        <img style={{width:'50px'}} src={Youtube} alt="youtube"/>
                        <a href="https://www.youtube.com/channel/UC1pYeJSOv4AP3XrrIJN5M5w" style={{textDecoration:'none',color:'white'}}>Youtube</a>
                    </div>
                    <div style={styles.socialMediaContent}>
                        <img style={{width:'50px'}} src={Instagram} alt="instagram"/>
                        <a href="https://www.instagram.com/nikhilkaranamyt/" style={{textDecoration:'none',color:'white'}}>Instagram</a>
                    </div>
                </div>
            </div>
            
            {/* Copyright names */}
            <div style={{display : 'flex', justifyContent:'center', alignItems:'center',color:'white',width:'100%'}}>
                <div>
                    <p>Copyright Claim &copy; 2021 || Nikhil Karanam Website || <span>Terms {"&"} Conditions</span></p>
                </div>
            </div>
        </div>
    )
}

export default SignIn

const styles = {
    mainContainer : {
        width : '100%',
        height : '100vh',
        backgroundColor : 'black',
        display : 'flex',
        flexDirection : 'column'
    },
    navbarContainer : {
        width : '100%',
        height : '5vh',
        borderBottom : '1px solid white',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center'
    },
    logoContainer : {
        color : 'white',
        fontFamily : 'cursive'
    },
    logoName : {
        listStyleType : 'none',
    },
    headerSideBarContent : {
        color : 'white',
        fontFamily : 'cursive',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-around',
        width : '20%'
    },
    liContent : {
        listStyleType : 'none',
        cursor : 'pointer',
        textDecoration : 'none',
        color : 'white'
    },
    middleContainer : {
        display : 'flex',
        flexDirection : 'row',
        height : '70vh',
        borderBottom : '1px solid white',
        //justifyContent : 'center',
        // alignItems : 'center'
    },
    imgContainer : {
        width : '40%',
        height : '70vh',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center'
    },
    img : {
        width : '450px',
        height : '450px'
    },
    middleContentContainer : {
        width : '60%',
        height : '70vh',
        display : 'flex',
        flexDirection : 'column',
        color : 'white',
        justifyContent : 'center',
        //alignItems : 'center'
    },
    headingContent : {
        listStyleType : 'none',
        fontFamily : 'cursive',
        fontWeight : '800',
        fontSize : '50px',
        //marginTop : '-20%'
    },
    subContent : {
        marginTop : '5%',
        listStyleType: 'none',
        fontFamily : 'verdana'
    },
    subContent1 : {
        listStyleType:'none',
        fontFamily : 'verdana'
    },
    loginButton : {
        marginTop : '5%',
        fontFamily : 'cursive',
        width : '200px',
        height : '30px',
        color : 'white',
        backgroundColor : 'black',
        cursor : 'pointer',
        border : '1px solid white',
        marginLeft : '20%'
    },
    FooterContainer : {
        width : '100%',
        height : '20vh',
        color : 'white',
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        borderBottom : '1px solid white'
    },
    footerLogo : {
        //marginTop : '-20px'
    },
    footerLogoTxt : {
        listStyleType : 'none',
        fontFamily : 'cursive'
    },
    socialMedia : {
        display : 'flex',
        justifyContent : 'space-around',
        alignItems : 'center',
        width : '50%',
        marginTop : '20px'
    },
    socialMediaContent : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center'
    }
}
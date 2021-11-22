import React from 'react'
import { auth } from './firebase/firebase.utils';
import Grid from '@material-ui/core/Grid';
const HomePage = (props) => {
    return (
        <div style={styles.mainContainer}>
            <div style={styles.navbarSubContainer}>
                <div style={styles.sidebarContainer}>
                    <div style={styles.sidebarContent}>
                        <img style={styles.userImage} src={props.image} alt="userimg"/>
                        <li style={{fontFamily:'cursive',listStyleType:'none',marginTop:'5px'}}>{props.name}</li>
                        <button style={styles.logoutButton} onClick={() => auth.signOut()}>LOG OUT</button>
                    </div>
                    <div style={styles.sidebarContent1}>
                        <li style={styles.liContent}>HOME</li>
                        <li style={styles.liContent}>HTML</li>
                        <li style={styles.liContent}>CSS</li>
                        <li style={styles.liContent}>JAVA SCRIPT</li>
                        <li style={styles.liContent}>REACT JS</li>
                        <li style={styles.liContent}>REACT NATIVE</li>
                    </div>
                </div>
            </div>
            <div style={styles.navbarSubContainer1}>
                {/* Our Videos */}
                <div >
                    <h2 style={{alignItems:'center',listStyleType:'none',fontFamily : 'cursive'}}>Lets Check React Videos</h2>
                </div>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={3} sm={3}>
                            <iframe width="350px" height="200px" src="https://www.youtube.com/embed/dpgE07fl1bc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Grid>
                        <Grid item xs={3} sm={3}>
                            <iframe width="350" height="200" src="https://www.youtube.com/embed/EzSGxnlkbjM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Grid>
                        <Grid item xs={3} sm={3}>
                            <iframe width="350" height="200" src="https://www.youtube.com/embed/EVA4A3nMvsg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Grid>
                        <Grid item xs={3} sm={3}>
                        <iframe width="350" height="200" src="https://www.youtube.com/embed/6Y1s4IgDvH8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Grid>
                        <Grid item xs={3} sm={3}>
                        <iframe width="350" height="200" src="https://www.youtube.com/embed/PwCLs6kKeXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Grid>
                        <Grid item xs={3} sm={3}>
                        <iframe width="350" height="200" src="https://www.youtube.com/embed/yLeAzPdX0mA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Grid>
                        <Grid item xs={3} sm={3}>
                        <iframe width="350" height="200" src="https://www.youtube.com/embed/vwelv00Gcd8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Grid>
                        <Grid item xs={3} sm={3}>
                        <iframe width="350" height="200" src="https://www.youtube.com/embed/xyoSpXV-nZI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Grid>
                    </Grid> 
                </div> 
            </div>
        </div>
    )
}

export default HomePage

const styles = {
    mainContainer : {
        width : '100%',
        height : '100%',
        backgroundColor : 'black',
        color : 'white',
        display : 'flex',
        flexDirection : 'row',
    },
    navbarSubContainer : {
        display : 'flex',
        flexDirection : 'row',
        //alignItems:'center',
        width : '15%',
        height : 'auto',
        borderRightStyle : 'dotted',
       // marginTop : '5%'
    },
    userImage : {
        width :'150px',
        borderRadius : '500px',
        marginTop : '10px'
    },
    logoutButton : {
        marginTop : '5%',
        fontFamily : 'cursive',
        width : '200px',
        height : '30px',
        color : 'white',
        backgroundColor : 'black',
        cursor : 'pointer',
        border : '1px solid white',
    },
    navbarSubContainer1  : {
        display : 'flex',
        // flexDirection : 'space-around',
        width : '80%',
        alignItems : 'center',
        height : '100vh',
        marginLeft : '30px',
        flexDirection : 'column'
    },
    sidebarContainer : {
        display : 'flex',
        flexDirection : 'column',
    },
    sidebarContent : {
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center'
    },
    sidebarContent1 : {
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-around',
        height : '30vh',
        alignItems : 'center',
        marginTop : '40px'
    },
    liContent : {
        listStyleType : 'none',
        cursor : 'pointer'
    }
}
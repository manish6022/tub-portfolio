import React from 'react'
import ContactItem from '../components/ContactItem.js'
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Title from '../components/Title.js';
import { Grid , Card,Paper, makeStyles} from '@material-ui/core';

const useStyle = makeStyles(theme=>({
        root:{
            backgroundColor:'#10121B',
            marginTop:theme.spacing(10)
        },
        rightCard:{
            padding:theme.spacing(0)
        },
        

}))


function ContactPage() {
    const classes = useStyle();
    return (
        <>
                <Title title={'Contact Me'} span={'Contact Me'}/>
                <Paper className={classes.root}>
                    <Grid container spacing={3} className={classes.rightCard}>
                        <Grid item xs={12} md={6} className={classes.mapCard}>
                            <ContactItem title={'Map Location'}/>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27993.251684166655!2d77.19145090923914!3d28.714869810610427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfe09d36ac753%3A0x99cb78dd1e463868!2sIndra%20Vikas%20Colony%2C%20Bhai%20Parmanand%20Colony%2C%20Mukherjee%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110009!5e0!3m2!1sen!2sin!4v1615814395843!5m2!1sen!2sin" width='100%' height='360px' allowFullScreen="" loading="lazy" title="mapLocation"></iframe>
                            
                        </Grid>
                        <Grid container item direction='column' xs={12} md={6} justify='space-between' spacing={3}>
                            <Grid item>
                            <Card >
                            <ContactItem title={'Phone'} icon={<CallIcon/>} text={'+917009351960'} />
                            </Card>
                            </Grid>
                            <Grid item>
                            <Card>
                            <ContactItem title={'E-MAIL ID'} icon={<MailOutlineIcon/>} text={'leo.manish.cse@gmail.com'} />
                            </Card>
                            </Grid>
                            <Grid item>
                            <Card>
                            <ContactItem title={'Address'} icon={<LocationOnIcon/>} text={'Indra Vikas Colony ,Mukherjee Nagar, New Delhi, Delhi 110009'} />
                            </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Paper>
                    </>
    )
}

export default ContactPage

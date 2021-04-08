import { Card, CardContent, CardHeader, IconButton, Typography } from '@material-ui/core'
import React from 'react'

const ContactItem = (props) => {
    const {icon, text,title} = props
    return (


        <Card variant='outlined' elevation={5}>
            <CardHeader
            action={ <IconButton>{icon}</IconButton>}
            title={title}
           />
            <CardContent>
                <Typography color='secondary'>
                    {text}
                </Typography>
            </CardContent>

        </Card>

    )
}

export default ContactItem

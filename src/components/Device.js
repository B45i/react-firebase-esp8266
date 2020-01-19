import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function Device() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(['wifi']);

    const handleToggle = value => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List subheader={<ListSubheader>Control Panel</ListSubheader>} className={classes.root}>
            <ListItem>
                <ListItemIcon>
                    <WbIncandescentIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
                <ListItemSecondaryAction>
                    <Switch
                        edge="end"
                        onChange={handleToggle('wifi')}
                        checked={checked.indexOf('wifi') !== -1}
                        inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
                    />
                </ListItemSecondaryAction>
            </ListItem>
        </List>
    );
}

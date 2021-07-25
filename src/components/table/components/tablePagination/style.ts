import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    paginationControl: {
        "& .rows-per-page": {
            padding: theme.spacing(1)
        },
        "& .MuiInputBase-root": {
            fontSize: "0.875rem"
        }
    },
    page: {
        padding: theme.spacing(1)
    }
}));
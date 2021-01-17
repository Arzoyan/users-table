import * as moment from 'moment';
import * as CONSTANTS from './constants';

export const UppercaseData = (data) => {
    if (data === '') {
        return 'home'.toUpperCase()
    }
    if (!data) {
        return "wrong type of data"
    }
    return data.toUpperCase()
};

export const FormDate = (date) => {
    if (!moment(date).isValid()) {
        return 'wrong type of date'
    }
    return moment(date).format(CONSTANTS.DATE_FORMAT)
}

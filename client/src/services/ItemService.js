import { db } from '../config/db';

export const addItem =  (item) => {
    db.ref('/items').push({
        name: item
    });
}
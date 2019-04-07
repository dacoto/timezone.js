'use strict';

class Timezone {
    
    /**
     * Method to obtain all the listing
     */
    static getAll() {
        return require('../json/timezone.json');
    }

    /**
     * Method to obtain the specific label of a time zone
     * @param timezone
     */
    static getTimezone(timezone) {
        return this.getAll()[timezone];
    }
}

export default Timezone;
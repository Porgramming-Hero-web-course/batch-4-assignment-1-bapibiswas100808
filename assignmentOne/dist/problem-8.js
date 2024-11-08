"use strict";
const validateKeys = (obj, keys) => {
    for (const key of keys) {
        if (!(key in obj)) {
            return false;
        }
    }
    return true;
};

import {getDatastore} from "./datastore";

/**
 * Gets the 20 most recent DB rows from Datastore for the specified Region
 * @param {string} Region
 */

export const getMatchForRegion = async (Region: string) => {
    const datastore = getDatastore();

    const query = datastore.createQuery('Matches')
        .filter('Region', '=', Region)
        .limit(20);

    return await datastore.runQuery(query);
}

import { Datastore } from "@google-cloud/datastore";

export const getDatastore = () => {
    // if in production:
    if(process.env.GOOGLE_CLOUD_PROJECT) {
        return new Datastore();
        // else if in dev mode:
    } else {
        return new Datastore({
            projectId: "replays-lol-recorder-api",
            keyFile: "C:\\Users\\George\\Documents\\gthomdev\\replayslol-redditapi\\src\\db\\replays-lol-recorder-api-d93482931b36.json"
        });
    }
}
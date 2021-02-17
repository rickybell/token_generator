const {
    RtcTokenBuilder,
    RtmTokenBuilder,
    RtcRole,
    RtmRole,
} = require("agora-access-token");

// var config = require("../config/basic");

const tokenGenerator = (params) => {
    // const tokenGenerator = function() {
    const appID = params["app_id"];
    const appCertificate = params["certificate"];
    const channelName = params["channel"];

    // const uid = 1234567890;
    const uid = params["uid"];
    // const account = "1234567890";
    const role = RtcRole.PUBLISHER;

    const expirationTimeInSeconds = 86400;

    const currentTimestamp = Math.floor(Date.now() / 1000);

    const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;

    // IMPORTANT! Build token with either the uid or with the user account. Comment out the option you do not want to use below.

    // Build token with uid

    return RtmTokenBuilder.buildToken(
        appID,
        appCertificate,
        uid,
        role,
        privilegeExpiredTs
    );
};
export default tokenGenerator;

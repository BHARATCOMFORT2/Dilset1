exports.likeUser = require("./api/dating").likeUser;
exports.sendMessage = require("./api/chat").sendMessage;
exports.joinRandom = require("./api/random").joinRandom;
exports.joinTalk = require("./api/talk").joinTalk;
exports.addFriend = require("./api/friendship").addFriend;
exports.acceptFriend = require("./api/friendship").acceptFriend;
exports.sendMarriageInterest = require("./api/marriage").sendMarriageInterest;
exports.acceptMarriage = require("./api/marriage").acceptMarriage;
exports.sendRemarriageInterest = require("./api/remarriage").sendRemarriageInterest;
exports.acceptRemarriage = require("./api/remarriage").acceptRemarriage;
exports.markNotificationRead =
  require("./api/notifications").markNotificationRead;
exports.onUserStatusChange =
  require("./triggers/presence").onUserStatusChange;
exports.swipe = require("./api/swipe").swipe;
exports.approveVerification =
  require("./api/verification").approveVerification;
exports.rejectVerification =
  require("./api/verification").rejectVerification;
exports.getAdminStats =
  require("./api/admin").getAdminStats;
exports.blockUser =
  require("./api/admin").blockUser;
exports.onMatchCreate =
  require("./triggers/onMatchCreate").onMatchCreate;

exports.onMatchNotification =
  require("./triggers/onMatchNotification").onMatchNotification;

exports.onMessageNotification =
  require("./triggers/onMessageNotification").onMessageNotification;

exports.onPresenceUpdate =
  require("./triggers/onPresenceUpdate").onPresenceUpdate;

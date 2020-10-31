cordova.define("cocoon-plugin-social-common.Social", function(require, exports, module) {
!function()
{!window.Cocoon&&window.cordova&&"undefined"!=typeof require&&require("cocoon-plugin-common.Cocoon");
var e=window.Cocoon;e.define("Cocoon.Social",function(t){return t.Interface=function(){return this.onLoginStatusChanged=new e.Signal,this.on=this.onLoginStatusChanged.expose(),this},
t.Interface.prototype={isLoggedIn:function(){return!1},login:function(e){e&&e(!1,{message:"Not implemented!"})},
logout:function(e){e&&e({message:"Not implemented!"})},
getLoggedInUser:function(){return null},
hasPublishPermissions:function(e){e(!0)},
requestPublishPermissions:function(e){e&&e(!0,null)},requestUser:function(e,t){e(null,{message:"Not implemented!"})},requestUserImage:function(e,t,i){e("",{message:"Not implemented!"})},
requestFriends:function(e,t){e([],{message:"Not implemented!"})},
publishMessage:function(e,t){t({message:"Not implemented!"})},
recordVideo:function(e,t){e&&e({message:"Not implemented!"})},
ShowFriends:function(e,t){e&&e({message:"Not implemented!"})},
publishMessageWithDialog:function(e,t){t({message:"Not implemented!"})}},
t.SocialGamingService=function(){return e.Social.SocialGamingService.superclass.constructor.call(this),this},t.SocialGamingService.prototype={_cachedAchievements:null,_achievementsMap:null,_leaderboardsTemplate:null,_achievementsTemplate:null,requestScore:function(e,t){e(null,{message:"Not implemented!"})},
submitScore:function(e,t,i){t&&t({message:"Not implemented!"})},addScore:function(e,t,i){t=t||function(){};var n=this;this.requestScore(function(s,c){if(c)return void t(c);var a=e;s&&(a+=s.score),n.submitScore(a,t,i)},i)},
showLeaderboard:function(e,t){e&&e({message:"Not implemented!"})},
requestAllAchievements:function(e){e([],{message:"Not implemented!"})},
requestAchievements:function(e,t){e([],{message:"Not implemented!"})},
submitAchievement:function(e,t){t&&t({message:"Not implemented!"})},
resetAchievements:function(e){e&&e([],{message:"Not implemented!"})},
showAchievements:function(t){if(!this._achievementsTemplate)throw"Please, provide a html template for achievements with the setTemplates method";var i=new e.Widget.WebDialog,n=!1;i.show(this._achievementsTemplate,function(e){i.closed=!0,!n&&t&&t(e)});var s=this;this.requestAchievements(function(e,c){if(!i.closed){if(c)return n=!0,void(t&&t(c));var a=[];if(s._cachedAchievements)for(var h=0;h<s._cachedAchievements.length;++h){var o=s._cachedAchievements[h];if(a.push(o),e&&e.length)for(var m=0;m<e.length;++m)if(e[m].achievementID===o.achievementID){o.achieved=!0;break}}var r="addAchievements("+JSON.stringify(a)+");";i.eval(r)}})},
setAchievementsMap:function(e){this._achievementsMap=e,this._cachedAchievements&&this.syncAchievementsMap(this._cachedAchievements)},setTemplates:function(e,t){this._leaderboardsTemplate=e,this._achievementsTemplate=t},setCachedAchievements:function(e){this._cachedAchievements=e,e&&this._achievementsMap&&this.syncAchievementsMap(this._cachedAchievements)},findAchievement:function(e){if(!this._cachedAchievements)return null;for(var t=0;t<this._cachedAchievements.length;++t)if(e===this._cachedAchievements[t].achievementID)return this._cachedAchievements[t];return null},translateAchievementID:function(e){if(this._achievementsMap)for(var t in this._achievementsMap)if(t==e)return this._achievementsMap[t];return e},syncAchievementsMap:function(e){if(this._achievementsMap)for(var t=0;t<e.length;++t)for(var i in this._achievementsMap)this._achievementsMap[i]===e[t].achievementID&&(e[t].customID=i)}},e.extend(t.SocialGamingService,t.Interface),t.ImageSize={THUMB:"thumb",SMALL:"small",MEDIUM:"medium",LARGE:"large"},t.User=function(e,t,i){return this.userID=e,this.userName=t,this.userImage=i,this},t.Message=function(e,t,i,n,s){return this.message=e,this.mediaURL=t,this.linkURL=i,this.linkText=n,this.linkCaption=s,this},t.Score=function(e,t,i,n,s){return this.userID=e,this.score=t||0,this.userName=i,this.imageURL=n,this.leaderboardID=s,this},t.ScoreParams=function(e,t,i,n){this.userID=e,this.leaderboardID=t,this.friends=!!i,this.timeScope=n||2},t.TimeScope={ALL_TIME:0,WEEK:1,TODAY:2},t.Achievement=function(e,t,i,n,s){return this.achievementID=e,this.customID=e,this.title=t,this.description=i,this.imageURL=n,this.points=s||0,this},t})}();
});

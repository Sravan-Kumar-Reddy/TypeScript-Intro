var Video = /** @class */ (function () {
    function Video(URL, title, owner, subscribers, videoDuration, qualities, subtitles, numberOfViews, numberOfLikes, numberOfHates, description, date, comments) {
        var _this = this;
        this.getRelatedVideos = function () {
            var RVideos = 'Related Videos are Available';
            return RVideos;
        }; //getRelatedVideos Ends
        //GETTER methods for all fields of the class
        this.getURL = function () {
            return _this.URL;
        };
        this.getvideoTitle = function () {
            return _this.videoTitle;
        };
        this.getowner = function () {
            return _this.owner;
        };
        this.getsubscribers = function () {
            return _this.subscribers;
        };
        this.getvideoDuration = function () {
            return _this.videoDuration;
        };
        this.getsubtitles = function () {
            return _this.subtitles;
        };
        this.getqualities = function () {
            return _this.availableQualities;
        };
        this.getnumberOfViews = function () {
            return _this.numberOfViews;
        };
        this.getnumberOfLikes = function () {
            return _this.numberOfLikes;
        };
        this.getnumberOfHates = function () {
            return _this.numberOfHates;
        };
        this.getdescription = function () {
            return _this.description;
        };
        this.getdate = function () {
            return _this.date;
        };
        this.getcomments = function () {
            return _this.comments;
        };
        //GETTER methods Ends
        //SETTER methods For all the fields of the class
        this.setURL = function (url) {
            return _this.URL = url;
        };
        this.setvideoTitle = function (title) {
            return _this.videoTitle = title;
        };
        this.setowner = function (owner) {
            return _this.owner = owner;
        };
        this.setsubscribers = function (subscribers) {
            return _this.subscribers = subscribers;
        };
        this.setvideoDuration = function (duration) {
            return _this.videoDuration = duration;
        };
        this.setsubtitles = function (subtitles) {
            return _this.subtitles = subtitles;
        };
        this.setqualities = function (qualities) {
            return _this.availableQualities = qualities;
        };
        this.setnumberOfViews = function (views) {
            return _this.numberOfViews = views;
        };
        this.setnumberOfLikes = function (likes) {
            return _this.numberOfLikes = likes;
        };
        this.setnumberOfHates = function (hates) {
            return _this.numberOfHates = hates;
        };
        this.setdescription = function (description) {
            return _this.description = description;
        };
        this.setdate = function (date) {
            return _this.date = date;
        };
        this.setcomments = function (comments) {
            return _this.comments = comments;
        };
        this.URL = URL;
        this.videoTitle = title;
        this.owner = owner;
        this.subscribers = subscribers;
        this.videoDuration = videoDuration;
        this.availableQualities = qualities;
        this.subtitles = subtitles;
        this.numberOfViews = numberOfViews;
        this.numberOfLikes = numberOfLikes;
        this.numberOfHates = numberOfHates;
        this.description = description;
        this.date = date;
        this.comments = comments;
    } //Constructor Ends
    return Video;
}()); //Class Video Ends
var Tutorial = new Video('https://www.youtube.com/watch?v=Bd309s4Bkac&index=2&list=PLKREma096uCwBcQBzTGf-B5Mhn_GSwRR0', 'Setup', 'LevelUpTuts', 245000, 6.54, ['144p', '240p', '360p', '480p', '720p', '1080p'], true, 72570, 435, 18, 'asdasd', 20.2016, ['comments']);
//Values Before the changes
console.log('URL of the video = ' + Tutorial.getURL());
console.log('Title of the video = ' + Tutorial.getvideoTitle());
console.log('Owner of the video = ' + Tutorial.getowner());
console.log('Number of subscribers for the video = ' + Tutorial.getsubscribers());
console.log('Duration of the video = ' + Tutorial.getvideoDuration());
console.log('Available qualities for the video = ' + Tutorial.getqualities());
console.log('Subtitles for the video are availble? = ' + Tutorial.getsubtitles());
console.log('Number of views for the video = ' + Tutorial.getnumberOfViews());
console.log('Number of likes of the video = ' + Tutorial.getnumberOfLikes());
console.log('Number of dislikes of the video = ' + Tutorial.getnumberOfHates());
console.log('Description for the video = ' + Tutorial.getdescription());
console.log('Date of the video = ' + Tutorial.getdate());
console.log('Comments for the video = ' + Tutorial.getcomments());
console.log(Tutorial.getRelatedVideos());
Tutorial.setURL('https://www.youtube.com/watch?v=_KVYh9LM0eE&index=3&list=PLKREma096uCwBcQBzTGf-B5Mhn_GSwRR0');
Tutorial.setvideoTitle('New Video');
Tutorial.setowner('New LevelUpTuts');
Tutorial.setsubscribers(456654);
Tutorial.setvideoDuration(7.30);
Tutorial.setsubtitles(true);
Tutorial.setqualities(['144p', '360p', '720p', '1080p']);
Tutorial.setnumberOfViews(123456);
Tutorial.setnumberOfLikes(12345);
Tutorial.setnumberOfHates(2345);
Tutorial.setdescription('New Description');
Tutorial.setdate(20.7);
Tutorial.setcomments(['New Comment']);
console.log('');
console.log('');
//New Values For the fields after changes
console.log('Values of the fields after changes');
console.log('New URL of the video = ' + Tutorial.getURL());
console.log('New Title of the video = ' + Tutorial.getvideoTitle());
console.log('New Owner of the video = ' + Tutorial.getowner());
console.log('New Number of subscribers for the video = ' + Tutorial.getsubscribers());
console.log('New Duration of the video = ' + Tutorial.getvideoDuration());
console.log('New Available qualities for the video = ' + Tutorial.getqualities());
console.log('New Subtitles for the video are availble? = ' + Tutorial.getsubtitles());
console.log('New Number of views for the video = ' + Tutorial.getnumberOfViews());
console.log('New Number of likes of the video = ' + Tutorial.getnumberOfLikes());
console.log('New Number of dislikes of the video = ' + Tutorial.getnumberOfHates());
console.log('New Date of the video = ' + Tutorial.getdate());
console.log('New Comments for the video = ' + Tutorial.getcomments());

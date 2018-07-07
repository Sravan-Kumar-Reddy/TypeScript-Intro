
class Video{

    private URL                ?: string;
    private videoTitle          : string;
    private owner               : string;
    private subscribers        ?:number;
    private videoDuration       : number;
    private availableQualities ?: string[];
    private subtitles          ?: boolean;
    private numberOfViews       : number;
    private numberOfLikes      ?: number;
    private numberOfHates      ?: number;
    private description        ?: string;
    private date               ?: number;
    private comments           ?: string[];

    constructor(URL: string,title: string,owner: string,subscribers: number,videoDuration: number, qualities: string[],subtitles: boolean,numberOfViews: number,numberOfLikes: number,numberOfHates: number,description: string,date:number,comments: string[]){
        this.URL                = URL;
        this.videoTitle         = title;
        this.owner              = owner;
        this.subscribers        = subscribers;
        this.videoDuration      = videoDuration;
        this.availableQualities = qualities;
        this.subtitles          = subtitles;
        this.numberOfViews      = numberOfViews;
        this.numberOfLikes      = numberOfLikes;
        this.numberOfHates      = numberOfHates;
        this.description        = description;
        this.date               = date;
        this.comments           = comments;

    }//Constructor Ends


    getRelatedVideos =()=>{
        let RVideos:string = 'Related Videos are Available';
        return RVideos;
    }//getRelatedVideos Ends
    

    //GETTER methods for all fields of the class
    getURL = ()=>{
        return this.URL;
        
    }
    getvideoTitle = ()=>{
        return this.videoTitle;
        
    }
    getowner = ()=>{
        return this.owner;
        
    }
    getsubscribers = ()=>{
        return this.subscribers;
        
    }
    getvideoDuration = ()=>{
        return this.videoDuration;
        
    }
    getsubtitles = ()=>{
        return this.subtitles;
        
    }
    getqualities = ()=>{
        return this.availableQualities;
        
    }
    getnumberOfViews = ()=>{
        return this.numberOfViews;
        
    }
    getnumberOfLikes = ()=>{
        return this.numberOfLikes;
        
    }
    getnumberOfHates = ()=>{
        return this.numberOfHates;
        
    }
    getdescription = ()=>{
        return this.description;
        
    }
    getdate = ()=>{
        return this.date;
        
    }
    getcomments =()=>{
        return this.comments;
    }
    //GETTER methods Ends


    //SETTER methods For all the fields of the class
    setURL = (url:string)=>{
        return this.URL=url;
        
    }
    setvideoTitle = (title:string)=>{
        return this.videoTitle =title;
        
    }
    setowner = (owner:string)=>{
        return this.owner=owner;
        
    }
    setsubscribers = (subscribers:number)=>{
        return this.subscribers = subscribers;
        
    }
    setvideoDuration = (duration:number)=>{
        return this.videoDuration =duration;
        
    }
    setsubtitles = (subtitles: boolean)=>{
        return this.subtitles = subtitles;
        
    }
    setqualities = (qualities:string[])=>{
        return this.availableQualities=qualities;
        
    }
    setnumberOfViews = (views:number)=>{
        return this.numberOfViews =views;
        
    }
    setnumberOfLikes = (likes:number)=>{
        return this.numberOfLikes=likes;
        
    }
    setnumberOfHates = (hates:number)=>{
        return this.numberOfHates=hates;
        
    }
    setdescription = (description:string)=>{
        return this.description=description;
        
    }
    setdate = (date:number)=>{
        return this.date=date;
        
    }
    setcomments =(comments:string[])=>{
        return this.comments=comments;
    }

    //SETTER methods Ends


}//Class Video Ends

let Tutorial = new Video('https://www.youtube.com/watch?v=Bd309s4Bkac&index=2&list=PLKREma096uCwBcQBzTGf-B5Mhn_GSwRR0','Setup','LevelUpTuts',245000,6.54,['144p','240p','360p','480p','720p','1080p'],true,72570,435,18,'asdasd',20.2016,['comments']);

//Values Before the changes
console.log('URL of the video = '+Tutorial.getURL());
console.log('Title of the video = '+Tutorial.getvideoTitle());
console.log('Owner of the video = '+Tutorial.getowner());
console.log('Number of subscribers for the video = '+Tutorial.getsubscribers());
console.log('Duration of the video = '+Tutorial.getvideoDuration());
console.log('Available qualities for the video = '+Tutorial.getqualities());
console.log('Subtitles for the video are availble? = '+Tutorial.getsubtitles());
console.log('Number of views for the video = '+Tutorial.getnumberOfViews());
console.log('Number of likes of the video = '+Tutorial.getnumberOfLikes());
console.log('Number of dislikes of the video = '+Tutorial.getnumberOfHates());
console.log('Description for the video = '+Tutorial.getdescription());
console.log('Date of the video = '+Tutorial.getdate());
console.log('Comments for the video = '+Tutorial.getcomments());
console.log(Tutorial.getRelatedVideos());

Tutorial.setURL('https://www.youtube.com/watch?v=_KVYh9LM0eE&index=3&list=PLKREma096uCwBcQBzTGf-B5Mhn_GSwRR0');
Tutorial.setvideoTitle('New Video');
Tutorial.setowner('New LevelUpTuts');
Tutorial.setsubscribers(456654);
Tutorial.setvideoDuration(7.30);
Tutorial.setsubtitles(true);
Tutorial.setqualities(['144p','360p','720p','1080p']);
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
console.log('New URL of the video = '+Tutorial.getURL());
console.log('New Title of the video = '+Tutorial.getvideoTitle());
console.log('New Owner of the video = '+Tutorial.getowner());
console.log('New Number of subscribers for the video = '+Tutorial.getsubscribers());
console.log('New Duration of the video = '+Tutorial.getvideoDuration());
console.log('New Available qualities for the video = '+Tutorial.getqualities());
console.log('New Subtitles for the video are availble? = '+Tutorial.getsubtitles());
console.log('New Number of views for the video = '+Tutorial.getnumberOfViews());
console.log('New Number of likes of the video = '+Tutorial.getnumberOfLikes());
console.log('New Number of dislikes of the video = '+Tutorial.getnumberOfHates());
console.log('New Date of the video = '+Tutorial.getdate());
console.log('New Comments for the video = '+Tutorial.getcomments());
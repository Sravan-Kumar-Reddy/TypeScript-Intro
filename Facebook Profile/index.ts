
class FacebookProfileAbout{

    private coverphoto             ?: string;
    private profilePicture         ?: string;
    private education              ?: string[];
    private work                   ?: string;
    private placeOfStay            ?: string;
    private skills                 ?: string[];
    private email                   : string;
    private mobilePhone             : number;
    private birthDay                : string;
    private birthYear               : number;
    private familyMembers          ?: string[];
    private details                ?: string[];
    private lifeEvents             ?: string[];
    
    constructor(coverphoto: string,profilePicture: string,education: string[],work: string,placeOfStay: string, skills: string[],email: string,mobilePhone: number,birthYear: number,birthDay: string,familyMembers: string[],details:string[],lifeEvents: string[]){
        this.coverphoto                 = coverphoto;
        this.profilePicture             = profilePicture;
        this.education                  = education;
        this.work                       = work;
        this.placeOfStay                = placeOfStay;
        this.skills                     = skills;
        this.email                      = email;
        this.mobilePhone                = mobilePhone;
        this.birthDay                   = birthDay;
        this.birthYear                  = birthYear;
        this.familyMembers              = familyMembers;
        this.details                    = details;
        this.lifeEvents                 = lifeEvents;
        
    }//Constructor Ends
    

    getAge =()=>{
        let Year = new Date();

        let Age:number = (Year.getFullYear()-this.birthYear);
        
        return Age;
    }//getRelatedprofiles Ends
    

    //GETTER methods for all fields of the class
    getcoverphoto = ()=>{
        return this.coverphoto;
        
    }
    getprofilePicture = ()=>{
        return this.profilePicture;
        
    }
    geteducation = ()=>{
        return this.education;
        
    }
    getwork = ()=>{
        return this.work;
        
    }
    getplaceOfStay = ()=>{
        return this.placeOfStay;
        
    }
    getemail = ()=>{
        return this.email;
        
    }
    getskills = ()=>{
        return this.skills;
        
    }
    getmobilePhone = ()=>{
        return this.mobilePhone;
        
    }
    getbirthDay = ()=>{
        return this.birthDay;
        
    }
    getbirthYear = ()=>{
        return this.birthYear;
        
    }
    getfamilyMembers = ()=>{
        return this.familyMembers;
        
    }
    getdetails = ()=>{
        return this.details;
        
    }
    getlifeEvents =()=>{
        return this.lifeEvents;
    }
    //GETTER methods Ends


    //SETTER methods For all the fields of the class
    setcoverphoto = (coverphoto:string)=>{
        return this.coverphoto=coverphoto;
        
    }
    setprofilePicture = (title:string)=>{
        return this.profilePicture =title;
        
    }
    seteducation = (education:string[])=>{
        return this.education=education;
        
    }
    setwork = (work:string)=>{
        return this.work = work;
        
    }
    setplaceOfStay = (placeOfStay:string)=>{
        return this.placeOfStay =placeOfStay;
        
    }
    setemail = (email: string)=>{
        return this.email = email;
        
    }
    setskills = (skills:string[])=>{
        return this.skills=skills;
        
    }
    setmobilePhone = (mobile:number)=>{
        return this.mobilePhone =mobile;
        
    }
    setbirthDay = (birthDay:string)=>{
        return this.birthDay=birthDay;
        
    }
    setbirthYear = (birthYear:number)=>{
        return this.birthYear=birthYear;
        
    }
    setfamilyMembers = (familyMembers:string[])=>{
        return this.familyMembers=familyMembers;
        
    }
    setdetails = (details:string[])=>{
        return this.details=details;
        
    }
    setlifeEvents =(lifeEvents:string[])=>{
        return this.lifeEvents=lifeEvents;
    }

    //SETTER methods Ends


}//Class profile Ends

let FacebookProfile = new FacebookProfileAbout('CoverPhoto','ProfilePhoto',['School','College'],'Student',"Hyderabad",['Python','C','Java','HTML&CSS','JavaScript','JQuery'],'bonthasravan@gmail.com',9573572531,1997,'July 24',['brother','cousin'],['student','Aspiring developer'],['lifeEvents']);

//Values Before the changes

console.log('coverphoto of the profile = '+FacebookProfile.getcoverphoto());
console.log('Profile Picture for the profile = '+FacebookProfile.getprofilePicture());
console.log('education = '+FacebookProfile.geteducation());
console.log('work = '+FacebookProfile.getwork());
console.log('Place Of Stay = '+FacebookProfile.getplaceOfStay());
console.log('skills = '+FacebookProfile.getskills());
console.log('email = '+FacebookProfile.getemail());
console.log('Mobile Number = '+FacebookProfile.getmobilePhone());
console.log('Birth Day = '+FacebookProfile.getbirthDay());
console.log('Year of Birth = '+FacebookProfile.getbirthYear());
console.log('FamilyMembers = '+FacebookProfile.getfamilyMembers());
console.log('Details = '+FacebookProfile.getdetails());
console.log('LifeEvents = '+FacebookProfile.getlifeEvents());
console.log('Age = '+FacebookProfile.getAge() +'Years');



FacebookProfile.setcoverphoto('New Cover Photo');
FacebookProfile.setprofilePicture('New profile');
FacebookProfile.seteducation(['New LevelUpTuts']);
FacebookProfile.setwork('New Student');
FacebookProfile.setplaceOfStay('Hyderabad');
FacebookProfile.setemail('sravan@.com');
FacebookProfile.setskills(['WordPress']);
FacebookProfile.setmobilePhone(9573572531);
FacebookProfile.setbirthDay('July 24th');
FacebookProfile.setbirthYear(1997);
FacebookProfile.setfamilyMembers(['New familyMembers']);
FacebookProfile.setdetails(['CSE']);
FacebookProfile.setlifeEvents(['New Event']);
console.log('');
console.log('');


//New Values For the fields after changes

console.log('Values of the fields after the changes');
console.log('New coverphoto = '+FacebookProfile.getcoverphoto());
console.log('New profilePicture = '+FacebookProfile.getprofilePicture());
console.log('New education = '+FacebookProfile.geteducation());
console.log('New work = '+FacebookProfile.getwork());
console.log('New Place of Stay = '+FacebookProfile.getplaceOfStay());
console.log('New skills = '+FacebookProfile.getskills());
console.log('New email = '+FacebookProfile.getemail());
console.log('New phone = '+FacebookProfile.getmobilePhone());
console.log('New Birth Day = '+FacebookProfile.getbirthDay());
console.log('New Year = '+FacebookProfile.getbirthYear());
console.log('New Family Members = '+FacebookProfile.getfamilyMembers());
console.log('New deatails = '+FacebookProfile.getdetails());
console.log('New Events = '+FacebookProfile.getlifeEvents());
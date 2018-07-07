var FacebookProfileAbout = /** @class */ (function () {
    function FacebookProfileAbout(coverphoto, profilePicture, education, work, placeOfStay, skills, email, mobilePhone, birthYear, birthDay, familyMembers, details, lifeEvents) {
        var _this = this;
        this.getAge = function () {
            var Year = new Date();
            var Age = (Year.getFullYear() - _this.birthYear);
            return Age;
        }; //getRelatedprofiles Ends
        //GETTER methods for all fields of the class
        this.getcoverphoto = function () {
            return _this.coverphoto;
        };
        this.getprofilePicture = function () {
            return _this.profilePicture;
        };
        this.geteducation = function () {
            return _this.education;
        };
        this.getwork = function () {
            return _this.work;
        };
        this.getplaceOfStay = function () {
            return _this.placeOfStay;
        };
        this.getemail = function () {
            return _this.email;
        };
        this.getskills = function () {
            return _this.skills;
        };
        this.getmobilePhone = function () {
            return _this.mobilePhone;
        };
        this.getbirthDay = function () {
            return _this.birthDay;
        };
        this.getbirthYear = function () {
            return _this.birthYear;
        };
        this.getfamilyMembers = function () {
            return _this.familyMembers;
        };
        this.getdetails = function () {
            return _this.details;
        };
        this.getlifeEvents = function () {
            return _this.lifeEvents;
        };
        //GETTER methods Ends
        //SETTER methods For all the fields of the class
        this.setcoverphoto = function (coverphoto) {
            return _this.coverphoto = coverphoto;
        };
        this.setprofilePicture = function (title) {
            return _this.profilePicture = title;
        };
        this.seteducation = function (education) {
            return _this.education = education;
        };
        this.setwork = function (work) {
            return _this.work = work;
        };
        this.setplaceOfStay = function (placeOfStay) {
            return _this.placeOfStay = placeOfStay;
        };
        this.setemail = function (email) {
            return _this.email = email;
        };
        this.setskills = function (skills) {
            return _this.skills = skills;
        };
        this.setmobilePhone = function (mobile) {
            return _this.mobilePhone = mobile;
        };
        this.setbirthDay = function (birthDay) {
            return _this.birthDay = birthDay;
        };
        this.setbirthYear = function (birthYear) {
            return _this.birthYear = birthYear;
        };
        this.setfamilyMembers = function (familyMembers) {
            return _this.familyMembers = familyMembers;
        };
        this.setdetails = function (details) {
            return _this.details = details;
        };
        this.setlifeEvents = function (lifeEvents) {
            return _this.lifeEvents = lifeEvents;
        };
        this.coverphoto = coverphoto;
        this.profilePicture = profilePicture;
        this.education = education;
        this.work = work;
        this.placeOfStay = placeOfStay;
        this.skills = skills;
        this.email = email;
        this.mobilePhone = mobilePhone;
        this.birthDay = birthDay;
        this.birthYear = birthYear;
        this.familyMembers = familyMembers;
        this.details = details;
        this.lifeEvents = lifeEvents;
    } //Constructor Ends
    return FacebookProfileAbout;
}()); //Class profile Ends
var FacebookProfile = new FacebookProfileAbout('CoverPhoto', 'ProfilePhoto', ['School', 'College'], 'Student', "Hyderabad", ['Python', 'C', 'Java', 'HTML&CSS', 'JavaScript', 'JQuery'], 'bonthasravan@gmail.com', 9573572531, 1997, 'July 24', ['brother', 'cousin'], ['student', 'Aspiring developer'], ['lifeEvents']);
//Values Before the changes
console.log('coverphoto of the profile = ' + FacebookProfile.getcoverphoto());
console.log('Profile Picture for the profile = ' + FacebookProfile.getprofilePicture());
console.log('education = ' + FacebookProfile.geteducation());
console.log('work = ' + FacebookProfile.getwork());
console.log('Place Of Stay = ' + FacebookProfile.getplaceOfStay());
console.log('skills = ' + FacebookProfile.getskills());
console.log('email = ' + FacebookProfile.getemail());
console.log('Mobile Number = ' + FacebookProfile.getmobilePhone());
console.log('Birth Day = ' + FacebookProfile.getbirthDay());
console.log('Year of Birth = ' + FacebookProfile.getbirthYear());
console.log('FamilyMembers = ' + FacebookProfile.getfamilyMembers());
console.log('Details = ' + FacebookProfile.getdetails());
console.log('LifeEvents = ' + FacebookProfile.getlifeEvents());
console.log('Age = ' + FacebookProfile.getAge() + 'Years');
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
console.log('New coverphoto = ' + FacebookProfile.getcoverphoto());
console.log('New profilePicture = ' + FacebookProfile.getprofilePicture());
console.log('New education = ' + FacebookProfile.geteducation());
console.log('New work = ' + FacebookProfile.getwork());
console.log('New Place of Stay = ' + FacebookProfile.getplaceOfStay());
console.log('New skills = ' + FacebookProfile.getskills());
console.log('New email = ' + FacebookProfile.getemail());
console.log('New phone = ' + FacebookProfile.getmobilePhone());
console.log('New Birth Day = ' + FacebookProfile.getbirthDay());
console.log('New Year = ' + FacebookProfile.getbirthYear());
console.log('New Family Members = ' + FacebookProfile.getfamilyMembers());
console.log('New deatails = ' + FacebookProfile.getdetails());
console.log('New Events = ' + FacebookProfile.getlifeEvents());

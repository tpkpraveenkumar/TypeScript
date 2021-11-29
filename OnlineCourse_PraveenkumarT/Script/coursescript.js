var userIdincreament = 1000;
var courseIdincrement = 101;
var currentuser;
//Get user details class
var Register = /** @class */ (function () {
    function Register(uname, uage, uphono) {
        userIdincreament++;
        this.userName = uname;
        this.userAge = uage;
        this.userPhono = uphono;
        this.userId = "C" + userIdincreament.toString();
    }
    return Register;
}());
//Get course details class
var CourseDetails = /** @class */ (function () {
    function CourseDetails(cname, reqdays, userid) {
        courseIdincrement++;
        this.courseName = cname;
        this.RequiredDays = reqdays;
        this.userId = userid;
    }
    return CourseDetails;
}());
//Array for user details
var userList = new Array();
userList.push(new Register("praveen", 21, 7598395683));
userList.push(new Register("yraj", 21, 7598946165));
//Array for Course Details
var courseList = new Array();
//div id's
function home() {
    var home = document.getElementById("homepage");
    home.style.display = "Block";
    var getuser = document.getElementById("getuserinfo");
    getuser.style.display = "none";
    var availpage = document.getElementById("availablepage");
    availpage.style.display = "none";
}
function UserRegistration() {
    var home = document.getElementById("homepage");
    var getuser = document.getElementById("getuserinfo");
    //alert(getinp.value);
    home.style.display = "none";
    getuser.style.display = "Block";
}
function UserLogin() {
    var home = document.getElementById("homepage");
    var logpage = document.getElementById("loginpage");
    home.style.display = "none";
    logpage.style.display = "Block";
}
function AvailableCourse() {
    var availpage = document.getElementById("availablepage");
    var logpage = document.getElementById("loginpage");
    var coursepage = document.getElementById("course");
    var back = document.getElementById("b1");
    back.style.display = "none";
    coursepage.style.display = "none";
    availpage.style.display = "Block";
    logpage.style.display = "none";
    var ecourse = document.getElementById("Ecourse");
    ecourse.style.display = "none";
}
function Courses() {
    var coursepage = document.getElementById("course");
    var availpage = document.getElementById("availablepage");
    availpage.style.display = "none";
    coursepage.style.display = "Block";
}
function EnrolledCourse() {
    var availpage = document.getElementById("availablepage");
    availpage.style.display = "none";
    var ecourse = document.getElementById("Ecourse");
    ecourse.style.display = "Block";
}
//Add user details in Array
function Add() {
    var username = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var phono = document.getElementById("phono").value;
    var val = new Register(username, +age, +phono);
    userList.push(val);
    alert("successfully Info Add your ID: " + val.userId);
    home();
    // let n=(document.getElementById("ans") as HTMLLabelElement);
    // for(let i=0;i<userList.length;i++)
    // {
    //     //n.innerHTML += `Username:${userList[i].userName}`;
    //     alert(userList[i].userName)
    // }
}
//Login Check user id
function CheckUserId() {
    var count;
    count = 0;
    var usid = document.getElementById("userid").value;
    for (var i = 0; i < userList.length; i++) {
        if (userList[i].userId == usid) {
            //alert("valid user");
            currentuser = userList[i].userId;
            AvailableCourse();
            count = 0;
            break;
        }
        else {
            count++;
        }
        //n.innerHTML += `Username:${userList[i].userName}`;
        //alert(userList[i].userName)
    }
    if (count > 0) {
        alert("Invalid UserName" + usid);
    }
}
function Enroll() {
    var language = document.getElementById("lan").value;
    var noday = document.getElementById("days").value;
    var corobj = new CourseDetails(language, +noday, currentuser);
    courseList.push(corobj);
    console.log(corobj.courseName);
    var buy = confirm("Do you want to Buy:");
    if (buy) {
        alert("Successfully bought" + corobj.courseId);
        AvailableCourse();
    }
    else {
        alert("Cancelled");
    }
}
//display course details
function EnrolledCourses() {
    var count;
    count = 0;
    var show = "";
    var corDetails = document.getElementById("courseDetails");
    var day = document.getElementById("days");
    for (var i = 0; i < courseList.length; i++) {
        var x = courseList[i].RequiredDays;
        count += x;
        console.log(courseList[i].RequiredDays);
        show += "<br>user ID:".concat(courseList[i].userId, " <br> Course Name:").concat(courseList[i].courseName, " <br> Required Days:").concat(courseList[i].RequiredDays, " ");
        //corDetails.innerHTML +=`user ID:${courseList[i].userId} Course ID:${courseList[i].courseId} | Course Name:${courseList[i].courseName} | Required Days:${courseList[i].RequiredDays} `
    }
    corDetails.innerHTML = show;
    day.innerHTML = count.toString();
    EnrolledCourse();
}
function Back() {
    AvailableCourse();
}
function Back1() {
    AvailableCourse();
}
// function Back2()
// {   
//     home();
// }

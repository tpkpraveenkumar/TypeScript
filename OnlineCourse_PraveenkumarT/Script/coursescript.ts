let userIdincreament=1000;
let courseIdincrement=101;
let currentuser;

//Get user details class
class Register{
    userId:string;
    userName:string;
    userAge:number;
    userPhono:number;
    constructor(uname:string,uage:number,uphono:number)
    {
        userIdincreament++;
        this.userName=uname;
        this.userAge=uage;
        this.userPhono=uphono;
        this.userId="C"+userIdincreament.toString();
    }
}
//Get course details class
class CourseDetails{
    courseId:number;
    courseName:string;
    RequiredDays:number;
    userId:string;
    constructor(cname:string,reqdays:number,userid:string)
    {
        courseIdincrement++;
        this.courseName=cname;
        this.RequiredDays=reqdays;
        this.userId=userid;
    }
}
//Array for user details
let userList:Array<Register> = new Array<Register>();

userList.push(new Register("praveen",21,7598395683));
userList.push(new Register("yraj",21,7598946165));


//Array for Course Details
let courseList:Array<CourseDetails> = new Array<CourseDetails>();
//div id's

function home()
{
    let home = (document.getElementById("homepage") as HTMLDivElement);
    home.style.display="Block";
    let getuser=(document.getElementById("getuserinfo") as HTMLDivElement);
    getuser.style.display="none";
    let availpage=(document.getElementById("availablepage") as HTMLDivElement);
    availpage.style.display="none";

}

function UserRegistration()
{
    let home = (document.getElementById("homepage") as HTMLDivElement);
    let getuser=(document.getElementById("getuserinfo") as HTMLDivElement);

    //alert(getinp.value);
    home.style.display="none";
    getuser.style.display="Block";
}
function UserLogin()
{
    let home = document.getElementById("homepage") as HTMLDivElement;
    let logpage=(document.getElementById("loginpage") as HTMLDivElement); 
     home.style.display="none";
     logpage.style.display="Block";
}

function AvailableCourse()
{
   
    let availpage=(document.getElementById("availablepage") as HTMLDivElement);
    let logpage=(document.getElementById("loginpage") as HTMLDivElement);
    let coursepage=(document.getElementById("course") as HTMLDivElement);
    let back=(document.getElementById("b1") as HTMLInputElement);
    back.style.display="none";
    coursepage.style.display="none";
    availpage.style.display="Block";
    logpage.style.display="none";
    let ecourse=(document.getElementById("Ecourse") as HTMLDivElement);
    ecourse.style.display="none";

}
function Courses()
{
    let coursepage=(document.getElementById("course") as HTMLDivElement);
    let availpage=(document.getElementById("availablepage") as HTMLDivElement);
     availpage.style.display="none";
     coursepage.style.display="Block";
}
function EnrolledCourse()
{
    let availpage=(document.getElementById("availablepage") as HTMLDivElement);
    availpage.style.display="none";
    let ecourse=(document.getElementById("Ecourse") as HTMLDivElement);
    ecourse.style.display="Block";

}

//Add user details in Array
function Add(){
    let username=(document.getElementById("name") as HTMLInputElement).value;
    let age=(document.getElementById("age") as HTMLInputElement).value;
    let phono=(document.getElementById("phono") as HTMLInputElement).value;

    let val=new Register(username,+age,+phono);
    userList.push(val);
   alert("successfully Info Add your ID: "+val.userId);
   home();

    // let n=(document.getElementById("ans") as HTMLLabelElement);
    // for(let i=0;i<userList.length;i++)
    // {
    //     //n.innerHTML += `Username:${userList[i].userName}`;
    //     alert(userList[i].userName)
    // }

    

}
//Login Check user id
function CheckUserId()
{
    let count:number;
    count=0;
    let usid=(document.getElementById("userid") as HTMLInputElement).value;
    for(let i=0;i<userList.length;i++)
    {
        if(userList[i].userId == usid)
        {      
            //alert("valid user");
            currentuser = userList[i].userId;
            AvailableCourse();
            count=0;
            break;
        }
        else{
            count++;
        }
        //n.innerHTML += `Username:${userList[i].userName}`;
        //alert(userList[i].userName)
    }
    if(count>0)
    {
       
        alert("Invalid UserName" +usid);
        
    }

}
function Enroll()
{
    let language=(document.getElementById("lan") as HTMLSelectElement).value;
    let noday=(document.getElementById("days") as HTMLInputElement).value;
    
    let corobj=new CourseDetails(language,+noday,currentuser);
    courseList.push(corobj);
    console.log(corobj.courseName);
    let buy=confirm("Do you want to Buy:");
    if(buy)
    {
        alert("Successfully bought"+corobj.courseId);
        AvailableCourse();

    }
    else{
        alert("Cancelled");
    }


}
//display course details
function EnrolledCourses()
{
    let count:number;
    count=0;
    let show="";
    let corDetails=(document.getElementById("courseDetails") as HTMLElement);
    let day = document.getElementById("days") as HTMLElement;
    
    for(let i=0;i<courseList.length;i++)
    {
         let x = courseList[i].RequiredDays;
        count += x;
        console.log(courseList[i].RequiredDays);
         show+=`<br>user ID:${courseList[i].userId} <br> Course Name:${courseList[i].courseName} <br> Required Days:${courseList[i].RequiredDays} `;
        //corDetails.innerHTML +=`user ID:${courseList[i].userId} Course ID:${courseList[i].courseId} | Course Name:${courseList[i].courseName} | Required Days:${courseList[i].RequiredDays} `
        
    }

    
    corDetails.innerHTML=show;
    day.innerHTML=count.toString();
    EnrolledCourse();
    
}

function Back()
{   
    AvailableCourse();
}

function Back1()
{   
    AvailableCourse();
    
}
// function Back2()
// {   
//     home();
// }

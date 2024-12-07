"use strict";
//to make dom content fully loaded
document.addEventListener('DOMContentLoaded', function () {
    //personal information data
    const form = document.getElementById("personalinfoform");
    const firstname = document.getElementById("name");
    const Email = document.getElementById("email");
    const Phone = document.getElementById("phone");
    const Address = document.getElementById("Address");
    //education information Data
    const eform = document.getElementById("education-form");
    const schoolname = document.getElementById("sname");
    const Degree = document.getElementById("Dname");
    const Completionyear = document.getElementById("Yname");
    //Skills Informatio Data
    const skillform = document.getElementById("skillsform");
    const Skills = document.getElementById("skill");
    //Experiance information Data
    const experianceform = document.getElementById("experianceform");
    const job = document.getElementById("jobtitle");
    const company_name = document.getElementById("company");
    const workingexperiance = document.getElementById("yearswork");
    // //calling function to perform action on click
    if (form) {
        form.addEventListener('submit', function (e) {
            //  //to prevent default behaviour of form
            e.preventDefault();
            //to extracting values from input fields
            const namevalue = firstname.value;
            const emailvalue = Email.value;
            const Phonevalue = Phone.value;
            const Addressvalue = Address.value;
            //to store value on localstorage
            //localstorage is used to store string data on browser
            localStorage.setItem("first-name", namevalue);
            localStorage.setItem("Email", emailvalue);
            localStorage.setItem("Phone", Phonevalue);
            localStorage.setItem("Address", Addressvalue);
            //redirecting to the next page after submitting data
            window.location.href = "preview.html";
            //to redirect on a education page
            window.location.href = "education.html";
        });
    }
    //to submit education Data on a Preview Cv Page
    if (eform) {
        {
            eform.addEventListener("submit", function (e) {
                //to prevent default behaviour of form
                e.preventDefault();
                //  //to extracting values from input fields
                const schoolvalue = schoolname.value;
                const degreevalue = Degree.value;
                const yearvalue = Completionyear.value;
                //  //to store value on localstorage
                //  //localstorage is used to store string data on browser
                localStorage.setItem("School-Name", schoolvalue);
                localStorage.setItem("Degree", degreevalue);
                localStorage.setItem("Year Of Completion", yearvalue);
                //redirecting to the next page after submitting data
                window.location.href = "preview.html";
                window.location.href = "skills.html";
            });
        }
    }
    //to submit skills data on preview cv page
    if (skillform) {
        skillform.addEventListener("submit", function (e) {
            // to prevent default page
            e.preventDefault();
            const skillvalue = Skills.value;
            //storing of skill data into local storage
            localStorage.setItem("Skills", skillvalue);
            //to redirect on new page
            window.location.href = "preview.html";
            window.location.href = "experiance.html";
        });
    }
    //to submit experiance details on previewcv page
    if (experianceform) {
        experianceform.addEventListener("submit", function (e) {
            //to prevent default behaviour of html page
            e.preventDefault();
            //to get the values of experiance input elements
            const jobvalue = job.value;
            const compannyvalue = company_name.value;
            const jobyearvalue = workingexperiance.value;
            //to store values on local storage
            localStorage.setItem("Job", jobvalue);
            localStorage.setItem("Company", compannyvalue);
            localStorage.setItem("workingexp", jobyearvalue);
            //to redirect on a new page
            window.location.href = "preview.html";
        });
    }
});

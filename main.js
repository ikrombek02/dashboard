let logoutBtn = document.querySelector(".logout-btn")
let logoutAlert = document.querySelector(".logout-alert")

let btnY = document.querySelector(".btnY")
let btnN = document.querySelector(".btnN")

logoutBtn.addEventListener("click", ()=>{
    logoutAlert.classList.add("logoutActived")
})
btnY.addEventListener("click", ()=>{
    logoutAlert.classList.remove("logoutActived")
})
btnN.addEventListener("click", ()=>{
    logoutAlert.classList.remove("logoutActived")
})

// SIDE BAR
let smallSidebar = document.querySelector(".small-sidebar");
let sidebar = document.querySelector(".sidebar-wrapper");
smallSidebar.addEventListener("click", ()=>{
    sidebar.classList.toggle("active-sidebar")
})

let smallSidebar1 = document.querySelector(".menu-section-bar");
let sidebar1 = document.querySelector(".sidebar");
smallSidebar1.addEventListener("click", ()=>{
    sidebar1.classList.toggle("active-sidebar-menu");
    smallSidebar1.classList.toggle("act-btn")
})

// WRITE location
let writeingBtn = document.querySelector(".writeing-btn")

let write = document.querySelector(".write")
let locationsRuntime = document.querySelector(".locations-runtime")

writeingBtn.addEventListener("click" , ()=>{
    console.log(locationsRuntime.value());
})




//geolacation
let locationButton = document.getElementById("get-location");
let locationDiv = document.getElementById("location-details");

locationButton.addEventListener("click", () => {
  //Geolocation APU is used to get geographical position of a user and is available inside the navigator object
  if (navigator.geolocation) {
    //returns position(latitude and longitude) or error
    navigator.geolocation.getCurrentPosition(showLocation, checkError);
  } else {
    //For old browser i.e IE
    locationDiv.innerText = "The browser does not support geolocation";
  }
});

//Error Checks
const checkError = (error) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      locationDiv.innerText = "Geolakatsiyangizni yoting";
      break;
    case error.POSITION_UNAVAILABLE:
      //usually fired for firefox
      locationDiv.innerText = "Manzil aniqlab bo'lmadi";
      break;
    case error.TIMEOUT:
      locationDiv.innerText = "Joylashuvini aniqlash soʻrovi tugadi";
  }
};

const showLocation = async (position) => {
  //We user the NOminatim API for getting actual addres from latitude and longitude
  let response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&lon=${position.coords.longitude}&format=json`
  );
  //store response object
  let data = await response.json();
  locationDiv.innerText = `${data.address.city}, ${data.address.country}`;
};
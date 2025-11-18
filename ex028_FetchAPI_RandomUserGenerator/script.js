// ======================================================
// Lesson 28: Fetch API – Random User Generator
// ======================================================
// Today we bully an external API into giving us humans.
// ======================================================

// Main action
function fetchUser() {
  showSpinner();

  fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then((data) => {
      hideSpinner();
      displayUser(data.results[0]);
    })
    .catch(() => {
      hideSpinner();
      document.querySelector("#user").innerHTML =
        "<p class='text-xl text-red-500'>API died. Again.</p>";
    });
}

// Display the user
function displayUser(user) {
  const box = document.querySelector("#user");

  // Dynamic background
  document.body.style.backgroundColor =
    user.gender === "female" ? "rebeccapurple" : "steelblue";

  box.innerHTML = `
    <div class="flex justify-between">
      <div class="flex">
        <img class="w-48 h-48 rounded-full mr-8" src="${user.picture.large}" />
        <div class="space-y-3">
          <p class="text-xl"><span class="font-bold">Name: </span> ${user.name.first} ${user.name.last}</p>
          <p class="text-xl"><span class="font-bold">Email: </span> ${user.email}</p>
          <p class="text-xl"><span class="font-bold">Phone: </span> ${user.phone}</p>
          <p class="text-xl"><span class="font-bold">Location: </span> ${user.location.city}, ${user.location.country}</p>
          <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
        </div>
      </div>
    </div>
  `;
}

// Spinner
function showSpinner() {
  document.querySelector(".spinner").classList.remove("hidden");
}

function hideSpinner() {
  document.querySelector(".spinner").classList.add("hidden");
}

// Events
document.querySelector("#generate").addEventListener("click", fetchUser);

// Auto-load
fetchUser();

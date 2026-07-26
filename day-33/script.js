// Devloper problem 2
// Handing Asynchronous Operations in JavaScript
document.querySelector("#getNewUserBtn").addEventListener("click", getNewUser);
function getNewUser() {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      const { name, email, location, picture } = data.results[0];
      document.querySelector("#cards").innerHTML += `
            <div
            class="card bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

            <!-- Profile -->
            <div class="flex items-center gap-4 mb-5">
                <div
                    class="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-3xl font-bold text-white">
                    <img src="${picture.medium}" alt="Profile Picture" class="w-full h-full rounded-full object-cover" />
                </div>

                <div>
                    <h2 class="text-xl font-bold text-white">${name.first} ${name.last}</h2>
                    <p class="text-sm text-gray-400">Frontend Developer</p>
                </div>
            </div>

            <!-- Details -->
            <div class="space-y-3 text-sm">
                <div class="flex justify-between border-b border-gray-700 pb-2">
                    <span class="text-gray-400">Email</span>
                    <span class="text-white">${email}</span>
                </div>

                <div class="flex justify-between border-b border-gray-700 pb-2">
                    <span class="text-gray-400">Gender</span>
                    <span class="text-white">${location.country}</span>
                </div>

                <div class="flex justify-between border-b border-gray-700 pb-2">
                    <span class="text-gray-400">Location</span>
                    <span class="text-white">${location.city}, ${location.country}</span>
                </div>
            </div>

            <!-- Bio -->
            <div class="mt-5">
                <h3 class="text-sm font-semibold text-gray-300 mb-2">About</h3>
                <p class="text-gray-400 text-sm leading-6">
                    Passionate about building modern web applications and creating
                    user-friendly experiences. Loves Tailwind CSS, React, and clean UI design.
                </p>
            </div>

        </div>
        `;
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
}

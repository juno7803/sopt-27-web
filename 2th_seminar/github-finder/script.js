const API_URL = "https://api.github.com/users";

const main = document.getElementById("main"); // html의 DOM을 받아옴
const form = document.getElementById("form");
const input = document.getElementById("input");

// 넘어오는 data : json 형태의 github profile
const createUserCard = (user) => {
  const cardHTML = `
    <div class="card">
    <div>
      <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
    </div>
    <div class="user-info">
      <h2>${user.name}</h2>
      <p>${user.bio}</p>
      <ul class="info">
        <li><strong>Followers</strong>${user.followers}</li>
        <li><strong>Following</strong>${user.following}</li>
        <li><strong>Repos</strong>${user.public_repos}</li>
      </ul>
        <div id="repos"></div>
    </div>
  </div>
    `;
  main.innerHTML = cardHTML;
};

const addReposToCard = (repos) => {
  const reposEl = document.getElementById("repos");

  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;
    
    reposEl.appendChild(repoEl);
  });
};

const getRepos = async (username) => {
  const response = await fetch(`${API_URL}/${username}/repos`);
  const responseData = await response.json();

  addReposToCard(responseData);
};

const getUser = async (username) => {
  const response = await fetch(`${API_URL}/${username}`);
  const responseData = await response.json(); // json도 promise를 반환하기 때문에 await을 붙여주었음!
  createUserCard(responseData);
  getRepos(username);
};

form.addEventListener("submit", (event) => {
  event.preventDefault(); // 새로고침되는 기본 이벤트를 막기 위함
  const user = input.value;
  if (user) {
    getUser(user);
    input.value = ""; // 입력 후 form칸 지우기
  }
}); // dom의 변화를 감지하는 함수, submit이 발생하면 다음 인자로 오는 함수를 실행

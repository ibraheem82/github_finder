'use strict';
class UI {
    constructor() {
        // * getting the profile from the html file so that we can pass data into it.
        this.profile = document.getElementById('profile');
    }


        // ! Method
        // * Display profile on the user interface
    showProfile(user){
        console.log(user);
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View user profile👤</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Followers 👥: ${user.followers}</span>
                        <span class="badge badge-info">Following: ${user.following}</span>
                        <br><br>

                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog📝: ${user.blog}</li>
                            <li class="list-group-item">Location🗺: ${user.location}</li>
                            <li class="list-group-item">Joined Since👨‍💻: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class"page-heading mb-3">Latest Repositories</h3>
            <div id="repos"></div> 
        `;
    }


    // ! Show user repositories

    showRepos(repos) {
        let output = '';

        repos.forEach((repo) =>{
            output += `
            <div class="card card-body mb-2">
            <div class="row">
                <div class="col-md-6">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </div>
                <div class="col-md-6">
                <span class="badge badge-primary">Stars⭐⭐⭐⭐⭐: ${repo.stargazers_count}</span>
                <span class="badge badge-secondary">Watchers👥: ${repo.watchers}</span>
                <span class="badge badge-success">Forks🍴: ${repo.forks_count}</span>
                </div>
            </div>
            </div>
            `;
        });


        // ! Displaying repositories

        document.getElementById('repos').innerHTML = output;

    }



        // ! will show alert when what we are typing is not a profile in github
    showAlert(message, className) {
        // * clearing any remaining alert boxes
        this.clearAlert();


        // * Creating a div
        const div = document.createElement('div');

        // * Adding classes
        div.className = className;

        // * Adding text
        div.appendChild(document.createTextNode(message));

        // * getting parent element
        const container  = document.querySelector('.searchContainer');

        // getting search box
        const search  = document.querySelector('.search');

        // inserting the alert [div]
        container.insertBefore(div, search);

        // * we want the alert box to disappear after 3 seconds
        setTimeout(() => {
            this.clearAlert();
        }, 3000);

    }

    // ! we want to clear alert messages after sometime because we dont want it to keep showing, we dont want the current alert to keep showing. we only need just one alert for a specific time.

    clearAlert() {
        const currentAlert  = document.querySelector('.alert');

        if(currentAlert) {
            currentAlert.remove();
        }
    }


    clearProfile() {
        this.profile.innerHTML = '';
    }


} 
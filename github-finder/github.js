'use strict';

class GitHub {
    constructor () {
        this.client_id = 'ee24826c587a6b306c82';
        this.client_secret = '1cb9dd3e56d4cd3d98df4f4844eaa814d3dbae63';
        this.repos_count = 8;
        // ! get the latest repositories
        this.repos_sort = 'created: asc'
    }

    // ! this is a method
    async getUser(user) {
        // * will get the user profile only
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);




        // * will get the repositories of the user only
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


        // * will give us the json data
        const profile = await profileResponse.json();

        // * will give us the repositories in json data
        const repos = await reposResponse.json();

        return{
            // ! in [es6] you can use profile: profile, it is still the same thing as saying [profile]
            profile,
            repos
        }
    }
}
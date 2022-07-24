'use strict';

// Initializing github
const github = new GitHub; 

// Initializing ui

const ui = new UI








// ! Search User
const searchUser = document.getElementById('searchUser');

// EventListeners for search input
searchUser.addEventListener('keyup', (e) => {





    // * Get user text
    // ! whatever text that is been typed in, because that the the searchUser [event]
    const userText = e.target.value;

    if (userText !== '') {
    // document.getElementById('out').innerHTML = userText;
    // ! Making an [http] call
    github.getUser(userText)
    .then(data => {
        // console.log(data);
        // when a user is not found or when we clear the input search we the error div that is showing the user should disappear.
        // ? 
        if(data.profile.message === 'Not Found'){
            // Show Alert that the user is not found


            // ! if we search something that is not a profile in github we want to have a alert pop-up
            ui.showAlert('User not found❌', 'alert alert-danger');
        } else{
            // Show profile
            ui.showProfile(data.profile);


            // Show repositories
            // ! the [repos] is now part of the data object because we are now returning it in the [github.js] file
            ui.showRepos(data.repos);
        }
    })
        
    } else{
        // if there is nothing inside the search input box the profile should cleared
        // Clear profile
        ui.clearProfile();
    }
});
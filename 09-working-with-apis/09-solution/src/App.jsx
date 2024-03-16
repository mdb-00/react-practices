import React, {useState, useEffect} from 'react';

function Users() {
    // const 

    useEffect(() => {
        fetch('https://random-data-api.com/api/users/random_user?size=10')
        .then(response => response.json())
      })
}
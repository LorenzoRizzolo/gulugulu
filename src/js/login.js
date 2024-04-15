
let url = ""

export function login(username, password){
    return new Promise((resolve, reject) => {
        let params = new URLSearchParams();
        params.append('token', localStorage.getItem("token"));
        fetch(url+"/", {
            method: "POST",
            cache:"no-cache",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params
        })
        .then(response => response.json())
        .then(data => {
            if(data.code == 100){ 
                resolve(data.clients);
            } else { 
                reject(data.details); 
            }
        })
        .catch(error => {
            reject(error);
        });
    });
}
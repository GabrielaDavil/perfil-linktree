const socialDOM = document.querySelector(".social-icons")

socialDOM.innerHTML = `
                <a href="https://open.spotify.com/track/6KtLECDztnah63TNmV4Plw" target="_blank"><img
                        src="img/socialspoty.png" alt="Spotify" class="spotyfy-icon">
                <a href="https://www.facebook.com/people/Tatiana-Reine/100080497952090/?_rdr" target="_blank"><img src="img/social.png" alt="Facebook"
                            class="facebook-icon"></a>
                <a href="https://www.instagram.com/reinetatiana/?hl=es-la" target="_blank"><img src="img/socialinst.png" alt="Instagram"
                            class="instagram-icon"></a>
`

// Capturamos la etiqueta h1 => poniendole un id 
// Lo capturamos usando getElementById o querySelector

// const titleDOM = document.querySelector("#title")

const titleDOM =document.getElementById("title")
titleDOM.innerHTML = "Tatiana Reine"
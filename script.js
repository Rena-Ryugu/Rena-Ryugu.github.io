let files = {
    "Angel Mort Console": ["Higucon_res1.png", "Higucon_res1_01.png", "Higucon_res2.png", 
                            "Higucon_res4.png", "Higucon_res4_01.png", "Higucon_res5.png", 
                            "Higucon_res5_01.png", "Higucon_res_s1.png", "Higucon_res_s1_01.png"]
};

for (let key in files) {
    for (let file in files[key]) {
        let value = files[key][file];
        let img = `<img class='main__item' src='img/${key}/${value}'>`
        document.getElementById('main').innerHTML += img;
    }
}
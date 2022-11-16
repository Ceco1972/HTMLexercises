
        const imageshover = document.getElementsByTagName("img");
        const buttonLeft = document.getElementById("left");
        const buttonRight = document.getElementById("right");

        for (let index = 0; index < imageshover.length; index++) {
            imageshover[index].addEventListener('click', function()
            {
                imageshover[index].classList.toggle("inactive");
                imageshover[index].classList.toggle("active");
                //imageshover[index].style = "border:5px solid yellow;width: 350px; height: 350px;";
            })
        }
        const arr = [...imageshover];
        buttonLeft.addEventListener("click", function()
        {
            const index = arr.findIndex(img=>img.classList.contains("active"));
            if(index===0)
            {
                const elem = arr[arr.length-1];
                const elem2 = arr[index];
                elem2.classList.remove("active");
                elem2.classList.add("inactive");
                elem.classList.remove("inactive");
                elem.classList.add("active");
            } else
            {
                const el = arr[index-1];
                const el2 = arr[index];
                el2.classList.remove("active");
                el2.classList.add("inactive");
                el.classList.remove("inactive");
                el.classList.add("active");
            }
        })

        buttonRight.addEventListener("click", function()
        {
            const index = arr.findIndex(img=>img.classList.contains("active"));
            if(index===arr.length-1)
            {
                const elem = arr[0];
                const elem2 = arr[index];
                elem2.classList.remove("active");
                elem2.classList.add("inactive");
                elem.classList.remove("inactive");
                elem.classList.add("active");
            } else
            {
               
                const el = arr[index+1];
                const el2 = arr[index];
                el2.classList.remove("active");
                el2.classList.add("inactive");
                el.classList.remove("inactive");
                el.classList.add("active");
            }
        })

        


const counters = document.querySelectorAll(".counter")
    // console.log(counters);

counters.forEach(counter => {
    // console.log(counter)

    counter.innerText = "0";

    const updatecounter = () => {
        // console.log("Hey You")
        const target = +counter.getAttribute('data-target');
        // console.log(typeof target, target);

        const ctr = Number(counter.innerText);
        // console.log(ctr);
        //    (100 is as you like, we can divide it as we like)
        const increment = target / 100;

        if (ctr < target) {
            // counter.innerText = ctr + increment
            counter.innerText = Math.ceil(ctr + increment);

            setTimeout(updatecounter, 10);

        }


    };

    updatecounter();

})
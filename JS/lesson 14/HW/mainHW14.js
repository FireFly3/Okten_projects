function getUp(wakeUp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (wakeUp) {
                console.log('good morning');
                resolve('good morning')
            } else {
                console.log('Sleep');
                reject('better sleep')
            }
        }, 1000)
    })
}

function goToShower(hotShower) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (hotShower) {
                console.log('Gooood');
                resolve('Gooood')
            } else {
                console.log('No water');
                reject('No water')
            }
        }, 3000)
    })
}

function breakfast(eatGood) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (eatGood) {
                console.log('Hum-hum');
                resolve('Hum-hum')
            } else {
                console.log('Empty refrigerator');
                reject('Empty refrigerator')
            }
        }, 300)
    })
}

function goWork(work) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (work) {
                console.log('run-run');
                resolve('run-run')
            } else {
                console.log('dayOff');
                reject('dayOff')
            }
        }, 100)
    })
}

function working(workHard) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (workHard) {
                console.log('Wjobin');
                resolve('Wjobin')
            } else {
                console.log('jobNotDone');
                reject('jobNotDone')
            }
        }, 300)
    })
}

function dinner(dinnerAtWork) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (dinnerAtWork) {
                console.log('Uuuuuu');
                resolve('Uuuuuu')
            } else {
                console.log('Suck paw');
                reject('Suck paw')
            }
        }, 700)
    })
}

function goHone(home) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (home) {
                console.log('Come Home');
                resolve('Come Home')
            } else {
                console.log('Working hard more time');
                reject('Working hard more time')
            }
        }, 500)
    })
}

function eveningMeal(dinner) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (dinner) {
                console.log('Nami-nami');
                resolve('Nami-nami')
            } else {
                console.log('Need cook');
                reject('Need cook')
            }
        }, 1500)
    })
}


function takeShower(eveningShower) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (eveningShower) {
                console.log('Nice');
                resolve('Nice')
            } else {
                console.log('Cold water');
                reject('Cold water')
            }
        }, 2500)
    })
}


function goSleep(sleep) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (sleep) {
                console.log('Zzzzzz');
                resolve('Zzzzzz')
            } else {
                console.log('Noise');
                reject('Noise')
            }
        }, 3500)
    })
}

getUp(true)
    .then(newDay => {

        return goToShower('good')
    })
    .then(hotShower => {

        return breakfast('soup')
    })
    .then(eatGood => {

        return goWork('workinggggg')
    })
    .then(work => {

        return working('Job-job-job')
    })
    .then(workHard => {

        return dinner('twix')
    })
    .then(dinnerAtWork => {

        return goHone('Uhu!')
    })
    .then(home => {

        return eveningMeal('nam-nam')
    })
    .then(dinner => {

        return takeShower('Yeah!')
    })
    .then(eveningShower => {

        return goSleep('ZzZzZz')
    })
    .then(completedTask => {

        console.log(completedTask)
    })
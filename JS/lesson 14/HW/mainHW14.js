// function getUp(wakeUp) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (wakeUp) {
//                 console.log('good morning');
//                 resolve('good morning')
//             } else {
//                 console.log('Sleep');
//                 reject('better sleep')
//             }
//         }, 1000)
//     })
// }
//
// function goToShower(hotShower) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (hotShower) {
//                 console.log('Gooood');
//                 resolve('Gooood')
//             } else {
//                 console.log('No water');
//                 reject('No water')
//             }
//         }, 3000)
//     })
// }
//
// function breakfast(eatGood) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (eatGood) {
//                 console.log('Hum-hum');
//                 resolve('Hum-hum')
//             } else {
//                 console.log('Empty refrigerator');
//                 reject('Empty refrigerator')
//             }
//         }, 300)
//     })
// }
//
// function goWork(work) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (work) {
//                 console.log('run-run');
//                 resolve('run-run')
//             } else {
//                 console.log('dayOff');
//                 reject('dayOff')
//             }
//         }, 100)
//     })
// }
//
// function working(workHard) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (workHard) {
//                 console.log('Wjobin');
//                 resolve('Wjobin')
//             } else {
//                 console.log('jobNotDone');
//                 reject('jobNotDone')
//             }
//         }, 300)
//     })
// }
//
// function dinner(dinnerAtWork) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (dinnerAtWork) {
//                 console.log('Uuuuuu');
//                 resolve('Uuuuuu')
//             } else {
//                 console.log('Suck paw');
//                 reject('Suck paw')
//             }
//         }, 700)
//     })
// }
//
// function goHone(home) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (home) {
//                 console.log('Come Home');
//                 resolve('Come Home')
//             } else {
//                 console.log('Working hard more time');
//                 reject('Working hard more time')
//             }
//         }, 500)
//     })
// }
//
// function eveningMeal(dinner) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (dinner) {
//                 console.log('Nami-nami');
//                 resolve('Nami-nami')
//             } else {
//                 console.log('Need cook');
//                 reject('Need cook')
//             }
//         }, 1500)
//     })
// }
//
//
// function takeShower(eveningShower) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (eveningShower) {
//                 console.log('Nice');
//                 resolve('Nice')
//             } else {
//                 console.log('Cold water');
//                 reject('Cold water')
//             }
//         }, 2500)
//     })
// }
//
//
// function goSleep(sleep) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (sleep) {
//                 console.log('Zzzzzz');
//                 resolve('Zzzzzz')
//             } else {
//                 console.log('Noise');
//                 reject('Noise')
//             }
//         }, 3500)
//     })
// }

//Promise

// getUp(true)
//     .then(newDay => {
//
//         return goToShower('good')
//     })
//     .then(hotShower => {
//
//         return breakfast('soup')
//     })
//     .then(eatGood => {
//
//         return goWork('workinggggg')
//     })
//     .then(work => {
//
//         return working('Job-job-job')
//     })
//     .then(workHard => {
//
//         return dinner('twix')
//     })
//     .then(dinnerAtWork => {
//
//         return goHone('Uhu!')
//     })
//     .then(home => {
//
//         return eveningMeal('nam-nam')
//     })
//     .then(dinner => {
//
//         return takeShower('Yeah!')
//     })
//     .then(eveningShower => {
//
//         return goSleep('ZzZzZz')
//     })
//     .then(completedTask => {
//
//         console.log(completedTask)
//     })

//Async await

// async function timetable() {
//     const good = await getUp(true);
//     const soup = await goToShower(good);
//     const workinggggg = await breakfast(soup);
//     const jobJobJob = await goWork(workinggggg);
//     const twix = await working(jobJobJob);
//     const uhu = dinner(twix);
//     const nam_nam = goHone(uhu);
//     const yeah = eveningMeal(nam_nam);
//     const zZzZzZz = takeShower(yeah);
//     const endOfDay = goSleep(zZzZzZz);
//
// }
//
// timetable();


//Callback

let time = 6.5;

function getUp(wakeUp, callback) {
    setTimeout(() => {
        console.log(time)
        if (wakeUp) {
            time += 0.1;
            callback(null, time);
        } else {
            callback('Sleep', null);
        }
    }, 1000)
}

function goToShower(hotShower, callback) {
    setTimeout(() => {
        console.log(time);
        if (hotShower) {
            time += 0.4;
            console.log('Gooood');
            callback(null, time);
        } else {
            callback('No water', null);
        }
    }, 3000)
}

function breakfast(eatGood, callback) {
    setTimeout(() => {
        console.log(time);
        if (eatGood) {
            time += 0.1;
            console.log('Hum-hum');
            callback(null, time);
        } else {
            callback('Empty refrigerator', null);
        }
    }, 300)
}

function goWork(work, callback) {
    setTimeout(() => {
        console.log(time);
        if (work) {
            time += 1;
            console.log('run-run');
            callback(null, time);
        } else {
            callback('dayOff', null);
        }
    }, 100)

}

function working(workHard, callback) {
    setTimeout(() => {
        console.log(time);
        if (workHard) {
            time += 4;
            console.log('Wjobin');
            callback(null, time);
        } else {
            callback('jobNotDone', null);
        }
    }, 300)
}

function dinner(dinnerAtWork, callback) {
    setTimeout(() => {
        console.log(time);
        if (dinnerAtWork) {
            time += 1;
            console.log('Uuuuuu');
            callback(null, time);
        } else {
            callback('Suck paw', null);
        }
    }, 700)
}

function goHone(home, callback) {
    setTimeout(() => {
        console.log(time);
        if (home) {
            time += 1;
            console.log('Come Home');
            callback(null, time);
        } else {
            callback('Working hard more time', null);
        }
    }, 500)
}

function eveningMeal(dinner, callback) {
    setTimeout(() => {
        console.log(time);
        if (dinner) {
            time += 0.1;
            console.log('Nami-nami');
            callback(null, time);
        } else {
            callback('Need cook', null);
        }
    }, 1500)
}


function takeShower(eveningShower, callback) {
    setTimeout(() => {
        console.log(time);
        if (eveningShower) {
            time += 0.4;
            console.log('Nice');
            callback(null, time);
        } else {
            callback('Cold water', null);
        }
    }, 2500)
}


function goSleep(sleep, callback) {
    setTimeout(() => {
        console.log(time);
        if (sleep) {
            time += 0.1;
            console.log('Zzzzzz');
            callback(null, time);
        } else {
            callback('Noise', null);
        }
    }, 3500)
}

getUp(true, (err, goodMorning) => {
    if (err) {
        console.error(err)
    } else {
        goToShower(goodMorning, (err1, Gooood) => {
            if (err1) {
                console.error(err1)
            } else {
                breakfast(Gooood, (err2, runRun) => {
                    if (err2) {
                        console.error(err2)
                    } else {
                        goWork(runRun, (err3, wjobin) => {
                            if (err3) {
                                console.error(err3)
                            } else {
                                working(wjobin, (err4, uuuuu) => {
                                    if (err4) {
                                        console.error(err4)
                                    } else {
                                        dinner(uuuuu, (err5, comeHome) => {
                                            if (err5) {
                                                console.error(err5)
                                            } else {
                                                goHone(comeHome, (err6, namiNami) => {
                                                    if (err6) {
                                                        console.error(err6)
                                                    } else {
                                                        eveningMeal(namiNami, (err7, nice) => {
                                                            if (err7) {
                                                                console.error(err7)
                                                            } else {
                                                                takeShower(nice, (err8, zZzZz) => {
                                                                    if(err8) {
                                                                        console.error(err8)
                                                                    } else {
                                                                        goSleep(zZzZz)
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})
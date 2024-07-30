let tutors = [
    {
        name: '최원장',
        time: '9to6',
    },
    {
        name: '윤창식',
        time: '9to6',
    },
    {
        name: '박가현',
        time: '9to6',
    },
    {
        name: '김병연',
        time: '9to6',
    },
];

const newTutors = tutors.map(function (tutor) {
    return {
        name: tutor.name,
        time: tutor.time,
        isMentoring: true
    };
});

console.log(newTutors);
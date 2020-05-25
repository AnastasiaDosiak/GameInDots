export const fetchGameSettings = () => {
    return fetch('https://starnavi-frontend-test-task.herokuapp.com/game-settings').then(
        res => res.json()
    )
};

export const sendWinnerInfo = (winner, dateOfWin) => {
    return fetch('https://starnavi-frontend-test-task.herokuapp.com/winners', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({date: dateOfWin, winner})
    }).then(
        res => res.json()
    );
};

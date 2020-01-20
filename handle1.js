function handle1() {
    document.querySelector('#btn').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('demo').innerHTML = 'working';
    });
}

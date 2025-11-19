function outer2() {
    var count;
    console.log(count);
    count = 5;

    let inner = () => {
        console.log(count);
    };
    inner();
}
outer2();

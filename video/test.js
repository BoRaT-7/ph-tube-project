function getTime(time){
    const hour = parseInt(time/3600);
    let remainningSecond = time % 3600;
    const minute = remainningSecond /60;
    return `${hour} hour ${minute} minute ago`;

}